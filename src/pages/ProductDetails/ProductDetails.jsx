import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "./../../context/AuthProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData();
  const { _id, img, name, brand, types, price, rate, description } = product;
  const remainingRating = Math.abs(rate - 5);
  const { user } = useContext(AuthContext);

  const handleCart = (id) => {
    const userEmail = user.email;
    const productId = id;
    const cartInfo = { userEmail, productId };

    fetch("http://localhost:5000/carts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(cartInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.find) {
          Swal.fire("Already added!", "", "error");
        } else {
          Swal.fire("Success!", "", "success");
        }
      });
  };
  return (
    <div className="container mx-auto my-36">
      <div className="grid grid-cols-2">
        <img className="rounded-l-md w-full" src={img} alt="" />
        <div className="p-10 space-y-4 bg-[#25363B] text-white rounded-r-md">
          <p>
            <span className="font-semibold"> Price : </span> ${price}
          </p>
          <p>
            <span className="font-semibold">Brand :</span> {brand}
          </p>
          <p>
            <span className="font-semibold"> Types : </span>
            {types}
          </p>

          <div className="flex">
            <span className="font-semibold pr-2"> Rating : </span>
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
          <p className="text-2xl font-semibold">{name}</p>
          <p>{description}</p>

          <button
            onClick={() => handleCart(_id)}
            className="btn bg-yellow text-white border-0"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
