import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/mentalHealth.svg';
import clouds from '../images/clouds.svg';
import '../styles/navbar.css';
// import PropTypes from 'prop-types';

const navbar = () => (
  <nav className="navbar navbar-expand-xl navbar-light p-2 py-3 p-md-5" style={{ backgroundImage: `url(${clouds})`, backgroundPosition: '589px -12px', backgroundRepeat: 'no-repeat' }}>
    <Link to="/home" className="navbar-brand ml-2 ml-md-5 mr-0" href="#!">
      <img src={logo} className="pl-0 pl-md-5" alt="Mental Health" />
      <span className="navbar-brand pb-0" style={{ borderBottom: '4px solid #6B73FF', color: '#6B73FF' }} href="#!">
        <span style={{ fontWeight: 800, fontSize: '20px' }}>Mental</span>
        <span style={{ fontWeight: 500, fontSize: '20px' }}>Health</span>
      </span>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ml-auto mr-0 mr-md-5 " style={{ fontWeight: 500, fontSize: '14px' }}>
        <li className="nav-item">
          <Link to="/checkup" className="nav-link">Request Checkup</Link>
        </li>
        <li className="nav-item">
          <Link to="/consult" className="nav-link">Find Doctors</Link>
        </li>
        <li className="nav-item">
          <Link to="/hospitals" className="nav-link">Find Hospitals</Link>
        </li>
      </ul>
      <form className="nav-form form-inline mr-1 mr-xl-3">
        <Link to="/login" className="mr-3 text-white login" style={{ fontWeight: 600, fontSize: '15px' }}>Login</Link>
        <Link to="/signup" className="btn btn-sm btn-light bg-white btn-sm shadow" type="button" style={{ fontWeight: 700, fontSize: '16px', color: '#6B73FF' }}>
          Get started
        </Link>
      </form>
    </div>
  </nav>
);

// Navbar.propTypes = {
// };

export default navbar;
