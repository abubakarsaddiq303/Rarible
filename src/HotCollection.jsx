import React from 'react'
import HCollectionCard from './HCollectionCard'
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
export default function HotCollection() {
    const arr={
        Item:[
            {Title:'DBSFE',text:'$34,54',image1:sixth,image2:seventh},
            {Title:'The Drops',text:'$62,34',image1:fifth,image2:third},
            {Title:'Aavegotchi',text:'$243,65',image1:sixth,image2:first},
            {Title:'BULL RUNNERS',text:'$98,76',image1:eighth,image2:fourth},
            // {Title:'HOPPERS',text:'$312,54',image1:seventh,image2:sixth},
        ]
        
         }
    return (
        <>
        <div className='container m-0'>
            <h1 style={{marginLeft:'30px',color:'black',fontWeight:'bold'}}>Hot collections <span><img className='Blastimage' src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/collision_1f4a5.png" alt="" style={{width:"40px"}} /></span> </h1>
            <div className='HotCollCards mt-5 d-flex '> 
            {arr.Item.map((item,index)=>{
                return( <div className='col-lg-3 col-sm-3 '>
                <HCollectionCard title={item.Title} text={item.text} image1={item.image1} 
                 />
                </div>)
            })}
              

            </div>
        </div>
            
        </>
    )
}
