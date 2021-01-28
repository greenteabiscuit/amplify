import React, { useEffect } from 'react'
import Amplify from 'aws-amplify'
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import awsconfig from '../src/aws-exports'

import Link from 'next/link'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api'
import { ListAlbumsQuery } from '../src/graphql/API'
import { listAlbums } from '../src/graphql/queries'
import { onCreateAlbum } from '../src/graphql/subscriptions'

import AlbumList from '../src/component/AlbumList'

import { useRecoilState } from 'recoil'
import albumState from '../src/store/albums'

Amplify.configure({
    aws_project_region: process.env.project_region,
    aws_cognito_identity_pool_id: process.env.cognito_identity_pool_id,
    aws_cognito_region: process.env.cognito_region,
    aws_user_pools_id: process.env.user_pools_id,
    aws_user_pools_web_client_id: process.env.user_pools_web_client_id,
    oauth: {},
    aws_appsync_graphqlEndpoint: process.env.appsync_graphqlEndpoint,
    aws_appsync_region: process.env.appsync_region,
    aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
    aws_user_files_s3_bucket: process.env.user_files_s3_bucket,
    aws_user_files_s3_bucket_region: process.env.user_files_s3_bucket_region,
})

Amplify.configure(awsconfig)

const AuthStateApp = () => {
    const [authState, setAuthState] = React.useState()
    const [user, setUser] = React.useState()
    const [albums, setAlbums] = useRecoilState(albumState)

    useEffect(() => {
        const asyncFunc = async () => {
            const albumResult = (await API.graphql(graphqlOperation(listAlbums))) as GraphQLResult<ListAlbumsQuery>
            setAlbums(albumResult.data.listAlbums.items)
        }
        asyncFunc()
    }, [])

    useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState)
            setUser(authData)
        })
    }, [])

    return authState === AuthState.SignedIn && user ? (
        <div className="App">
            <AmplifySignOut />
            <Grid container direction="column" spacing={2}>
                <Grid item md={6}>
                    <h1>Albums</h1>
                </Grid>
                <Grid item md={6}>
                    <Link href="/albums/new">
                        <Button component="a" variant="contained" color="primary">
                            New
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Grid container direction="column" spacing={2}>
                {albums.map((album) => (
                    <AlbumList key={album.id} album={album} />
                ))}
            </Grid>
        </div>
    ) : (
        <AmplifyAuthenticator>
            <AmplifySignUp
                slot="sign-up"
                formFields={[{ type: 'username' }, { type: 'password' }, { type: 'email' }]}
            />
        </AmplifyAuthenticator>
    )
}

export default AuthStateApp
