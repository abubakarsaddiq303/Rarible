import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';


export default function Footer() {
    return (
        <>
        <div className=' mt-5'>
            <div >
            <MDBBtn rounded outline  className='LoadMorebtn'><h5>Load more</h5></MDBBtn>
            </div>
            <div className='FooterLast'>
            <div className='row FLastMaindiv'>
                 
                 <div className=' col-4 colFour'>
                     <h4 style={{color:'black',fontWeight:'bold',marginLeft:'32px'}}>Get the latest Rarible updates</h4>
                     <div style={{marginTop:'1.4rem'}}>
                     <div class="wrapper position-relative">
	
	<div class="searchbtn"><MDBBtn  className='ImButton' rounded color="black">I’m in</MDBBtn></div>
    <input type="text" class="input" 
	placeholder="Your e-mail"/>
     </div>

                     </div>

                 </div>
                 <div className=" col-2 colTwo">
                     <div style={{marginLeft:"33px"}}>
                     <h5 style={{fontWeight:'bold',color:'black',marginLeft:'26px'}}>Rarible</h5>
                     <ul style={{marginTop:'1.4rem'}}>
                         <li>Explore</li>
                         <li>Help Center</li>
                         <li>Blog</li>
                         <li>Jobs <span style={{backgroundColor:'red',padding:"6px",borderRadius:"22px",color:'white'}}>21</span></li>
                         <li>Become a partner</li>
                         <li>Bug bounty</li>
                     </ul>
                     </div>

                 </div>
                 <div className=" col-2 colThree">
                    <div style={{marginLeft:"33px"}}>
                        
                 <h5 style={{fontWeight:'bold',color:'black',marginLeft:'22px'}}>Community</h5>
                     <ul style={{marginTop:'1.4rem'}}>
                         <li>RARI Token</li>
                         <li>Discussion</li>
                         <li>Voting</li>
                         <li>Sugest Fearture <span>21</span></li>
                         <li>Rerible Protocole</li>
                         <li>Subscribe</li>
                     </ul>

                    </div>
                 </div>
                 <div className=" col-4 colFour" style={{marginLeft:'-130px'}}>
                     <div style={{marginLeft:'200px',width:'10%'}}>
                     <h5 style={{fontWeight:'bold',color:'black'}}>Language</h5>
                      <div style={{marginTop:'1.4rem'}}>
                      <select className="form-select" aria-label="Default select example" style={{paddingLeft:'16rem',borderRadius:'30px'}} >
  <option selected >English</option>
  <option value="1">한국어</option>
  <option value="2">中文</option>
  <option value="3">日本語</option>
</select>
                      </div>
                     </div>
                 </div>

                



                 <footer class="page-footer font-small  pt-4">


<div class="container">

  
  <ul class="list-unstyled list-inline text-right">
    <li class="list-inline-item">
      <a class="btn-floating btn-fb mx-1">
        <i class="fab fa-facebook-f"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-tw mx-1">
        <i class="fab fa-twitter"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-gplus mx-1">
        <i class="fab fa-google-plus-g"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-li mx-1">
        <i class="fab fa-linkedin-in"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-dribbble mx-1">
        <i class="fab fa-dribbble"> </i>
      </a>
     
 

 
    </li>
    <div class="footer-copyright " style={{marginRight:'60rem'}}>© Rarible, Inc. All rights reserved.</div>
  </ul>
  

</div>

</footer>
            
         </div>
            </div>
        </div>
            
        </>
    )
}
