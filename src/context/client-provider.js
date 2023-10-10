'use client'

import { SessionProvider } from "next-auth/react"

export const ClientProvider = ({
    children,
    session
}) => {
    return <SessionProvider session={session}>
        {children}
    </SessionProvider>
}