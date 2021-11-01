import React from 'react';
import Card from './card';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink
  }from 'mdb-react-ui-kit';


export default function Top () {
    const arr=[1,2,3,4,5,6];

return(
    <>
 <div className='d-flex mt-2 '>
     
          <div><h2>Top</h2></div>
          <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link Navlink' >
                Sellers
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Sellers</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Buyers</MDBDropdownLink>
                  </MDBDropdownItem>
                  
                </MDBDropdownMenu>
              </MDBDropdown>
              <h2>in</h2>
            
          
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