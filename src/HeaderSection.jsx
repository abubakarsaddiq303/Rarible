import React from 'react'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function HeaderSection() {
    return (
        <>

        <div className="row container-fluid mt-2 ">
         
            <div className="col-md-4 col-sm-8 FirstCol ">
            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/044.jpg'  alt='...' fluid  className='col-md-3 col-sm-5  FirstCol mywidth  m-2 '/>
            </div>
              


            <div className="col-md-8 col-sm-5  SecondCol ml-2 Row">
                <div className="row">


                
               <div className="col-md-3 col-sm-5 m-2  ">
                 < MDBCardImage src='https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg' alt='...' fluid  className='col-md-3 col-sm-5 Ssubcol Swidth m-2 '/>
                </div>
                


                <div className="col-md-3 col-sm-5   m-2 ">
                <MDBCardImage src='https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg' alt='...' fluid  className='col-md-3 col-sm-5  Ssubcol Swidth  m-2 '/>
               </div>
               <div className="col-md-3 col-sm-5   m-2 ">
               <MDBCardImage src='https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg' alt='...' fluid  className='col-md-3 col-sm-5  Ssubcol Swidth m-2 '/>
               </div> 
               <div className="col-md-3 col-sm-5   m-2 ">
               <MDBCardImage src='https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg' alt='...' fluid  className='col-md-3 col-sm-5  Ssubcol Swidth m-2 '/>
               </div>
               <div className="col-md-3 col-sm-5  m-2 ">
               <MDBCardImage src='https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg' alt='...' fluid  className='col-md-3 col-sm-5  Ssubcol Swidth m-2 '/>
               </div>
               <div className="col-md-3 col-sm-5   m-2 ">
               <MDBCardImage src='https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg' alt='...' fluid  className='col-md-3 col-sm-5  Ssubcol Swidth m-2 '/>
               </div>
                   </div>
            

            </div>

        </div>
            
        </>
    )
}
