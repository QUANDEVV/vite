import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation

const Navbar = () => {
  return (
    <nav className="">
      <div className="">
        
        <div className=" s">
          <Link to="/" className="text-3xl mr-2 ml-2 font-bold ">Home</Link>
          <Link to="/Doctor" className="text-white hover:text-gray-200">Doctors</Link>
          <Link to="/Patients" className="text-white hover:text-gray-200">Patients</Link>
          <Link to="/Symptoms" className="text-white hover:text-gray-200">Symptoms</Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
