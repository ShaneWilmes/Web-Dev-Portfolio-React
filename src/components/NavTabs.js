import React from 'react';



function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul>
      <li>
        <a
          class= "is-active "
          href="#aboutMe"
          onClick={() => handlePageChange('AboutMe')}
          

          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          

          className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          

          onClick={() => handlePageChange('Communicate')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Info
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
