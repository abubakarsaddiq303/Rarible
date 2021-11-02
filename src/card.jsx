import React from 'react'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function card({number}) {
    return (
        <>
      
          <div className='d-flex'>
        
        <div className='para'><p>{number}</p></div>
   <div> <MDBCard style={{ Width: '100px' }}>
      <MDBRow className='g-0'>
     
        <MDBCol md='8'>
          
          <MDBCardImage src='https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg' alt='...' fluid  className='Cimg'/>
        </MDBCol>
        <MDBCol md='4'>
          <MDBCardBody className='cardbody' style={{width:'142px'}}>

            <MDBCardTitle className='font-weight-bold'>Art Blocks</MDBCardTitle>
            <MDBCardText>
              $23,54,22
            </MDBCardText>
            
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard></div>
      </div>
            
        </>
    )
}
