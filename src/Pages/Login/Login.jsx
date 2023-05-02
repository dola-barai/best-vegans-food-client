import GLogo from '../../../public/google.png'
import GiLogo from '../../../public/gitHub.png'
import { Form, Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState(null)
    const { signInUser, signPopUpGoogle, signPopUpGithub } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        

        signInUser(email,  password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setError('')
        })
        .catch(error => {
            console.error(error.message);
            setError(error.message);
            event.target.reset();
        })
    }

    const googleLogin = event => {
        signPopUpGoogle()
        .then(result => {
            const logUser = result.user;
            console.log(logUser);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const githubLogin = event => {
        signPopUpGithub()
        .then(result => {
            const logUser = result.user;
            console.log(logUser);
        })
        .catch(error => {
            console.log(error);
            
        })
    }


    return (
        <div>
            <Navbar></Navbar>
            <Form onSubmit={handleLogin}>
            <div className="hero min-h-screen bg-base-200">
             <div className="hero-content flex-col lg:flex-row-reverse">
               
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                
                 <div className="card-body">
                 <h2 className="text-2xl font-bold text-center">Sign In</h2>
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Email</span>
                     </label>
                     <input type="email" placeholder="email" name="email" className="input input-bordered" required/>
                   </div>
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Password</span>
                     </label>
                     <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
                     <label className="label">
                       <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                     </label>
                   </div>
                   <div className="form-control mt-6">
                     <button className="btn btn-primary">Login</button>
                   </div>
                   <div className='text-purple-700'>
                     Do not Have an Account? <Link to="/register" className='underline'>Please Register</Link>
                   </div>
                   <div className="w-20 rounded-full grid grid-cols-2 mx-auto">
                     <img onClick={googleLogin} className='mr-5' src={GLogo}></img>
                     <img onClick={githubLogin} src={GiLogo}></img>
                   </div>
                   <p className='text-red-500'>{error}</p>
                 </div>
               </div>
             </div>
           </div>
            </Form>

            
            <Footer></Footer>
        </div>
    );
};

export default Login;