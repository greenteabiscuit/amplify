import React, { useState } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import Amplify from 'aws-amplify'
import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { CreateAlbumMutation } from '../../src/graphql/API'
import { createAlbum } from '../../src/graphql/mutations'
import TextField from '@material-ui/core/TextField'
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

const NewForms = () => {
    const router = useRouter()
    const [textField, setTextField] = useState('')
    const { register, errors, reset } = useForm()

    const onSubmitAlbum = async () => {
        const albumMutation = (await API.graphql(
            graphqlOperation(createAlbum, {
                input: {
                    name: textField,
                    timestamp: Math.floor(Date.now() / 1000),
                },
            }),
        )) as GraphQLResult<CreateAlbumMutation>
        reset()
        router.push('/')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextField(e.target.value)
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

    return (
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
                </Grid>
            </Grid>
            <Grid container direction="column" spacing={2}>
                <Grid item md={6}>
                    <TextField
                        label="Name"
                        name="name"
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

export default withAuthenticator(NewForms)
