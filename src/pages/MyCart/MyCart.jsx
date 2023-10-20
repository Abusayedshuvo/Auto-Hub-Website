import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";

const MyCart = () => {
  const products = useLoaderData();
  const { user } = useContext(AuthContext);
  const [cartProduct, setCartProduct] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const cartItem = products.filter((item) => {
      return cartProduct.find((i) => i.productId === item._id);
    });
    setCartItem(cartItem);
  }, [cartProduct]);

  useEffect(() => {
    fetch(`https://server-side-inky.vercel.app/carts/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCartProduct(data);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    fetch(`https://server-side-inky.vercel.app/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire("Product is Delete!", "", "success");
          const remaining = cartItem.filter((i) => i._id !== id);
          setCartItem(remaining);
        }
      });
  };
  return (
    <div className="container mx-auto my-28">
      <p className="text-6xl font-racing mb-10">My Cart</p>
      {cartItem.length > 0 ? (
        <>
          <div className="grid grid-cols-3 gap-6">
            {cartItem.map((cart) => (
              <div key={cart._id}>
                <div className="bg-slate-200 dark:bg-slate-800 p-4 rounded-md shadow-lg flex gap-10 relative">
                  <img className="w-36" src={cart.img} alt="" />
                  <div>
                    <p>{cart.name}</p>
                    <p>Brand: {cart.brand}</p>
                    <p>Price: ${cart.price}</p>
                    <div className="text-right absolute right-5 top-5 text-red-600 text-lg">
                      <button onClick={() => handleDelete(cart._id)}>
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="container mx-auto">
            <p className="text-4xl  mb-10 font-bold"> You have no cart item</p>
          </div>
        </>
      )}
    </div>
  );
};

export default MyCart;
