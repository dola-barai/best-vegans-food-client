import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext)

    const handleSignOut = () => {
      signOutUser()
      .then(() => {
        
      }).catch(error => {
         console.error(error)
      });
    }
    return (
        <div >
        <div className="navbar bg-purple-200">
            <div className="navbar-start">
            
              <a className="btn btn-ghost normal-case text-3xl font-bold text-purple-800">Best Vegans Food</a>
            </div>
            <div className="navbar-center hidden lg:flex text-purple-800">
              
                <Link to="/" className='btn-active active:bg-purple-600'>Home</Link>
                <Link className='ml-3 active:bg-purple-600' to="/blog" >Blog</Link>
                
              
            </div>
            <div className="navbar-end">
              {user ?
              <><UserCircleIcon className="mr-3 h-8 w-8 text-purple-800" />
              <button className='btn btn-xl' onClick={handleSignOut}>Sign out</button>
              </> : <Link to="/login"><button className="btn btn-primary h-2 w-20">Login</button></Link>
              }

          </div>
          </div>
         </div>
);
};

export default Navbar;