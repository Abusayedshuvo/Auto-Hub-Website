import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaGoogle, FaGithub, FaFacebookF } from "react-icons/fa6";
import { useContext, useState } from "react";
import AuthProvider, { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  return (
    <div className="bg-[url('/src/assets/slide1.jpg')] h-screen flex justify-center items-center font-montserrat">
      <div className="text-center bg-white/90 p-10 rounded-md lg:w-4/12">
        <Link className="cursor-pointer" to="/">
          <img className="lg:w-36 mx-auto mb-5" src={logo} alt="" />
        </Link>
        <div>
          <form>
            <p className="text-2xl  font-semibold mb-4">
              Login to <span className="text-yellow"> your account </span>
            </p>
            <hr className="w-14 mx-auto mb-5 border-yellow" />
            <input
              className="w-full block p-4 mb-4"
              type="email"
              name="email"
              placeholder="Email Address"
              id=""
            />
            <input
              className="w-full block p-4 mb-10"
              type="password"
              name="password"
              placeholder="Password"
              id=""
            />
            <input
              className="w-full block p-4 bg-yellow text-white font-semibold"
              type="submit"
              value="Login"
            />
          </form>

          <p className="mt-5">
            Don't have an account?{" "}
            <Link className="text-yellow font-semibold" to="/">
              Register here
            </Link>
          </p>

          <p className="my-5">Or Login With</p>

          <div className="space-x-4">
            <button
              onClick={handleGoogle}
              className="btn bg-[#EA4335] hover:text-[#EA4335] text-white capitalize"
            >
              <FaGoogle /> Google
            </button>
            <button className="btn bg-[#333] hover:text-[#333] text-white capitalize">
              <FaGithub /> Github
            </button>
            <button className="btn bg-[#3b5998] hover:text-[#3b5998] text-white capitalize">
              <FaFacebookF /> Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
