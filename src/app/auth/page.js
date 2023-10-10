'use client'
import Loader from "@/components/Loader/Loader";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


const Auth = () => {
    const urlSearchParams = useSearchParams();
    const [almCode, setAlmCode] = useState('');
    const { SSO_ADOBE_AUTH_URL, NEXT_PUBLIC_REDIRECT_DOMAIN, ACCOUNT_ID } = process
    const getAuthCode = async () => {
        const { NEXT_PUBLIC_ALM_CLIENT_ID } = process.env
        const url = `${SSO_ADOBE_AUTH_URL}?${new URLSearchParams({
            client_id: NEXT_PUBLIC_ALM_CLIENT_ID,
            redirect_uri: NEXT_PUBLIC_REDIRECT_DOMAIN,
            account: ACCOUNT_ID,
            scope: lEARNER_SCOPE,
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
    return (<Loader text='LOGGING IN' />)
}

export default Auth