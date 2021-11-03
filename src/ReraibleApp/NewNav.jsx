import React from 'react'
import Rlogo from './Rlogo.png';
export default function NewNav() {
    return (
        <>
            
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className='py-3 navbar-brand text-center' href=""><img src={Rlogo} alt="" style={{width:'4rem'}} /></a>
    <ul className=' navbar-nav'>
        <li className=' nav-item'>
            <a className='nav-link' href="">Explore</a>

        </li>
        <li className=' nav-item'>
            <a className='nav-link' href="">My Profile</a>

        </li>
        <li className=' nav-item'>
            <a className='nav-link' href="">Following</a>

        </li>
        <li className=' nav-item'>
            <a className='nav-link' href="">Activity</a>

        </li>
        <li className=' nav-item'>
            <a className='nav-link' href="">How it work</a>

        </li>
        <li className='nav-item dropdown'>
            <div className="btn-group">
  <button
    type="button"
    className="btn btn-primary dropdown-toggle"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
    Action
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li>
      <hr className="dropdown-divider" />
    </li>
    <li><a className="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
            

            

        </li>

    </ul>
    
  
</nav>


        </>
    )
}
