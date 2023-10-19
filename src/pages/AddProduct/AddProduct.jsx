import { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [rating, setRating] = useState(5);

  const handleRating = (event) => {
    const selectedRating = parseInt(event.target.value, 10);
    setRating(selectedRating);
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const img = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const types = form.types.value;
    const price = form.price.value;
    const description = form.description.value;
    const rate = rating;
    const product = { img, name, brand, types, price, description, rate };
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire("Product Added Successful!", "", "success");
          form.reset();
        }
      });
  };
  return (
    <div className="container mx-auto my-24">
      <h2 className="text-6xl text-center font-racing my-10">Added Product</h2>
      <div className="bg-slate-200 p-16 rounded-md">
        <form onSubmit={handleAddProduct} className="grid grid-cols-2 gap-5">
          <input
            className="w-full block p-4 mb-4"
            type="text"
            name="image"
            placeholder="Image URL"
            id=""
            required
          />
          <input
            className="w-full block p-4 mb-4"
            type="text"
            name="name"
            placeholder="Name"
            id=""
            required
          />

          <div>
            <select
              name="brand"
              required
              defaultValue={"DEFAULT"}
              className="select select-bordered w-full border-0 rounded-none h-14"
            >
              <option value="DEFAULT" disabled>
                Brand Name
              </option>
              <option value="Toyota">Toyota </option>
              <option value="Audi">Audi</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Tesla">Tesla</option>
              <option value="Honda">Honda</option>
            </select>
          </div>
          <div>
            <select
              name="types"
              required
              defaultValue={"DEFAULT"}
              className="select select-bordered w-full border-0 rounded-none h-14"
            >
              <option value="DEFAULT" disabled>
                Types?
              </option>
              <option value="SUV">SUV </option>
              <option value="Sports car">Sports car</option>
              <option value="Convertible">Convertible</option>
              <option value="Minivan">Minivan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Coupe">Coupe</option>
            </select>
          </div>
          <input
            className="w-full block p-4 mb-4"
            type="text"
            name="price"
            placeholder="Price"
            id=""
            required
          />
          <input
            className="w-full block p-4 mb-4"
            type="text"
            name="description"
            placeholder="Short description"
            id=""
            required
          />
          <div className="rating bg-white p-4">
            <span className="mr-5">Rating : </span>
            {[1, 2, 3, 4, 5].map((value) => (
              <input
                key={value}
                type="radio"
                name="rating"
                value={value}
                required
                className="mask mask-star-2 bg-orange-400"
                onChange={handleRating}
              ></input>
            ))}
          </div>
          <input
            className="w-full block p-4 bg-yellow text-white font-semibold cursor-pointer col-span-2"
            type="submit"
            value="Add Product "
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
