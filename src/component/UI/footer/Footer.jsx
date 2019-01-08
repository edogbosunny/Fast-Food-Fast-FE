import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <p className='ash'>
An Andela project by Edogbo Sunny | &copy;
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
