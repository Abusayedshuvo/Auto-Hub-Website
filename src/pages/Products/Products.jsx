import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Product from "./Product";

const Products = () => {
  const products = useLoaderData();
  const sliderData = [
    {
      id: 1,
      title: "Revolutionize your drive with cutting-edge technology and style.",
      img: `${products[1].img}`,
    },
    {
      id: 2,
      title:
        "Explore the latest innovations in automotive excellence with our featured products",
      img: `${products[2].img}`,
    },
    {
      id: 3,
      title:
        "Explore the latest innovations in automotive excellence with  your driving experience.",
      img: `${products[3].img}`,
    },
  ];
  return (
    <>
      <div className="my-20 overflow-hidden">
        <Swiper
          navigation={true}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {sliderData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="h-[70vh]  bg-cover bg-center hero"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                <div className="hero-overlay bg-opacity-80 bg-black flex justify-center items-center">
                  <div className="text-center text-white container mx-auto">
                    <p className="text-8xl font-racing mb-10">{slide.title}</p>
                    <button className="btn bg-yellow text-white mt-10 border-0 px-8 h-14">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container mx-auto grid grid-cols-3 gap-10 my-20">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </>
  );
};

export default Products;
