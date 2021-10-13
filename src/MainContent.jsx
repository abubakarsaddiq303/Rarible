
import React from 'react';
import Card from './card';

export default function MainContent() {
  const arr=[1,2,3,4,5,6,7,8,9,10,11,12];

    return (
        <>
        <div className='d-flex mt-2  '>
          <div><h1>Top Collection in</h1></div>
            <div className='ml-2 mr-6 select'><select className=' font-weight-bold' style={{color:'blue'}} >
  <option selected>days</option>
  <option value="1">1 day</option>
  <option value="2">2 days</option>
  <option value="3">one week</option>
</select></div>
        </div>
        <div className='row'>
         
          {arr.map((item,index)=>{
            return(
              <div className="col-md-2 col-sm-4 p-3">
              <Card number={item} key={index}/>
              
            </div>
            )
            
          })}



        </div>
      
            
        </>
    )
}
