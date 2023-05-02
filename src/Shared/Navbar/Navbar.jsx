import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    return (
        <div >
        <div className="navbar bg-purple-200">
            <div className="navbar-start">
            
              <a className="btn btn-ghost normal-case text-3xl font-bold text-purple-800">Best Vegans Food</a>
            </div>
            <div className="navbar-center hidden lg:flex text-purple-800">
              
                <Link to="/">Home</Link>
                <Link className='ml-3' to="/blog">Blog</Link>
                
              
            </div>
            <div className="navbar-end">
              <UserCircleIcon className="h-8 w-8 text-purple-800" />
              <Link to="/login"><button className="btn btn-primary h-2 w-20">Login</button></Link>
            </div>
          </div>
         </div>
);
};

export default Navbar;