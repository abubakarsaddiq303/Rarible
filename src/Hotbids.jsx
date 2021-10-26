import React from 'react';
import HotbidCard from './HotbidCard';
import first from './Pictures/first.jpg';
import second from './Pictures/second.jpg';
import third from './Pictures/three.jpg';
import fourth from './Pictures/foure.jpg';
import fifth from './Pictures/five.jpg';
import sixth from './Pictures/image1.jpg';
import seventh from './Pictures/image2.jpg';
import eighth  from  './Pictures/image3.jpg';
import khan from './Pictures/Khn.png';
import Rlogo from './Pictures/Rlogo.png';

export default function Hotbids() {
    const arr={
        Item:[
            {url:first,Title:'Fire Gun',text:'Note for sale',text2:'1.1 wETH',Heart:'55',image1:sixth,image2:seventh,image3:Rlogo},
            {url:second,Title:'King Logo',text:'From 25 Eth to 1/10',text2:'4.2 wETH',Heart:'64',image1:fifth,image2:third,image3:Rlogo},
            {url:third,Title:'Girl Attitude',text:'From 11 EtH to 2/4',text2:'3 wETH',Heart:'123',image1:sixth,image2:first,image3:Rlogo},
            {url:fourth,Title:'Lahor Logo',text:'Note for slae 1/1',text2:'1.53 wETH',Heart:'86',image1:eighth,image2:fourth,image3:Rlogo},
            {url:fifth,Title:'Lion Walp',text:'Top Tranding 23 Eth',text2:'5.52 wETH',Heart:'99',image1:seventh,image2:sixth,image3:Rlogo},
        ]
        ,
        images:[sixth,eighth,seventh,khan,first,second]
         }
    
    return (
        <>
        <div className='container Hotbids m-3 '>
            <h1 className='font-weight-bold ' style={{color:'black',marginLeft:'5px'}}>Hot Bids 🔥</h1>
            <div className='mt-5 d-flex'> 
            {arr.Item.map((itm,ind)=>{
                return( <div className='col-lg-3 col-sm-4  '>
                <HotbidCard
                key={ind}
                 url={itm.url}
                Title={itm.Title}
                 text={itm.text} 
                 text2={itm.text2} 
                 Heart={itm.Heart}
                 image1={itm.image1}
                 image2={itm.image2}
                 image3={itm.image3}
                 />
                </div>)
            })}
             

            </div>
        </div>
            
        </>
    )
}
