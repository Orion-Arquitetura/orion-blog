import Head from 'next/head';
import AppBar from './AppBar';
import styled from 'styled-components';
import Footer from './Footer';

const StyledMain = styled.main`
    padding-inline: 120px;
`

export default function RootLayout({ children }) {
    return (
        <>
            <Head>
                <title>Blog - Orion Arquitetura</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Blog da Orion Arquitetura" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppBar />
            <StyledMain>
                {children}
            </StyledMain>
            <Footer />
        </>
    )
}