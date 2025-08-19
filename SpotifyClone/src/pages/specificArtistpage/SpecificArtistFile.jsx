import React from "react"


const SpecificArtistFile = ({currentElem}) => {
    
    return (
        
        <div>
            <img src={currentElem.imgsrc} alt="" />
            <h1>{currentElem.heading}</h1>
            <h1>{currentElem.subHeading}</h1>
        </div>
    )
}

export default SpecificArtistFile