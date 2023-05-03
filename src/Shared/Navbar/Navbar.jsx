import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {

    const { user } = useContext(AuthContext)
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
              {user ?
              <h2>{user?.displayName}</h2> :
              <UserCircleIcon className="mr-3 h-8 w-8 text-purple-800" /> 
              
              }
              {user ?
                <Link to='/login'><button className="btn btn-primary h-2 w-20">Logout</button></Link> :
                <Link to="/login"><button className="btn btn-primary h-2 w-20">Login</button></Link>
              }
            </div>
          </div>
         </div>
);
};

export default Navbar;