import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext)
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    }
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
            <div className="navbar-center  lg:flex text-purple-800">
                
                <Link to="/food" className='font-bold active:bg-purple-600'>Food</Link>
                <Link className='ml-3 active:bg-purple-600' to="/blog" >Blog</Link>
                
              
            </div>
            <div className="navbar-end">
              {user ?
              <><UserCircleIcon onMouseOver={handleMouseEnter} className="mr-3 h-8 w-8 text-purple-800" >{isHovered && <span>{user.email}</span>}</UserCircleIcon>
              <button className='btn btn-xl' onClick={handleSignOut}>Sign out</button>
              </> : <Link to="/login"><button className="btn btn-primary h-2 w-20">Login</button></Link>
              }

          </div>
          </div>
         </div>
);
};

export default Navbar;