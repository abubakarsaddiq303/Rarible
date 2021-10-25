import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h3 className='text-uppercase'>Get the latest Rarible updates</h3>

            <div class="input-group">
  <div class="form-outline">
    <input id="search-input" type="your e-mail" id="form1" class="form-control" />
    <label class="form-label" for="form1" style={{borderRadius:'2.5rem',}}>Search</label>
  </div>
  <button id="search-button" type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>
</div>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h4 className='text-uppercase mb-0'>Rarible</h4>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                Explore
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Help center
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Blog
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Jobs
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Become a partner
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Bug bounty
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h4 className='text-uppercase'>Community</h4>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-dark'>
                  RARI Token
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Discussion
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Voting
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Suggest feature
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Rarible protocol
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Subscribe
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h4 className='text-uppercase mb-0'>Language</h4>

            <ul className='list-unstyled'>
              <li>
              <select class="select">
            <option value="1">English</option>     
            <option value="1">Spanish</option>
            <option value="2">German</option>
            
           
          </select>
              </li>

            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Rarible, Inc. All rights reserved.{' '}
        
        
<i class="fab fa-facebook-f"></i>


<i class="fab fa-twitter"></i>


<i class="fab fa-google"></i>


<i class="fab fa-instagram"></i>


<i class="fab fa-linkedin-in"></i>


<i class="fab fa-pinterest"></i>
      </div>

    </MDBFooter>
  );
}