import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {


  return (
    <header>
      <div className="container">
          <NavLink to='/' ><h2>Header is Here!</h2></NavLink>
          <NavLink to='/about' ><h2>About</h2></NavLink>
      </div>
    </header>
  );
};

export default Header;
