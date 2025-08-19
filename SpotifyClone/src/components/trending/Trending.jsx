import React from 'react'
import './Trending.css'
import TrendingCard from '../trendingCard/TrendingCard'

const Trending = ({setCurrentPage, setCurrentEle}) => {
    return (
        <div className ='trendingSectionMainContainer'>
            <span>
              Trending Songs
            </span>
            
            <TrendingCard setCurrentPage={setCurrentPage} setCurrentEle={setCurrentEle}  />
        </div>
        
   )
}

export default Trending