import { Link, useLoaderData } from "react-router-dom";
import Product from "./Product";
import Slider from "../../components/Slider/Slider";
const Products = () => {
  const products = useLoaderData();
  return (
    <>
      {products.length > 0 ? (
        <>
          <Slider products={products}></Slider>
          <div className="container mx-auto grid grid-cols-3 gap-10 my-20">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </>
      ) : (
        <div className="container mx-auto my-20">
          <div className="bg-slate-200 p-32 rounded-lg text-center">
            <p className="text-6xl  font-racing mb-5">Product is not found</p>
            <p className="text-4xl mb-10">We will add product soon</p>
            <Link to="/">
              <button className="btn bg-yellow text-white border-0">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
