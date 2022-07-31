import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import Communicate from './pages/Communicate';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // Based on current page, renderPage returns/renders the correct component
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Communicate />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  
  return (
    <div>
      
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {renderPage()}
    </div>
  );
}
