import React from 'react';



function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div class='tabs is-centered has-background-grey-light'>
    <ul>
      <li>
        <a class="is-active"
          href="#aboutMe"
          onClick={() => handlePageChange('AboutMe')}


          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li class="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}


          className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li class="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}


          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li class="nav-item">
        <a
          href="#contact"


          onClick={() => handlePageChange('Social')}

          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Social
        </a>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
