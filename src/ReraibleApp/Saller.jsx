import React from 'react';
import Card from './card';

export default function MainContent() {
  const arr=[0,1,2,3,4,5,6,7,8,9];

    return (
        <>
        <div className='d-flex mt-4 position-relative ContentTop ' style={{marginLeft:"30px",color:'black'}}>
          <div><h1 style={{fontWeight:'bold'}}>Top </h1></div>

          <div className='ml-4 ml-sm-4 select'><select className=' font-weight-bold' style={{paddingRight:'12rem', color:'#0066ff'}} >
  <option selected>sallers</option>
  <option selected>buyers</option>
 
</select></div>

          <div className='ml-4 ml-sm-4 select'><select className=' font-weight-bold' style={{paddingRight:'1rem',color:'#0066ff'}} >
  
  <option selected="1">1day</option>
  <option selected="2">2days</option>
  <option value="3">one week</option>
</select></div>



        </div>
        <div className='row Saller'>
         
          {arr.map((item,index)=>{
            return( 
              <div className="col-lg-2 col-md-4 col-sm-5 p-lg-1 p-3 myCard">
              <Card number={item} key={index}/>
              
            </div>
            )
          })}
        </div>
      
            
        </>
    )
}
