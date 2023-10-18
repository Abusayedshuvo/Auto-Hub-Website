import { Link } from "react-router-dom";
import img404 from "../../assets/404.png";
const ErrorPage = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center h-screen">
      <img src={img404} alt="" />
      <p className="text-5xl mb-5">Oops!</p>
      <p>{"We're sorry,"}</p>
      <p>{"The page you were looking for doesn't exist anymore."}</p>
      <div className="mt-5">
        <Link className="btn bg-yellow text-white"> Back to Home </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
