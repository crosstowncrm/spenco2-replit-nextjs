import React from 'react';
import Head from "next/head";
import GoTop from './GoTop';
import AgentNavbarNoCRM from './AgentNavbarNoCRM';
import FooterTwo from './FooterTwo';
 
const AgentLayout = ({ children }) => {
    return(
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Gbay - React Next JS Multipurpose Startup Agency Template</title>
            </Head>
            <AgentNavbarNoCRM />
 
            {children}

            <FooterTwo />

            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    )
}

export default AgentLayout