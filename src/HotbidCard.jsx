import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn,MDBCol } from 'mdb-react-ui-kit';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
import { FiMoreHorizontal } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";


export default function App({url,Title,text,text2,Heart,image1,image2,image3}) {
  return (
    <MDBCard className='Mdbcard' >
      <div className=' mb-5'>
        <div  className='images d-flex position-relative mb-5'>
        <MDBCol lg='2'  className='mb-4 position-absolute'>
        <img
          src={image1}
          className=' Cardimages'
          alt=''
        />
 </MDBCol>
      <MDBCol lg='2'  className='mb-4 position-absolute'>
        <img
          src={image2}
          className='Cardimages two'
          alt=''
        />
      </MDBCol>
      <MDBCol lg='2'  className='mb-4 position-absolute'>
        <img
          src={image3}
          className='Cardimages three'
          alt=''
        />
      </MDBCol>
     <div style={{paddingLeft:'11rem'}}> <FiMoreHorizontal/>     </div>
        </div>
      </div>
      <MDBCardImage src={url} position='top' alt='...' style={{height:"140px"}} />
      <MDBCardBody className='Mdbbody'>
        <MDBCardTitle className='font-weight-bold' style={{color:'black'}}>{Title}</MDBCardTitle>
        <MDBCardText className=' Mdbtext first '>
          {text}
        </MDBCardText>
        <div className='position-relative pb-3'>
        <MDBCardText className='Mdbtext second position-absolute' style={{marginTop:"-15px"}}>{text2}</MDBCardText>
        <MDBCardText className='Mdbtext_three  ' style={{marginTop:"0px",}}><FiHeart/><span style={{marginLeft:"0px"}}>{Heart}</span></MDBCardText>
        </div>
       
         
        
      </MDBCardBody>
    </MDBCard>
  );
}