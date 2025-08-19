import React, {useState} from 'react'
import './MainSection.css'
import Trending from '../trending/Trending'
import PopularArtists from '../popularArtists/PopularArtists'
import SpecificMusicFile from '../../pages/specificMusicPage/SpecificMusicFile'
import SpecificArtistFile from '../../pages/specificArtistpage/SpecificArtistFile'
const MainSection = () => {
    const [currentPage, setCurrentPage] = useState("home")
    const [currentEle, setCurrentEle] = useState(null)
    const [currentElem, setCurrentElem] = useState(null)
    
    return (
        <main className='mainSection'>
            {
              console.log(currentPage,currentEle,currentElem) 
            }
            {
              currentPage === "home" ? 
              <>
              <Trending setCurrentEle={setCurrentEle} setCurrentPage={setCurrentPage}/>
                <PopularArtists  setCurrentElem={setCurrentElem} setCurrentPage={setCurrentPage}/>
                </> :
                 currentPage === "musicSpecificPage" ?
                <>
                  <SpecificMusicFile currentEle={currentEle}/>
                </> :
                 currentPage ==="artistSpecificPage" ? 
                 <>
                   <SpecificArtistFile currentElem={currentElem}/>
                    
                   <><h1>Artist</h1></>
      
                     
                 </> : 
                 null
            }
        
        </main> 
   )
}

export default MainSection