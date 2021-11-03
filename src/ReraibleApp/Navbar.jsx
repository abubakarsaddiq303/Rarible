import React, { useState } from 'react';
import Rlogo from './Pictures/Rlogo.png';

import { BsFillMoonFill } from "react-icons/bs";
import { GrSearchAdvanced } from "react-icons/gr";
 
import {
 MDBInput,
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
    <MDBNavbar style={{boxShadow:'none'}} expand='lg' light bgColor='light'>
      <MDBContainer fluid>
      <MDBNavbarBrand className='NavBrand' href='#'><img src={Rlogo} alt=" NOthing" style={{height:'3.3rem'}} /></MDBNavbarBrand>
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
          <MDBNavbarNav className=' '>
            <MDBNavbarItem className='SearchNavitem'>
              <MDBNavbarLink className='NLink first text-nowrap'> <div class="SearchDiv position-relative">
	
	<div class="SearchSpan"><span><GrSearchAdvanced/></span></div>
    <input type="text" class="input" 
	placeholder="Collection,item or user"/>
     </div></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className='NLink text-nowrap' active aria-current='page' href='#'>
                Explore
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className='NLink text-nowrap' href='#'>My Profile</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className='NLink text-nowrap' href='#'>Following</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className='NLink text-nowrap' href='#'>Activity</MDBNavbarLink>
            </MDBNavbarItem>
            <div className='NavLine'></div>
            <MDBNavbarItem>
              <MDBNavbarLink className='NLink text-nowrap '  href='#'>
                How it Work
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link text-nowrap'>
                  Community
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink>RARI Token</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Discussion</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Voting</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Suggestion feature</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Rerible protocole</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Subscribe</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className='Navbarbtn text-nowrap' href='#'><MDBBtn rounded className=' navbtn create' color='secondary'>Create</MDBBtn></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className='Navbarbtn text-nowrap' href='#'><MDBBtn rounded className=' navbtn sign' color='light' >
Sign in
</MDBBtn></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className='Navbarbtn text-nowrap' href='#'> <MDBBtn  tag='a'  color='black'   outline floating >
<BsFillMoonFill className=' mt-2  Moonpic '/>
</MDBBtn></MDBNavbarLink>
            </MDBNavbarItem>
            
          </MDBNavbarNav>
         

         
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
