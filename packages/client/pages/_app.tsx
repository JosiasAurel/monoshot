
import React from "react";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/global.css";

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {

    const publicPages: string[] = ["/", "/kitchen"];
    const { pathname } = useRouter();

    const isPublicPage: boolean = publicPages.includes(pathname);

    return (
        <ClerkProvider {...pageProps}>
            {isPublicPage ? (
                <Component {...pageProps} />
            ) : (
                <>
                    <SignedIn>
                        <Component {...pageProps} />
                    </SignedIn>
                    <SignedOut>
                        <RedirectToSignIn />
                    </SignedOut>
                </>
            )}
        </ClerkProvider>
    )
}

export default App;