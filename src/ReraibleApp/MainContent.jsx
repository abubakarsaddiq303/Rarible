
import React from 'react';
import Card from './card';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn,MDBCol } from 'mdb-react-ui-kit';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";



export default function MainContent() {
  const arr=[0,1,2,3,4,5,6,7,8,9];

    return (
        <>
        <div className='d-flex mt-4 position-relative ContentTop ' style={{marginLeft:"30px",color:'black'}}>
          <div><h1 style={{fontWeight:'bold'}}>Top Collection</h1></div>
            <div className='ml-4 ml-sm-4 select'><select className=' font-weight-bold' style={{color:'blue'}} >
  <option selected>days</option>
  <option value="1">1 day</option>
  <option value="2">2 days</option>
  <option value="3">one week</option>
</select></div>
        </div>
        <div className='row main'>
        
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
