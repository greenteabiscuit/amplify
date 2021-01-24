import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Amplify from 'aws-amplify'
import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { GetTodoQuery } from '../../src/graphql/API'
import { getTodo } from '../../src/graphql/queries'

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

const TodosShow = () => {
    const [todo, setTodo]: [GetTodoQuery['getTodo'], React.Dispatch<{}>] = useState(null)
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        const asyncFunc = async () => {
            const result = (await API.graphql(graphqlOperation(getTodo, { id }))) as GraphQLResult<GetTodoQuery>
            setTodo(result.data.getTodo)
        }
        asyncFunc()
    }, [])

    return !todo ? (
        <></>
    ) : (
        <>
            <Grid container direction="column" spacing={2}>
                <Grid item md={6}>
                    <h1>Todos</h1>
                </Grid>
                <Grid item md={6}>
                    <Link href="/">
                        <Button component="a" variant="contained" color="default">
                            Back
                        </Button>
                    </Link>
                    <Link href="/todos/[id]/edit" as={`/todos/${todo.id}/edit`}>
                        <Button component="a" variant="contained" color="primary">
                            Edit
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Grid container direction="column" spacing={2}>
                <Grid item md={6}>
                    <Typography variant="h2">{todo.name}</Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography color="textSecondary">
                        created at {new Date(todo.timestamp * 1000).toLocaleString()}
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography>{todo.completed ? 'Completed' : 'In progress'}</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default withAuthenticator(TodosShow)
