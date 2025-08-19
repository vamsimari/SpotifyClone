import React from 'react'
import './TrendingCard.css'
import { TrendingCardData } from '../../config/config'
const TrendingCard = ({setCurrentPage, setCurrentEle}) => {
    
    
    return (
        <>
        <div className='trendingCardMainContainer'>
        {
            TrendingCardData.map((ele, id)=> {
              return (
                <>  
              <div key={id} onClick={()=>{
                  setCurrentPage("musicSpecificPage")
                  setCurrentEle(ele)
                }} className='cardContainer'>
                  <img src={ele.imgsrc} alt=""/>
                  <div className='CardTextContainer'>
                    <h2>{ele.heading}</h2>
                    <p>{ele.subHeading}</p>
                  </div>
                 
                </div>
                    
                
                </>
              )
            
             } )
        }
        </div>
        </>
    
    )
    
}

export default TrendingCard