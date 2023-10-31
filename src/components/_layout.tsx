import Head from 'next/head';
import AppBar from './AppBar';
import styled from 'styled-components';
import Footer from './Footer';
import { ReactNode } from 'react';

const StyledMain = styled.main`
    padding-inline: 120px;
    min-height: 100vh;
`

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Head>
                <title>Blog - Orion Arquitetura</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Blog da Orion Arquitetura" />
                <link rel="icon" href="/SIMBOLO_ORION.png" />
                <meta property="og:image" content="/ORION_Logotipo.png" />
                <meta name="twitter:image" content="/ORION_Logotipo.png" />
            </Head>
            <AppBar />
            <StyledMain>
                {children}
            </StyledMain>
            <Footer />
        </>
    )
}