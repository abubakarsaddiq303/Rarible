import React, { useState } from 'react';
import './Rerible.css';
import Rlogo from './Rlogo.png';

import { BsFillMoonFill } from "react-icons/bs";


import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
  
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    
    <MDBNavbar expand='lg' className='mb-3 pt-2 navBar' >
      <MDBContainer fluid className='Navcontainer '>
        <MDBNavbarBrand href='#'><img src={Rlogo} alt=" NOthing" style={{height:'3.0rem'}} /></MDBNavbarBrand>
        <div className='navbar-text'><span><strong className='Reriblesize'  style={{paddingRight:'1rem'}}>Rarible</strong></span></div>
       
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar  show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 navabrnav'>
            
          <form className='d-flex input-group w-auto formInput'>
            
            <input   type='search' className='form-control' placeholder=' Collection, item or user ' aria-label='Search' style={{borderRadius:'2.5rem',width:'15rem',height:'3rem',backgroundColor:'#04040512',}} />
                   
                 </form>
                 
            <MDBNavbarItem className='navbaritem navbarItem w-auto' style={{color:'',paddingRight:''}} >
              <MDBNavbarLink active color='black' aria-current='page' href='#' className='Navlink Explore'>
                Explore
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbaritem navbarItem mProfile'>
              <MDBNavbarLink href='#' className='Navlink '>My Profile</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbaritem Following'>
              <MDBNavbarLink href='#' className='Navlink'>Following</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbaritem Activity'>
              <MDBNavbarLink href='#' className='Navlink'>Activity</MDBNavbarLink>
            </MDBNavbarItem>
             

          <div style={{border:'1px solid',background:'flex',height:'5px',paddingBottom:'2rem',paddingLeft:'',width:'1px',marginright:'18px',marginLeft:'26px',marginTop:'1rem'}}>
                
                </div>
                

            <MDBNavbarItem className='navbaritem navbarItem Works'>
              <MDBNavbarLink href='#' className='Navlink'>How it Works</MDBNavbarLink>
            </MDBNavbarItem>
        
            <MDBNavbarItem className='navbaritem navbarItem w-auto'>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link Navlink'style={{marginright:'10rem,'}} >
                  Community
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Action</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Another action</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Something else here</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <div className='navbaritem'>
          <div>
            <MDBBtn rounded className='mx-2 navbtn create' color='secondary'style={{width:'6rem'}}>
        Create
      </MDBBtn>
      </div>
            </div>
            <div className='navbaritem'>
            <MDBBtn rounded className='mx-0 navbtn sign' color='light' style={{width:'6rem'}}>
       Sign in
      </MDBBtn>
            </div>
            <div className='navbaritem mt-2 '>
      <MDBBtn  tag='a'  color='black'   outline floating >
      <BsFillMoonFill className=' mt-2  Moonpic '/>
      </MDBBtn>
            </div>


           </MDBNavbarNav>
        </MDBCollapse>

       
     </MDBContainer>
        </MDBNavbar>

  

   );
}