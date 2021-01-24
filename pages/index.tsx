import React from 'react'
import { useEffect } from 'react'

import Link from 'next/link'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import Amplify from 'aws-amplify'
import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { ListTodosQuery, ListAlbumsQuery } from '../src/graphql/API'
import { listTodos, listAlbums } from '../src/graphql/queries'
import { onCreateAlbum } from '../src/graphql/subscriptions'

import Todo from '../src/component/Todo'
import AlbumList from '../src/component/AlbumList'

import { useRecoilState } from 'recoil'
import todosState from '../src/store/todos'
import albumState from '../src/store/albums'

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
})

const TodosIndex = () => {
    const [todos, setTodos] = useRecoilState(todosState)
    const [albums, setAlbums] = useRecoilState(albumState)

    useEffect(() => {
        const asyncFunc = async () => {
            const result = (await API.graphql(graphqlOperation(listTodos))) as GraphQLResult<ListTodosQuery>
            setTodos(result.data.listTodos.items)

            const albumResult = (await API.graphql(graphqlOperation(listAlbums))) as GraphQLResult<ListAlbumsQuery>
            setAlbums(albumResult.data.listAlbums.items)
        }
        asyncFunc()
    }, [])

    return (
        <>
            <AmplifySignOut />
            <Grid container direction="column" spacing={2}>
                <Grid item md={6}>
                    <h1>Todos</h1>
                </Grid>
                <Grid item md={6}>
                    <Link href="/todos/new">
                        <Button component="a" variant="contained" color="primary">
                            New
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Grid container direction="column" spacing={2}>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </Grid>
            <Grid container direction="column" spacing={2}>
                {albums.map((album) => (
                    <AlbumList key={album.id} album={album} />
                ))}
            </Grid>
        </>
    )
}

export default withAuthenticator(TodosIndex)
