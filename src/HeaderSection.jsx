import React from 'react'
import Card from './card';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';



export default function HeaderSection () {
  const arr=[1,2,3,4,5,6,7];

    return (
        <>
        
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
