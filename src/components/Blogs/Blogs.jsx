const Blogs = () => {
  return (
    <div className="container mx-auto my-28">
      <p className="text-6xl text-center font-racing mb-10">Our Blogs</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
        <div>
          <img src="https://i.ibb.co/zs8b7zh/t1.jpg" alt="" />
          <p className="text-3xl font-semibold my-5">
            Embracing the Electric Revolution: The Future of Automotive
            Innovation
          </p>
          <p>
            Dive into the electrifying world of automotive innovation as we
            explore the latest trends and breakthroughs in electric vehicles.
            From cutting-edge technology to eco-friendly design, discover how
            the automotive landscape is evolving towards a sustainable and
            electrifying future.
          </p>
          <button className="btn mt-10 bg-yellow text-white border-0">
            See Details
          </button>
        </div>
        <div>
          <img src="https://i.ibb.co/7vbtxN0/t3.jpg" alt="" />
          <p className="text-3xl font-semibold my-5">
            Behind the Wheel: Unraveling the Secrets of Autonomous Driving
          </p>
          <p>
            Take a journey into the realm of autonomous driving technology.
            Delve deep into the algorithms, sensors, and systems that power
            self-driving cars, unraveling the mysteries behind the wheel. Join
            us as we explore the current state and future possibilities of this
            transformative technology.
          </p>
          <button className="btn mt-10 bg-yellow text-white border-0">
            See Details
          </button>
        </div>
        <div>
          <img src="https://i.ibb.co/DCW3tC7/audi1.jpg" alt="" />
          <p className="text-3xl font-semibold my-5">
            Designing Tomorrow's Drive: The Aesthetics of Future Cars
          </p>
          <p>
            Explore the intersection of art and engineering as we delve into the
            aesthetics of future cars. From sleek electric vehicles to concept
            cars pushing the boundaries of design, discover how automakers are
            redefining the visual language of automobiles and shaping the future
            of transportation.
          </p>
          <button className="btn mt-10 bg-yellow text-white border-0">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
