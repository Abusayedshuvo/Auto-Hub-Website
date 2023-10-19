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
  console.log(products);
  return (
    <>
      <div className="my-20">
        <Swiper
          navigation={true}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
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
