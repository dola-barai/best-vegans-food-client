import { Form, Link } from "react-router-dom";

import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";



const Register = () => {
  const [error, setError] = useState(null)
    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.url.value;
        console.log(name, email, password, url);

        if(!/.{0,6}/.test(password)){
            setError('Please add at least 6 characters')
        }

        createUser(email,  password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div>
           <Navbar></Navbar>
           <Form onSubmit={handleRegister}>
           <div className="hero min-h-screen bg-base-200">
             <div className="hero-content flex-col lg:flex-row-reverse">

               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                 <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                 <div className="form-control">
                     <label className="label">
                       <span className="label-text">Full Name</span>
                     </label>
                     <input type="text" placeholder="your name" name="name" className="input input-bordered" required/>
                   </div>
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Email</span>
                     </label>
                     <input type="email" placeholder="email" name="email" className="input input-bordered" required/>
                   </div>
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Create Password</span>
                     </label>
                     <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
                     <p className='text-red-500'>{error}</p>
                   </div>
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Photo URL</span>
                     </label>
                     <input type="text" placeholder="photo URL" name='url' className="input input-bordered" required/>
                   </div>
                   <div className="form-control mt-6">
                     <button className="btn btn-primary">Register</button>
                   </div>
                   <div className='text-purple-700'>
                     Already Have an Account? <Link to="/login" className='underline'>Please Login</Link>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           </Form>
            
            <Footer></Footer>
        </div>
    );
};

export default Register;