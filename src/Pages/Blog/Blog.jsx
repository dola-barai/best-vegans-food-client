import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const Blog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-2/3 mx-auto my-2'>
                <div className='bg-white mb-2 p-3 rounded-lg'>
                    <h3 className='font-bold'>1. Tell us the differences between uncontrolled and controlled components.</h3>
                    <p>The main difference between controlled and uncontrolled components is the level of control that the application has over their behavior and functionality. Controlled components are handled and controlled solely by the program, whereas uncontrolled components may be influenced by external events or variables beyond the application control.</p>
                </div>
                <div className='bg-white mb-2 p-3 rounded-lg'>
                    <h3 className='font-bold'>2. How to validate React props using PropTypes?</h3>
                    <p>Firstly, You need to import the PropTypes library at the top of your component file. Then, Define the expected types and shapes of your component's props in the component class. Lastly, pass props to the component as usual, and React will automatically validate them against the PropTypes defined in the component class.</p>
                </div>
                <div className='bg-white mb-2 p-3 rounded-lg'>
                    <h3 className='font-bold'>3. Tell us the difference between nodejs and express js.</h3>
                    <p>Node.js is the server-side runtime environment for running JavaScript, whereas Express.js is a framework that runs on top of Node.js and provides tools and functionality for building web apps and APIs. Node.js offers the core functionality required to run JavaScript on the server, while Express.js adds an abstraction layer on top of Node.js, making it easier for developers to create complex online apps and APIs.</p>
                </div>
                <div className='bg-white mb-2 p-3 rounded-lg'>
                    <h3 className='font-bold'>4. What is a custom hook, and why will you create a custom hook?</h3>
                    <p>A custom hook is a reusable React function that contains logic and state, allowing developers to extract and share common code across numerous components. Custom hooks are created by developers to reduce code duplication and make their programs more modular and manageable.</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;