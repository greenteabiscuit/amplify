import React, { useState } from 'react'

import API, { graphqlOperation } from '@aws-amplify/api'
import { Header, Input, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import * as queries from '../graphql/queries'
import { SearchPhotosQuery } from '../graphql/API'
import { GraphQLResult } from '@aws-amplify/api'
import PhotosList from './PhotosList'

export interface Props {
    prop?: null
}

const Search: React.FC<Props> = () => {
    const [photos, setPhotos] = useState([])
    const [label, setLabel] = useState('')
    const [hasResults, setHasResults] = useState(false)
    const [searched, setSearched] = useState(false)

    const getPhotosForLabel = async () => {
        setPhotos([])
        const result = (await API.graphql(
            graphqlOperation(queries.searchPhotos, { filter: { labels: { match: label } } }),
        )) as GraphQLResult<SearchPhotosQuery>
        if (result.data.searchPhotos.items.length !== 0) {
            setHasResults(result.data.searchPhotos.items.length > 0)
            setPhotos((p) => p.concat(result.data.searchPhotos.items))
        }
        setSearched(true)
    }

    return (
        <Segment>
            <Input
                type="text"
                placeholder="Search for photos"
                icon="search"
                iconPosition="left"
                action={{ content: 'Search', onClick: getPhotosForLabel }}
                name="label"
                value={label}
                onChange={(e) => {
                    setLabel(e.target.value)
                    setSearched(false)
                }}
            />
            {hasResults ? (
                <PhotosList photos={photos} />
            ) : !searched ? (
                ''
            ) : (
                <Header as="h4" color="grey">
                    No photos found matching '{label}'
                </Header>
            )}
        </Segment>
    )
}

export default Search
