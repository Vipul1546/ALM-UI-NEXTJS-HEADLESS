'use client'
import { useAuth } from "@/context/authContext";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Auth = () => {
    const urlSearchParams = useSearchParams();
    const [almCode, setAlmCode] = useState('');

    const { isAuthenticated, user, login, loading, logout } = useAuth()

    const getAuthCode = async () => {
        const { NEXT_PUBLIC_ALM_CLIENT_ID } = process.env
        const url = `https://learningmanager.adobe.com/oauth/o/authorize?${new URLSearchParams({
            client_id: NEXT_PUBLIC_ALM_CLIENT_ID,
            redirect_uri: 'https://alm-ui-nextjs-headless.vercel.app/auth',
            account: 116411,
            scope: 'learner:read,learner:write',
            response_type: 'CODE'
        })}`
        window.location.replace(url);
    }

    useEffect(() => {
        const paramCode = urlSearchParams.get('code') || ''
        if (!paramCode) getAuthCode()

        setAlmCode(paramCode)
        console.log({ param: urlSearchParams.get('code') })
    }, [])

    useEffect(() => {

    }, [almCode])
    return (<p>logging in...</p>)
}

export default Auth