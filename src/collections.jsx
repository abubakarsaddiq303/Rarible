import React from 'react';
import Card from './card';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink
  }from 'mdb-react-ui-kit';


export default function collections () {
    const arr=[1,2,3,4,5];

return(
    <>
 <div className='d-flex mt-2 '>
     
          <div><h2>Hot Collections</h2></div>
          
          <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link Navlink' >
                  1Days
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Day 1</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>DAY 2</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>One week</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
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