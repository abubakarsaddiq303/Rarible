import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import ExploreCard from './ExploreCard';
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
import { RiFlashlightLine } from "react-icons/ri";
import { CgDollar } from "react-icons/cg";
import Ficon from './Pictures/Khn.png';
import { TiThList } from "react-icons/ti";
import { BiAlignJustify } from "react-icons/bi";




export default function Explore() {
    const arr={
        Item:[
            {url:first,Title:'Fire Gun',text:'Note for sale',text2:'1 wETH',Heart:'55',image1:sixth,image2:seventh,image3:Rlogo},
            {url:second,Title:'King Logo',text:'From 25 Eth ',text2:'4 wETH',Heart:'64',image1:fifth,image2:third,image3:Rlogo},
            {url:third,Title:'Girl Attitude',text:'From 11 EtH ',text2:'3 wETH',Heart:'123',image1:sixth,image2:first,image3:Rlogo},
            {url:fourth,Title:'Lahor Logo',text:'Note for sale 1/1',text2:'1 wETH',Heart:'86',image1:eighth,image2:fourth,image3:Rlogo},
            {url:fifth,Title:'Lion Walp',text:'Top Tranding ',text2:'5 wETH',Heart:'99',image1:seventh,image2:sixth,image3:Rlogo},

            {url:first,Title:'Fire Gun',text:'Note for sale',text2:'1 wETH',Heart:'55',image1:sixth,image2:seventh,image3:Rlogo},
            {url:second,Title:'King Logo',text:'From 25 Eth ',text2:'4 wETH',Heart:'64',image1:fifth,image2:third,image3:Rlogo},
            {url:third,Title:'Girl Attitude',text:'From 11 EtH ',text2:'3 wETH',Heart:'123',image1:sixth,image2:first,image3:Rlogo},
            {url:fourth,Title:'Lahor Logo',text:'Note for sale ',text2:'1 wETH',Heart:'86',image1:eighth,image2:fourth,image3:Rlogo},
            {url:fifth,Title:'Lion Walp',text:'Top Tranding ',text2:'5 wETH',Heart:'99',image1:seventh,image2:sixth,image3:Rlogo},

            {url:first,Title:'Fire Gun',text:'Note for sale',text2:'1 wETH',Heart:'55',image1:sixth,image2:seventh,image3:Rlogo},
            {url:second,Title:'King Logo',text:'From 25 Eth',text2:'4 wETH',Heart:'64',image1:fifth,image2:third,image3:Rlogo},
            {url:third,Title:'Girl Attitude',text:'From 11 EtH',text2:'3 wETH',Heart:'123',image1:sixth,image2:first,image3:Rlogo},
            {url:fourth,Title:'Lahor Logo',text:'Note for sale',text2:'1 wETH',Heart:'86',image1:eighth,image2:fourth,image3:Rlogo},
            {url:fifth,Title:'Lion Walp',text:'Top Tranding ',text2:'5 wETH',Heart:'99',image1:seventh,image2:sixth,image3:Rlogo},

            {url:first,Title:'Fire Gun',text:'Note for sale',text2:'1 wETH',Heart:'55',image1:sixth,image2:seventh,image3:Rlogo},
            {url:second,Title:'King Logo',text:'From 25 Eth',text2:'4 wETH',Heart:'64',image1:fifth,image2:third,image3:Rlogo},
            {url:third,Title:'Girl Attitude',text:'From 11 EtH',text2:'3 wETH',Heart:'123',image1:sixth,image2:first,image3:Rlogo},
            {url:fourth,Title:'Lahor Logo',text:'Note for sale',text2:'1 wETH',Heart:'86',image1:eighth,image2:fourth,image3:Rlogo},
            {url:fifth,Title:'Lion Walp',text:'Top Tranding ',text2:' wETH',Heart:'99',image1:seventh,image2:sixth,image3:Rlogo},

            {url:first,Title:'Fire Gun',text:'Note for sale',text2:'1 wETH',Heart:'55',image1:sixth,image2:seventh,image3:Rlogo},
            {url:second,Title:'King Logo',text:'From 25 Eth',text2:'4 wETH',Heart:'64',image1:fifth,image2:third,image3:Rlogo},
            {url:third,Title:'Girl Attitude',text:'From 11',text2:'3 wETH',Heart:'123',image1:sixth,image2:first,image3:Rlogo},
            {url:fourth,Title:'Lahor Logo',text:'Note for sale',text2:'1 wETH',Heart:'86',image1:eighth,image2:fourth,image3:Rlogo},
            {url:fifth,Title:'Lion Walp',text:'Top Tranding ',text2:'5 wETH',Heart:'99',image1:seventh,image2:sixth,image3:Rlogo},
        ],
        DropdownLinks:[
            {link1:'All',link2:'Art',link3:'Photography',link4:'Metaverses',link5:'Music'},
            {link1:'All',link2:'Art',link3:'Photography',link4:'Metaverses',link5:'Music'}

    ]
        
         }

    return (
        <>
        <div className='Explore'>
        <div className='container d-flex mt-5 position-relative  p-0 Explorbtn ' style={{marginLeft:"30px"}}>
                
        <h1 style={{marginLeft:'30px',color:'black',fontWeight:'bold'}}> Explore </h1>
                <div className='ExplorDiv'>
                    <ExploreCard Ricon={<TiThList/>} Title={'Category'}/>
                </div>
                <div className='ExplorDiv'>
                    <ExploreCard Ricon={<TiThList/>} Title={'Collecions'}/>
                </div>
                <div className='ExplorDiv'>
                    <ExploreCard Ricon={<RiFlashlightLine/>}Title={'Sale type'}/>
                </div>
                <div className='ExplorDiv'>
                    <ExploreCard Ricon={<CgDollar/>} Title={'Price range'}/>
                </div>
              
               
                
                    
      
            </div>
            <div className='Exp'>
            <div className=' row mt-3 d-flex' style={{marginLeft:'15px'}} > 
            {arr.Item.map((itm,ind)=>{
                return( <div className='col-lg-3 col-sm-4 ExploreCard2 '>
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
        </div>
        </>
    )
}
