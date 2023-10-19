import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const MyCart = () => {
  const products = useLoaderData();
  const { user } = useContext(AuthContext);
  const [cartProduct, setCartProduct] = useState([]);
  const cartItem = products.filter((item) => {
    return cartProduct.find((i) => i.productId === item._id);
  });
  console.log(cartItem);
  useEffect(() => {
    fetch(`http://localhost:5000/carts/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCartProduct(data);
      });
  }, [user.email]);

  return (
    <div className="container mx-auto my-28">
      <p className="text-6xl font-racing mb-10">My Cart</p>
      <div className="grid grid-cols-3 gap-6">
        {cartItem.map((cart) => (
          <div key={cart._id}>
            <div className="bg-slate-200 p-4 rounded-md shadow-lg flex gap-10">
              <img className="w-36" src={cart.img} alt="" />
              <div>
                <p>{cart.name}</p>
                <p>Brand: {cart.brand}</p>
                <p>Price: ${cart.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
