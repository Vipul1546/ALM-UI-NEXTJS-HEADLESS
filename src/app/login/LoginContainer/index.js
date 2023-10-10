'use client';
import CTA from "@/components/CTA/CTA";
import Logo from "@/components/Logo/Logo";
import { Heading } from "@storybook/blocks";
import { useRouter } from 'next/navigation';
import styles from './loginContainer.module.scss';


const LoginContainer = () => {
    const router = useRouter()

    const getAuthCode = async () => {
        const { NEXT_PUBLIC_ALM_CLIENT_ID } = process.env
        const url = `https://learningmanager.adobe.com/oauth/o/authorize?${new URLSearchParams({
            client_id: NEXT_PUBLIC_ALM_CLIENT_ID,
            redirect_uri: 'https://local-alm-ui-nextjs-headless.vercel.adobe.com/auth',
            account: 116411,
            scope: 'learner:read,learner:write',
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