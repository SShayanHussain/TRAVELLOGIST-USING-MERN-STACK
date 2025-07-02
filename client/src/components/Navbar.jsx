import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-xl font-bold text-blue-600">Travellogist</Link>
      <ul className="flex space-x-4 text-gray-700 font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/packages">Packages</Link></li>
        <li><Link to="/umrah">Umrah</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
