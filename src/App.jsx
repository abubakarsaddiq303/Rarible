import React from 'react';
import './Rerible.css';
import Navbar from './Navbar';
import HeaderSection from './HeaderSection';
import Hot from './Hot';
import Top from './Top';

import MainContent from './MainContent';

export default function App() { 
    return (
        <>
            
       <div className='TopSpan'>
       <span >Aavigotche chose yours & earn <strong>x3 $RARI</strong> rewards ❤️</span>
       </div>
       <Navbar/>
       <HeaderSection/>
       <MainContent/>
       <Hot/>
       <Top/>
      
            
        </>
    )
}
