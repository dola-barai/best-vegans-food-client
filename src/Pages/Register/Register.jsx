import { Link } from "react-router-dom";

import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";



const Register = () => {
    return (
        <div>
           <Navbar></Navbar>
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
            <Footer></Footer>
        </div>
    );
};

export default Register;