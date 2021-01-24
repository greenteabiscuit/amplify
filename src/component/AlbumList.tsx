import React, { FC } from 'react'
import Link from 'next/link'

import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api'
import { DeleteAlbumMutation } from '../../src/graphql/API'
import { deleteAlbum } from '../../src/graphql/mutations'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'

import { useRecoilState } from 'recoil'
import albumState from '../../src/store/albums'

//album: albumの型を入れる
type Props = {
    album: any
}

const AlbumList: FC<Props> = ({ album }) => {
    const [albums, setAlbums] = useRecoilState(albumState)

    const onArchive = async () => {
        const del = (await API.graphql(
            graphqlOperation(deleteAlbum, { input: { id: album.id } }),
        )) as GraphQLResult<DeleteAlbumMutation>
        // album: ここのdelあとで消す
        console.log(del)
        setAlbums(albums.filter((item) => item.id !== album.id))
    }
    return (
        <Grid item md={6}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        <Link href={`/albums/${album.id}`}>{album.name}</Link>
                    </Typography>
                    <Typography color="textSecondary">
                        created at {new Date(album.timestamp * 1000).toLocaleString()}
                    </Typography>
                </CardContent>
                <CardActions>
                    <FormControlLabel control={<Checkbox color="primary" />} label="Done" />
                    <Button variant="contained" color="secondary" onClick={onArchive}>
                        Archive
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default AlbumList
