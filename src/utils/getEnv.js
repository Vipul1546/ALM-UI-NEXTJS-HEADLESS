// const fix_key = (key) => { return key.replace('NEXT_PUBLIC_', ''); }

export const getEnv = () => {
    let myEnv = {}
    if (typeof window === 'undefined') {
        myEnv = { ...process.env }
    } else {
        const clientEnv = {
            ALM_TOKEN_URL: process.env.NEXT_PUBLIC_ALM_TOKEN_URL,
            ALM_API_URL: process.env.NEXT_PUBLIC_ALM_API_URL
        }
        // const obj = Object.assign(
        //     {},
        //     ...Object.keys(process?.env).
        //         map(key => ({ [fix_key(key)]: process?.env[key] }))
        // )
        myEnv = { ...clientEnv }
    }

    return myEnv
}