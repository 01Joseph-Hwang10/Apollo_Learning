import { gql, useQuery } from '@apollo/client'
import React from 'react'
import {useParams} from 'react-router-dom'

const GET_MOVIES = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            id # Make it same with the others to let apollo know they're same
            medium_cover_image
            title
            isLiked @client
        }
    }
`

export default function Detail() {

    const {id} = useParams()
    const {loading, data} = useQuery(GET_MOVIES, {
        variables: { id }
    })

    return (
        <div>
            {loading && <span>Loading...</span>}
            {!loading && data.movie && <span>{data.movie.title}</span>}
        </div>
    )
}
