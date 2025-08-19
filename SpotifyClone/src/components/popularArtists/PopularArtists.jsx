import React from 'react'
import './PopularArtists.css'
import ArtistCard from '../artistCard/ArtistCard'

const PopularArtists = ({setCurrentPage, setCurrentElem}) => {
    return (
        <div className='popularArtistsMainContainer trendingSectionMainContainer'>
            <span>
              PopularArtists
            </span>
         
         <ArtistCard setCurrentPage={setCurrentPage} setCurrentElem={setCurrentElem}/>
        </div> 
   )
}

export default PopularArtists