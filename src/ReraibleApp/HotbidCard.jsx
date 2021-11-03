import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn,MDBCol } from 'mdb-react-ui-kit';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
import { BsThreeDots } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";

export default function App({url,Title,text,text2,Heart,image1,image2,image3}) {
  return (
    <MDBCard className='Mdbcard' style={{ maxWidth: '19rem'  }}>
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
      <MDBCol lg='2'  className='mb-4 option'>
      <MDBDropdown>
      <MDBDropdownToggle className='Toggle '><BsThreeDots/></MDBDropdownToggle>
      <MDBDropdownMenu className='DropdownMenu'>
        <MDBDropdownItem style={{paddingTop:'2rem'}}>
          <MDBDropdownLink  href="#" style={{fontWeight:'bold'}}>Refresh Metadata</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#" style={{fontWeight:'bold'}}>Share</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#"style={{fontWeight:'bold'}}>Report</MDBDropdownLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
   
      </MDBCol>
        </div>
      </div>
      <MDBCardImage src={url} position='top' alt='...' style={{height:"280px"}} />
      <MDBCardBody className='Mdbbody'>
        <MDBCardTitle className='font-weight-bold' style={{color:'black'}}>{Title}</MDBCardTitle>
        <MDBCardText className=' Mdbtext first '>
          {text}
        </MDBCardText>
        <div className='position-relative pb-3'>
        <MDBCardText className='Mdbtext second position-absolute' style={{marginTop:"-15px"}}>{text2}</MDBCardText>
        <MDBCardText className='Mdbtext_three  ' style={{marginTop:"-15px",}}><FaHeartbeat/><span style={{marginLeft:"5px"}}>{Heart}</span></MDBCardText>
        </div>
       
         
        
      </MDBCardBody>
    </MDBCard>
  );
}