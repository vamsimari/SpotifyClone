import React from 'react'
import './ArtistCard.css'
import { artistList } from '../../config/config'

const ArtistCard = ({setCurrentPage, setCurrentElem}) => {
    return (
        <div className='artistCardMainContainer'>
         {
            artistList.map((ele,id)=>{
                return(
                    <div key={id} onClick={()=>{
                        setCurrentPage("artistSpecificPage")
                        setCurrentElem(ele)
                    }} className="artistCard">
                        <img src={ele.img} alt="" />
                        <div className="textContainer">
                        <h1>{ele.name}</h1>
                        <p>Artist</p>
                        </div>
                        <span id='playButton'>
                            <svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path></svg>
                        </span>
                    </div>
                )
            })
         }

         
        </div> 
   )
}

export default ArtistCard