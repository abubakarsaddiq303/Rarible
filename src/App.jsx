import React from 'react';
import './Rerible.css';
import Navbar from './Navbar';
import HeaderSection from './HeaderSection';
import MainContent from './MainContent';
import Top from './Top';
import Hot from './Hot';
import auctions from './auction';
import Collections  from './collections';
import Explore from './Explore';
import Footer from './Footer';









export default function App() { 
    return (
        <>
            
       <div className='TopSpan'>
       <span >Create NFTs for FREE on Rarible with lazy minting 🔥</span>
       </div>
       
       <Navbar/>
       <HeaderSection/>
       <MainContent/>
       <Top/>
       <Hot/>
       <auctions/>
       <collections/>
       <Explore/>
       <Footer/>


       
       
     
      
            
        </>
    )
}
