import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn,MDBCol } from 'mdb-react-ui-kit';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function HeaderSection() {
    return (
        <>
        <div className="row container-fluid mt-2 Head ">
       
            <div className="col-md-5 col-sm-10 border-2 FirstCol ">
              <div className='FirstSubcol'>

              </div>

            </div>
            <div className="col-md-7 col-sm-10  SecondCol ml-3 ">
                <div className="row ">
                <div className="col-md-3  Ssubcol first  m-2">
    
                </div>
                <div className="col-md-3  Ssubcol second  m-2 ">
    
               </div>
               <div className="col-md-3  Ssubcol third  m-2 ">
    
               </div> 
               <div className="col-md-3  Ssubcol fourth  m-2 ">
              
               </div>
               <div className="col-md-3  Ssubcol fifth  m-2 ">
              
               </div>
               <div className="col-md-3  Ssubcol sixth  m-2 ">
              
               </div>
              
                   </div>
                  
                  
            </div>

        </div>
            
        </>
    )
}
