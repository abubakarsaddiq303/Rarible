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
        <MDBNavbarBrand href='#'><img src={Rlogo} alt=" NOthing" style={{height:'3.3rem'}} /></MDBNavbarBrand>
        <div className='navbar-text'><span><strong className='Reriblesize'>Rarible</strong></span></div>
       
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 navabrnav'>
            
          <form className='d-flex input-group w-auto formInput'>
            
            <input   type='search' className='form-control' placeholder='Collection,item or user' aria-label='Search' style={{borderRadius:'2.5rem',width:'25rem',height:'3rem',}} />
                   
                 </form>
                 
            <MDBNavbarItem className='navbaritem navbarItem w-auto'  >
              <MDBNavbarLink active color='dark' aria-current='page' href='#' className='Navlink'>
                Explore
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbaritem navbarItem mProfile'>
              <MDBNavbarLink href='#' className='Navlink '>My Profile</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbaritem '>
              <MDBNavbarLink href='#' className='Navlink'>Following</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbaritem '>
              <MDBNavbarLink href='#' className='Navlink'>Activity</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbaritem navbarItem Works'>
              <MDBNavbarLink href='#' className='Navlink'>How it Works</MDBNavbarLink>
            </MDBNavbarItem>
        
            <MDBNavbarItem className='navbaritem navbarItem w-auto'>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link Navlink' >
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
            
          </MDBNavbarNav>
        </MDBCollapse>
        <div className='navbaritem'>
            <MDBBtn rounded className='mx-2 navbtn create' color='secondary'>
        Create
      </MDBBtn>
            </div>
            <div className='navbaritem'>
            <MDBBtn rounded className='mx-0 navbtn sign' color='light' style={{margin:'0%'}}>
       Sign in
      </MDBBtn>
            </div>
            <div className='navbaritem mt-2 '>
      <MDBBtn  tag='a'  color='black'   outline floating >
      <BsFillMoonFill className=' mt-2  Moonpic '/>
      </MDBBtn>
            </div>
      </MDBContainer>
    </MDBNavbar>
    
    
  );
}

