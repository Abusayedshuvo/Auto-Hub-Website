import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    if (password.length < 6) {
      setError("Password at least 6 charter");
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/.test(password)) {
      setError("Password need a capital letter and a special character");
      return;
    }
    setError("");
    createUser(email, password)
      .then((result) => {
        Swal.fire("Registration Success!", "", "success");
        event.target.reset();
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <div className="bg-[url('/src/assets/slide1.jpg')] h-screen flex justify-center items-center font-montserrat">
        <div className="text-center bg-white/90 p-10 rounded-md lg:w-4/12">
          <Link className="cursor-pointer" to="/">
            <img className="lg:w-36 mx-auto mb-5" src={logo} alt="" />
          </Link>
          <div>
            <form onSubmit={handleRegistration}>
              <p className="text-2xl  font-semibold mb-4">
                Login to <span className="text-yellow"> your account </span>
              </p>
              <hr className="w-14 mx-auto mb-5 border-yellow" />
              <input
                className="w-full block p-4 mb-4"
                type="text"
                name="name"
                placeholder="Name"
                id=""
              />
              <input
                className="w-full block p-4 mb-4"
                type="text"
                name="photo"
                placeholder="Photo URL"
                id=""
              />
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
                value="Register"
              />
            </form>
            {error && (
              <p className="text-red-500 mt-5 font-semibold"> {error} </p>
            )}

            <p className="mt-5">
              Already a member?
              <Link className="text-yellow font-semibold" to="/login">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
