import { PropTypes } from "prop-types";
import { FaStar } from "react-icons/fa6";

const Product = ({ product }) => {
  const { img, name, brand, types, price, rate } = product;
  const remainingRating = Math.abs(rate - 5);
  return (
    <div className="bg-[#25363B] text-white rounded-md">
      <img className="rounded-t-md" src={img} alt="" />
      <div className="p-5 space-y-4">
        <p className="text-2xl font-semibold">{name}</p>
        <div className="flex justify-between">
          <p>
            <span className="font-semibold">Brand :</span> {brand}
          </p>
          <p>
            <span className="font-semibold"> Types : </span>
            {types}
          </p>
        </div>
        <div className="flex justify-between">
          <p>
            <span className="font-semibold"> Price : </span> ${price}
          </p>
          <div className="flex">
            {Array.from(Array(rate), (e, i) => {
              return (
                <span key={i} className="text-orange-400 text-xl">
                  <FaStar />
                </span>
              );
            })}
            {Array.from(Array(remainingRating), (e, i) => {
              return (
                <span key={i} className="text-slate-200 text-xl">
                  <FaStar />
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <button className="bg-white px-4 py-2 text-black rounded-full text-sm font-medium">
            View Details
          </button>
          <button className="bg-white px-4 py-2 text-black rounded-full text-sm font-medium">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

Product.propTypes = {
  product: PropTypes.object,
};
