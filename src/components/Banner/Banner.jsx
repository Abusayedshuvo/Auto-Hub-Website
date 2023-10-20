const Banner = () => {
  return (
    <div className="hero  bg-[url('/src/assets/slide1.jpg')] ">
      <div className="hero-overlay bg-opacity-80 bg-black"></div>
      <div className="container mx-auto text-center text-white py-20 md:py-36 lg:py-44">
        <p className="text-2xl md:text-3xl mb-6">
          Unleash Innovation, Embrace Performance, Drive the Extraordinary
        </p>
        <h1 className="text-3xl md:text-6xl lg:text-8xl font-racing mb-20">
          Explore the Future of Driving Excellence
        </h1>
        <button className="btn bg-yellow text-white px-10 border-0 h-14 py-6">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;
