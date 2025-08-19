import React from 'react'
import './Sidebar.css'
import Cards from './Cards'
const Sidebar = () => {
   const Text = ["Legal","Security and Privacy center","Privacy Policy","Cookies","About Ads","Accessibility"]
    return (
        <div className="sidebarMainContainer">
         <div className="sidebarTopSection">
            <h1>Your Library</h1>
            <p>+</p>
         </div>
         <div className="sidebarMiddleSection">
           <Cards heading= "Create Your Frist Playlist" subheading="it's easy,we'll help you" buttontext="Create playlist"/>
           <Cards heading= "Let's find some podcasts to follow" subheading="We'll keep you updated on new episodes" buttontext="Browse podcasts"/>
         </div>
         <div className="sidebarBottomSection">
            <div className="sidebarBottomSectionTopContainer">
            {
               Text.map((ele)=>{
                  return(
                     <p>{ele}</p>
                  )
                 
               })
            }
               
            </div>
            <div className="sidebarBottomSectionBottomContainer">
               <p>Cookies</p>
            </div>
            <div className="sidebarBottomSectionBottomContainer">
               <button>English</button>
            </div>
         </div>
        </div> 
   )
}

export default Sidebar