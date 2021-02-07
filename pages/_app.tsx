import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'
import Header from '../src/component/Header'
import Footer from '../src/component/Footer'
import { RecoilRoot } from 'recoil'
import { makeStyles } from '@material-ui/core/styles'
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink, createHttpLink } from '@apollo/client'
import { Auth } from 'aws-amplify'
import { createAuthLink } from 'aws-appsync-auth-link'

const useStyles = makeStyles((_theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
}))

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    const classes = useStyles()
    const authConfig = {
        url: process.env.appsync_graphqlEndpoint,
        region: process.env.appsync_region,
        auth: {
            type: 'AMAZON_COGNITO_USER_POOLS',
            jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
        },
    }
    const link = ApolloLink.from([
        (createAuthLink(authConfig) as unknown) as ApolloLink,
        createHttpLink({ uri: authConfig.url }),
    ])
    const client = new ApolloClient({
        link,
        cache: new InMemoryCache(),
    })

    return (
        <>
            <RecoilRoot>
                <Head>
                    <title>Up</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <ApolloProvider client={client}>
                    <ThemeProvider theme={theme}>
                        <div className={classes.root}>
                            <CssBaseline />
                            <Header />
                            <Container>
                                <Component {...pageProps} />
                            </Container>
                            <Footer />
                        </div>
                    </ThemeProvider>
                </ApolloProvider>
            </RecoilRoot>
        </>
    )
}

export default MyApp
