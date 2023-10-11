'use client';
import CTA from "@/components/CTA/CTA";
import Logo from "@/components/Logo/Logo";
import { Heading } from "@storybook/blocks";
import styles from './loginContainer.module.scss';


const LoginContainer = () => {
    console.log({ process })
    const { NEXT_PUBLIC_ALM_CLIENT_ID, NEXT_PUBLIC_SSO_ADOBE_AUTH_URL, NEXT_PUBLIC_ACCOUNT_ID, NEXT_PUBLIC_lEARNER_SCOPE, NEXT_PUBLIC_REDIRECT_DOMAIN } = process.env

    console.log({ NEXT_PUBLIC_ALM_CLIENT_ID, NEXT_PUBLIC_SSO_ADOBE_AUTH_URL, NEXT_PUBLIC_ACCOUNT_ID, NEXT_PUBLIC_lEARNER_SCOPE, NEXT_PUBLIC_REDIRECT_DOMAIN })

    const getAuthCode = async () => {
        const url = `${NEXT_PUBLIC_SSO_ADOBE_AUTH_URL}?${new URLSearchParams({
            client_id: NEXT_PUBLIC_ALM_CLIENT_ID,
            redirect_uri: `${NEXT_PUBLIC_REDIRECT_DOMAIN}/auth`,
            account: NEXT_PUBLIC_ACCOUNT_ID,
            scope: NEXT_PUBLIC_lEARNER_SCOPE,
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