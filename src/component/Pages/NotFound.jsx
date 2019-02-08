import React from 'react';
import '../../styles/style.css';

const NotFound = () => (
  <div className='container not-found'>
    <h3>Not Found 404</h3>
    <div>
      <a to='/'>
        <div>..go back Home....</div>
      </a>
    </div>
  </div>
);

export default NotFound;
