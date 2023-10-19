import aboutImg from "../../assets/about.jpg";
import signature from "../../assets/signature.png";

const About = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-2 my-32">
        <div>
          <img className="rounded-md" src={aboutImg} alt="" />
        </div>
        <div>
          <h2 className="text-6xl font-racing mb-10">About Us</h2>
          <p>
            Welcome to AutoHub, where innovation meets the open road! Embark on
            a journey into the future of automotive excellence. At AutoHub, we
            redefine driving, merging cutting-edge technology with unparalleled
            performance. Explore a world where every mile is an adventure, every
            vehicle a masterpiece. Join us as we drive the extra mile, setting
            new standards and unlocking the thrill of the road. Your automotive
            journey begins here—AutoHub, where driving becomes an experience.
          </p>
          <div className="flex mt-6 items-center">
            <div className="flex-1 flex-grow">
              <img src={signature} alt="" />
            </div>
            <div className="border-l-2 pl-10 flex-1 flex-grow">
              <p className="text-2xl font-semibold">Robertho Garcia</p>
              <p>CEO</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-3 gap-10 text-center">
        <div className="shadow-lg hover:shadow-2xl duration-500 transition-all p-5 rounded-md ">
          <p className="text-2xl font-semibold mb-5">24 / 7 CAR SUPPORT</p>
          <p>
            Need assistance on the road, anytime, anywhere? Our 24/7 Car Support
            is your reliable companion for every twist and turn. Whether it's a
            breakdown, a question, or just a quick check-in, our dedicated team
            is here to keep you cruising smoothly around the clock
          </p>
        </div>
        <div className="shadow-lg hover:shadow-2xl duration-500 transition-all p-5 rounded-md">
          <p className="text-2xl font-semibold mb-5">LOTS OF LOCATION</p>
          <p>
            Discover the convenience of AutoHub with our numerous locations
            ready to serve you! With AutoHub, there's always a hub near you,
            ensuring accessibility and ease for all your automotive needs. Our
            expansive network means you're never far from exceptional service,
            quality, and expertise.
          </p>
        </div>
        <div className="shadow-lg hover:shadow-2xl duration-500 transition-all p-5 rounded-md">
          <p className="text-2xl font-semibold mb-5">RESERVATION ANYTIME</p>
          <p>
            Seize the wheel of convenience with AutoHub's Reservation Anytime
            feature. Whether it's a sleek sedan or a powerful SUV, reserve your
            dream ride at your fingertips. Our seamless reservation system
            empowers you to plan your automotive experience on your terms.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
