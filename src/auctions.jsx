import React from 'react'
import Card from './card';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';



export default function auctions () {
  const arr=[1,2,3,4,5];

    return (
        <>
        <div>
      <div className='d-flex mt-2 '>
          <div><h1>Live auctions 🔥</h1></div>
          
</div>

          <div class="row row-cols-1 row-cols-md-5 rowHot">
         
  <div class="col mb-4">
    <div class="card h-100">
      <div>
   
    <MDBCardImage src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" class="infinite" alt="Transparent MDB Logo" id="animated-img1"/> <MDBCardImage src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" class="infinite" alt="Transparent MDB Logo" id="animated-img1"/> <MDBCardImage src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" class="infinite" alt="Transparent MDB Logo" id="animated-img1"/>
    <i class="fas fa-ellipsis-h"></i>
</div>

    
    <MDBCardImage src='https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg' alt='...' fluid  className='Bimg'/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card .</p>
      </div>
    </div>
  </div>
  
  <div class="col mb-4">
    <div class="card h-100">
    <div>
   
    <MDBCardImage src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" class="infinite" alt="Transparent MDB Logo" id="animated-img1"/> <MDBCardImage src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" class="infinite" alt="Transparent MDB Logo" id="animated-img1"/> <MDBCardImage src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" class="infinite" alt="Transparent MDB Logo" id="animated-img1"/>
    <i class="fas fa-ellipsis-h"></i>
</div>
    <MDBCardImage src='https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg' alt='...' fluid  className='Bimg'/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
    <div>
   
   <MDBCardImage src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" class="infinite" alt="Transparent MDB Logo" id="animated-img1"/> <MDBCardImage src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" class="infinite" alt="Transparent MDB Logo" id="animated-img1"/> <MDBCardImage src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" class="infinite" alt="Transparent MDB Logo" id="animated-img1"/>
   <i class="fas fa-ellipsis-h"></i>
</div>
    <MDBCardImage src='https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg' alt='...' fluid  className='Bimg'/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
    <div>
   
   <MDBCardImage src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" class="infinite" alt="Transparent MDB Logo" id="animated-img1"/> <MDBCardImage src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" class="infinite" alt="Transparent MDB Logo" id="animated-img1"/> <MDBCardImage src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" class="infinite" alt="Transparent MDB Logo" id="animated-img1"/>
   <i class="fas fa-ellipsis-h"></i>
</div>
    <MDBCardImage src='https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg' alt='...' fluid  className='Bimg'/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card .</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
    <div>
   
    <MDBCardImage src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" class="infinite" alt="Transparent MDB Logo" id="animated-img1"/> <MDBCardImage src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" class="infinite" alt="Transparent MDB Logo" id="animated-img1"/> <MDBCardImage src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" class="infinite" alt="Transparent MDB Logo" id="animated-img1"/>
    <i class="fas fa-ellipsis-h"></i>
</div>
<div class="Card">
    <MDBCardImage src='https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg' alt='...' fluid  className='Bimg'/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card .</p>
      </div>
      </div>
    </div>
  </div>
  </div>
</div>
        </>
    )
}
