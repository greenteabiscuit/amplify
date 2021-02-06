import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import Amplify from 'aws-amplify'
import TextField from '@material-ui/core/TextField'
import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { UpdateAlbumMutation, GetAlbumQuery } from '../../../src/graphql/API'
import { updateAlbum } from '../../../src/graphql/mutations'
import { getAlbum } from '../../../src/graphql/queries'
import { useForm } from 'react-hook-form'

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

const AlbumsNew = () => {
    const [album, setAlbum] = useState(null)
    const router = useRouter()
    const [textField, setTextField] = useState('')
    const { register, errors } = useForm()
    const { id } = router.query

    useEffect(() => {
        const asyncFunc = async () => {
            const result = (await API.graphql(graphqlOperation(getAlbum, { id }))) as GraphQLResult<GetAlbumQuery>
            setAlbum(result.data.getAlbum)
        }
        asyncFunc()
    }, [router])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextField(e.target.value)
    }

    const onSubmitAlbum = async () => {
        const updateAlbumMutation = (await API.graphql(
            graphqlOperation(updateAlbum, {
                input: {
                    name: textField,
                    id: album.id,
                },
            }),
        )) as GraphQLResult<UpdateAlbumMutation>
        router.push('/albums/[id]', `/albums/${album.id}`)
    }

    const errorMessage = (errors, field) => {
        const message = []
        if (errors[field]?.type == 'required') {
            message.push('required')
        }
        if (errors[field]?.type == 'maxLength') {
            message.push('Exceeded 20 characters')
        }
        return message.join(', ')
    }

    return !album ? (
        <></>
    ) : (
        <>
            <Grid container direction="column" spacing={2}>
                <Grid item md={6}>
                    <h1>Albums</h1>
                </Grid>
                <Grid item md={6}>
                    <Link href="/albums/[id]" as={`/albums/${album.id}`}>
                        <Button component="a" variant="contained" color="default">
                            Back
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Grid container direction="column" spacing={2}>
                <Grid item md={6}>
                    <TextField
                        label={album.name}
                        name="name"
                        placeholder="Edit Album Name"
                        fullWidth
                        onChange={handleChange}
                        inputRef={register({ required: true, maxLength: 20 })}
                        error={Boolean(errors.name)}
                        helperText={errorMessage(errors, 'name')}
                    />
                </Grid>
                <Grid item md={6}>
                    <Button type="submit" variant="contained" color="primary" onClick={() => onSubmitAlbum()}>
                        Save
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default withAuthenticator(AlbumsNew)
