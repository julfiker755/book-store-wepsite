import React from 'react';
import logo from '../../../assert/logo.svg'
import { Link } from 'react-router-dom';
import Search from './Search';

const Header = () => {
    return (
        <nav className="py-4 2xl:px-6">
        <div className="container flex items-center justify-between">
          <img src={logo} width="150px" className="object-contain" />
    
          <ul className="hidden md:flex items-center space-x-6">
            <Link className="font-semibold cursor-pointer" to="/" id="lws-bookStore">
              <li>Book Store</li>
            </Link>
            <Link className="cursor-pointer" to="/add" id="lws-addBook">
              <li>Add Book</li>
            </Link>
          </ul>
          <Search></Search>
        </div>
      </nav>
    );
};

export default Header;