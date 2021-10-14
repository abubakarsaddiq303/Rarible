
import React from 'react';
import Card from './card';
import {MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink
}from 'mdb-react-ui-kit';

export default function MainContent() {
  const arr=[1,2,3,4,5,6,7,8,9,10,11,12];

    return (
        <>
        <div className='d-flex mt-2  '>
          <div><h2>Top Collection in</h2></div>
          <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link Navlink' >
                  Days
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
