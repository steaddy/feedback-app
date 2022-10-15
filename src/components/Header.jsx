import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {


  return (
    <header>
      <div className="container">
          <NavLink to='/' ><h2>Feedback UI</h2></NavLink>
      </div>
    </header>
  );
};

export default Header;
