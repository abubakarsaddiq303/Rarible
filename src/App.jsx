import React from 'react';
import './Rerible.css';
import Navbar from './Navbar';
import HeaderSection from './HeaderSection';
import MainContent from './MainContent';
import Hotbids from './Hotbids';
import HotCollection from './HotCollection';
import Explore from './Explore';
import Footer from './Footer';


export default function App() {
    return (
        <>
       <div className='TopSpan'>
       <span >Aavigotche chose yours & earn <strong>x3 $RARI</strong> rewards ❤️</span>
       </div>
       <Navbar/>
       <HeaderSection/>
       <MainContent/>
       <Hotbids/>
       <HotCollection/>
       <Explore/>
       <Footer/>
      
            
        </>
    )
}
