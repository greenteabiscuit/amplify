import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Amplify from 'aws-amplify'
import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { GetAlbumQuery, ListPhotosByAlbumQuery } from '../../src/graphql/API'
import { getAlbum, listPhotosByAlbum } from '../../src/graphql/queries'
import S3ImageUpload from '../../src/component/S3ImageUpload'
import PhotosList from '../../src/component/PhotosList'
import aState from '../../src/store/album'
import { useRecoilState } from 'recoil'

Amplify.configure({
    aws_project_region: process.env.project_region,
    aws_cognito_identity_pool_id: process.env.aws_cognito_identity_pool_id,
    aws_cognito_region: process.env.aws_cognito_region,
    aws_user_pools_id: process.env.user_pools_id,
    aws_user_pools_web_client_id: process.env.user_pools_web_client_id,
    oauth: {},
    aws_appsync_graphqlEndpoint: process.env.appsync_graphqlEndpoint,
    aws_appsync_region: process.env.appsync_region,
    aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
    aws_user_files_s3_bucket: process.env.user_files_s3_bucket,
    aws_user_files_s3_bucket_region: process.env.user_files_s3_bucket_region,
})

//Amplify.configure(awsmobile)

const AlbumsShow = () => {
    const [photos, setPhotos] = useState([])
    const [fetchingPhotos, setFetchingPhotos] = useState(false)
    const [nextPhotosToken, setNextPhotosToken] = useState(null)
    const [album, setAlbum] = useRecoilState(aState)
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        const asyncFunc = async () => {
            const result = (await API.graphql(graphqlOperation(getAlbum, { id }))) as GraphQLResult<GetAlbumQuery>
            setAlbum(result.data.getAlbum)
            const FETCH_LIMIT = 20
            setFetchingPhotos(true)
            const queryArgs = {
                albumId: result.data.getAlbum.id,
                limit: FETCH_LIMIT,
                nextToken: nextPhotosToken,
            }
            if (!queryArgs.nextToken) delete queryArgs.nextToken
            const results = (await API.graphql(
                graphqlOperation(listPhotosByAlbum, queryArgs),
            )) as GraphQLResult<ListPhotosByAlbumQuery>
            setPhotos((p) => p.concat(results.data.listPhotosByAlbum.items))
            setNextPhotosToken(results.data.listPhotosByAlbum.nextToken)
            setFetchingPhotos(false)
        }
        asyncFunc()
    }, [router])

    return !album ? (
        <></>
    ) : (
        <>
            <Grid container direction="column" spacing={2}>
                <Grid item md={6}>
                    <h1>Albums</h1>
                </Grid>
                <Grid item md={6}>
                    <Link href="/">
                        <Button component="a" variant="contained" color="default">
                            Back
                        </Button>
                    </Link>
                    <Link href="/albums/[id]/edit" as={`/albums/${album.id}/edit`}>
                        <Button component="a" variant="contained" color="primary">
                            Edit
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Grid container direction="column" spacing={2}>
                <Grid item md={6}>
                    <Typography variant="h2">{album.name}</Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography color="textSecondary">
                        created at {new Date(album.timestamp * 1000).toLocaleString()}
                    </Typography>
                </Grid>
            </Grid>
            <S3ImageUpload albumId={album.id} />
            <PhotosList photos={photos} />
        </>
    )
}

export default withAuthenticator(AlbumsShow)
