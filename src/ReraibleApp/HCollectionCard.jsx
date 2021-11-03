
import React from 'react';
import { MDBCard,MDBCol, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

export default function HCollectionCard({title,text,image1,image2}) {
  return (
    <MDBCard  style={{ maxWidth: '18rem',border: '1px solid rgba(0, 0, 0, 0.349)' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={image1} fluid alt='...' style={{height:'150px',width:"100%",padding:"1rem",borderRadius:'35px'}} />
        
      </MDBRipple>
      <MDBCol lg='2'  className='position-absolute HCollcol'>
        <img
          src={image2}
          className=' HCollectionImage'
          alt=''
        />
        </MDBCol>
      <MDBCardBody>
        <div className='text-center'>
        <MDBCardTitle className='font-weight-bold' style={{color:'black'}}>{title}</MDBCardTitle>
        <MDBCardText className='font-weight-bold'>
          {text}
        </MDBCardText>
        
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}