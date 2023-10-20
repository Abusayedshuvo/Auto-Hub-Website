import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaCaretRight,
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-slate-200 dark:bg-slate-800  py-20 px-4 md:px-0">
      <div className="container mx-auto grid lg:grid-cols-10 gap-10">
        <div className="col-span-3">
          <img className="w-1/2" src={logo} alt="" />
          <p className="mt-6">
            Welcome to AutoHub, where innovation meets the open road! Embark on
            a journey into the future of automotive excellence. At AutoHub, we
            redefine driving, merging cutting-edge technology with unparalleled
            performance. Explore a world where every mile is an adventure, every
            vehicle a masterpiece. Join us as we drive the extra mile, setting
            new standards and unlocking the thrill of the road.
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-2xl mb-5 font-semibold">Contact Us</p>

          <div className="space-y-3">
            <div className="flex gap-3">
              <FaPhone />
              <a href="tel:+018123456789">+018123456789</a>
            </div>
            <div className="flex gap-3">
              <FaEnvelope />
              <a href="mailto: yourmail@gmail.com">yourmail@gmail.com</a>
            </div>
            <div className="flex gap-3">
              <FaLocationDot />
              <p>Rajshahi, Bangladesh</p>
            </div>
          </div>
          <div className="social pt-8 flex gap-5">
            <a
              className="bg-yellow hover:bg-black text-white p-3 text-center rounded-full"
              href="#"
            >
              <FaFacebookF />
            </a>
            <a
              className="bg-yellow hover:bg-black text-white p-3 text-center rounded-full"
              href="#"
            >
              <FaTwitter />
            </a>
            <a
              className="bg-yellow hover:bg-black text-white p-3 text-center rounded-full"
              href="#"
            >
              <FaInstagram />
            </a>
            <a
              className="bg-yellow hover:bg-black text-white p-3 text-center rounded-full"
              href="#"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-2xl mb-5 font-semibold">Useful Links</p>
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="flex gap-2 hover:text-yellow  items-center"
              >
                <FaCaretRight />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex gap-2 hover:text-yellow  items-center"
              >
                <FaCaretRight />
                <span>Add Product</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex gap-2 hover:text-yellow  items-center"
              >
                <FaCaretRight />
                <span>My Cart</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-3">
          <p className="text-2xl mb-5 font-semibold">
            Subscribe Our Newsletter
          </p>
          <p>
            Stay in the fast lane of automotive innovation! Subscribe to our
            newsletter and be the first to cruise into the latest updates,
            exclusive offers, and thrilling releases. Join the AutoHub community
            and never miss a beat on the road to excellence.
          </p>
          <form>
            <input
              className="p-4 block w-full my-4"
              type="email"
              name="email"
              placeholder="Your Email"
              id=""
            />
            <input
              className="btn border-0 bg-yellow hover:bg-black rounded-none text-white"
              type="submit"
              value="Subscribe"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
