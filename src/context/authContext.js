'use client';

import Cookies from 'js-cookie';
import { useRouter, useSearchParams } from "next/navigation";
import { createContext, useContext, useEffect, useState } from 'react';
import { api, authApi } from './api';


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const urlSearchParams = useSearchParams();

    useEffect(() => {
        async function fetchUserFromCookie() {
            const token = Cookies.get('token')
            if (token) {
                api.defaults.headers.Authorization = `Bearer ${token}`
                api.defaults.headers.Accept = `application/vnd.api+json`
                const { data: user } = await api.get('/user')
                console.log({ user })
                setUser(user)
            }
            setIsLoading(false)
        }
        fetchUserFromCookie()
    }, [])

    useEffect(() => {
        const paramCode = urlSearchParams.get('code') || ''
        if (paramCode) login(paramCode)
    }, [])

    const login = async (code) => {
        const { data: { expires_in, access_token, refresh_token, user_role, account_id, user_id } } = await authApi.post(`/oauth/token`, new URLSearchParams({
            client_id: process.env.NEXT_PUBLIC_ALM_CLIENT_ID,
            client_secret: process.env.NEXT_PUBLIC_ALM_CLIENT_SECRET,
            code,
            scope: 'learner:read,learner:write'
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        console.log("TOKEN ", access_token)
        if (access_token) {
            Cookies.set('token', access_token, { expires: expires_in })
            api.defaults.headers.Authorization = `Bearer ${access_token}`
            api.defaults.headers.Accept = `application/vnd.api+json`
            const { data: user } = await api.get('/user')
            console.log({ user })
            setUser(user)
            router.push('/my-learning')
        }
    }

    const logout = () => {
        Cookies.remove('token')
        setUser(null)
        delete api.defaults.headers.Authorization
        delete api.defaults.headers.Accept
        window.location.pathname = '/login'
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading: isLoading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}



export const useAuth = () => useContext(AuthContext)