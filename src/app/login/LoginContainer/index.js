'use client';
import CTA from "@/components/CTA/CTA";
import Logo from "@/components/Logo/Logo";
import { Heading } from "@storybook/blocks";
import { useRouter } from 'next/navigation';
import styles from './loginContainer.module.scss';


const LoginContainer = () => {
    const router = useRouter()

    const { NEXT_PUBLIC_REDIRECT_DOMAIN, } = process.env

    const getAuthCode = async () => {
        const { NEXT_PUBLIC_ALM_CLIENT_ID, SSO_ADOBE_AUTH_URL, ACCOUNT_ID, lEARNER_SCOPE } = process.env
        const url = `${SSO_ADOBE_AUTH_URL}?${new URLSearchParams({
            client_id: NEXT_PUBLIC_ALM_CLIENT_ID,
            redirect_uri: NEXT_PUBLIC_REDIRECT_DOMAIN,
            account: ACCOUNT_ID,
            scope: lEARNER_SCOPE,
            response_type: 'CODE'
        })}`
        window.location.replace(url);
    }

    const loginHandler = () => {
        getAuthCode()
    }
    return (
        <>
            <Logo />
            <Heading customClass={styles.heading} type="h2" weight="heading-extra-bold">
                Login with Adobe ID
            </Heading>
            <CTA primary variant="primary" onClick={loginHandler}>
                Login
            </CTA>
        </>
    )
}

export default LoginContainer