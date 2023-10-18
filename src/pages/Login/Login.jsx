import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaGoogle, FaGithub, FaFacebookF } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { googleLogin, githubLogin, facebookLogin, loginUser } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        Swal.fire("Google Login Success!", "", "success");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleGithub = () => {
    githubLogin()
      .then(() => {
        Swal.fire("Github Login Success!", "", "success");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleFacebook = () => {
    facebookLogin()
      .then((result) => {
        console.log(result.user);
        Swal.fire("Facebook Login Success!", "", "success");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleUserLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then(() => {
        Swal.fire("Log In Success!", "", "success");
        event.target.reset();
      })
      .catch((error) => {
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
          <form onSubmit={handleUserLogin}>
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
              className="w-full block p-4 bg-yellow text-white font-semibold cursor-pointer"
              type="submit"
              value="Login"
            />
          </form>
          {error && (
            <p className="text-red-500 mt-5 font-semibold"> {error} </p>
          )}

          <p className="mt-5">
            Don't have an account?
            <Link className="text-yellow font-semibold" to="/registration">
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
            <button
              onClick={handleGithub}
              className="btn bg-[#333] hover:text-[#333] text-white capitalize"
            >
              <FaGithub /> Github
            </button>
            <button
              onClick={handleFacebook}
              className="btn bg-[#3b5998] hover:text-[#3b5998] text-white capitalize"
            >
              <FaFacebookF /> Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
