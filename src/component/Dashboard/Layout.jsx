import React from 'react';
import '../static/Layout.css';

const Layout = ({ children, title, showLeftPanelImage = true }) => {
  return (
    <div className="dashboard-container">
      {/* Left panel */}
      <div className="left-panel">
        {showLeftPanelImage && (
          <img src="/slice-of-pizza.svg" className="pizza-imageleft" alt="Pizza slice" />
        )}
      </div>
      
      {/* Right panel with image and form content */}
      <div className="right-panel">
        <div className="image-title-container">
          <h1 className="pizza-title">{title}</h1>
        </div>
        <div className="form-container">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
