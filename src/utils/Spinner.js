import React from 'react';
import spinnerImage from '../img/spinner.gif';


export default function Spinner() {
  return (
    <div>
      <img
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        src={spinnerImage}
        alt='LOADING...'
      />
    </div>
  );
}
