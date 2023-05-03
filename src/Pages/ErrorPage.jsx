import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <img className="w-full" src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=740&t=st=1683133727~exp=1683134327~hmac=0f3347ba39c6b3ccb4d85ecc57baf5a77c517176f899e4859e18fba787a7c0ca" alt="" />
        </div>
    );
};

export default ErrorPage;