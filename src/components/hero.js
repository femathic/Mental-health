import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import heroImage from '../images/heroImage.svg';

const Hero = () => (
  <section className="row mt-3 mt-xl-0 justify-content-between align-items-center mx-1">
    <div className="col-12 col-md-6 pl-5">
      <h1 style={{ fontWeight: 800, fontSize: '50px' }} className="mb-5">Mental Health Affects:</h1>
      <p style={{ fontWeight: 400, fontSize: '25px' }}>About 1 in 4 persons at some point in their lifetime.</p>
      <p style={{ fontWeight: 400, fontSize: '25px' }}> About 1 in 10 persons at any point in time.</p>
      <Link
        to="/signup"
        className="btn p-4 my-5 btn-sm text-white btn-lg rounded-lg shadow"
        type="button"
        style={{ fontWeight: 500, fontSize: '22px', backgroundColor: '#6B73FF' }}
      >
        Connect with a consultant
      </Link>
    </div>
    <div className="col-12 col-md-6">
      <img className="img-fluid" src={heroImage} alt="Mental Health" />
    </div>
  </section>
);

// Hero.propTypes = {
// };

export default Hero;
