import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';


export default function Footer() {
    return (
        <>
        <div className=' mt-5'>
            <div >
            <MDBBtn rounded outline  className='LoadMorebtn'>Load more</MDBBtn>
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
                 <div className=" col-4 colFour">
                     <div style={{marginLeft:'67px',width:'100%'}}>
                     <h5 style={{fontWeight:'bold',color:'black',marginLeft:'5px'}}>Language</h5>
                      <div style={{marginTop:'1.4rem'}}>
                      <select className="form-select" aria-label="Default select example" >
  <option selected >English</option>
  <option value="1">한국어</option>
  <option value="2">中文</option>
  <option value="3">日本語</option>
</select>
                      </div>
                     </div>
                 </div>
             

         </div>
            </div>
        </div>
            
        </>
    )
}
