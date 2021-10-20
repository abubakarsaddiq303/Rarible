
import React from 'react'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function card({card}) {
    return (
        <>
          <div className='d-flex'>
        
        <div className='para'><p>{card}</p></div>
   <div>
      <MDBRow className='g-2'>
     
        <MDBCol md='4'>
          
          <MDBCardImage src='https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg' alt='...' fluid  className='Cimg'/>
        </MDBCol>
       
      </MDBRow>
    
    </div>
      </div>
            
        </>
    )
}

