import { Link } from "react-router-dom";

const Brands = () => {
  const brands = [
    {
      id: 1,
      name: "Toyota",
      img: "https://i.ibb.co/sqwTmTm/toyota.jpg",
    },
    {
      id: 2,
      name: "Audi",
      img: "https://i.ibb.co/K6KxGDz/audi.jpg",
    },
    {
      id: 3,
      name: "BMW",
      img: "https://i.ibb.co/CMxmCRp/bmw.jpg",
    },
    {
      id: 4,
      name: "Mercedes-Benz",
      img: "https://i.ibb.co/BzHvfYz/mercedes.jpg",
    },
    {
      id: 5,
      name: "Tesla",
      img: "https://i.ibb.co/THGvM5J/tesla.jpg",
    },
    {
      id: 6,
      name: "Honda",
      img: "https://i.ibb.co/Qky9B1K/honda.jpg",
    },
  ];
  return (
    <>
      <div className="container mx-auto my-10 lg:my-20 px-4 md:px-0">
        <p className="text-6xl mb-20 text-center font-racing"> Our Brands</p>

        <div className="grid grid-cols-1 md:gris-cols-2 lg:grid-cols-3 gap-6 ">
          {brands.map((brand) => (
            <div className="bg-slate-200 dark:bg-slate-800" key={brand.id}>
              <img className="bor" src={brand.img} alt="" />
              <Link to={`/products/${brand.name}`}>
                <p className="text-3xl font-semibold text-center p-4">
                  {brand.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Brands;
