import React from 'react'
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/client';
import Movie from '../components/Movie';


const GET_MOVIES = gql`
{
    movies {
        id # Make it same with the others to let apollo know they're same
        medium_cover_image
        title
        isLiked @client
    }
}
`;

export default function Home() {

    const { loading, error, data } = useQuery(GET_MOVIES)

    return (
        <div>
            {loading && <span>Loading...</span>}
            {data?.movies?.map(m=>(<Movie key={m.id} {...m} />))}
            {!loading && (!data || !data.movies) && <span>No Movies found</span>}
        </div>
    )
}
