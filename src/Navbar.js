import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () =>
  <div>
    <ul>
      <li><Link to="/login">Sign In</Link></li>
      <li><Link to="/info">Info</Link></li>
      <li><Link to="/suggest">Home</Link></li>
      <li><Link to="/favorites">Favorites</Link></li>
      <li><Link to="/blacklist">Blacklist</Link></li>
    </ul>
  </div>

export default Navbar;