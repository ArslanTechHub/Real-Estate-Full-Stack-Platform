  // import React, { useState } from "react";
  // import { Link } from "react-router-dom";

  // const SearchBar = () => {
  //   const types = ["buy", "rent"];
  //   const [query, setQuery] = useState({
  //     type: "buy",
  //     city: "",
  //     minPrice: "0",
  //     maxPrice: "0",
  //   });

  //   const switchType = (type) => {
  //     setQuery((prevQuery) => ({
  //       ...prevQuery,
  //       type: type,
  //     }));
  //   };

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setQuery((prevQuery) => ({
  //       ...prevQuery,
  //       [name]: value,
  //     }));
  //   };

  //   return (
  //     <div className="flex flex-col items-start">
  //       <div className="flex mb-4">
  //         <button
          
  //           onClick={() => switchType("buy")}
  //           className={`px-4 py-2 rounded mr-2 border border-black focus:outline-none ${
  //             query.type === "buy" ? "bg-black text-white" : "bg-white text-black"
  //           }`}
  //         >
  //           Buy
  //         </button>
  //         <button
  //           onClick={() => switchType("rent")}
  //           className={`px-4 py-2 rounded border border-black focus:outline-none ${
  //             query.type === "rent"
  //               ? "bg-black text-white"
  //               : "bg-white text-black"
  //           }`}
  //         >
  //           Rent
  //         </button>
  //       </div>

  //       <form className="flex gap-2">
  //         <input
  //           type="text"
  //           name="city"
  //           placeholder="City"
  //           className="p-2 text-sm border rounded w-fit"
  //           onChange={handleChange}
  //         />
  //         <input
  //           type="number"
  //           name="minPrice"
  //           min={0}
  //           placeholder="Min Price"
  //           className="p-2 text-sm border rounded w-fit"
  //           onChange={handleChange}
  //         />
  //         <input
  //           type="number"
  //           name="maxPrice"
  //           min={0}
  //           placeholder="Max Price"
  //           className="p-2 text-sm border rounded w-28"
  //           onChange={handleChange}
  //         />

  //         <Link
  //           to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
  //         >
  //           <button className="p-2 bg-yellow-400 rounded flex items-center justify-center">
  //             <img className="h-4 w-4" src="/search.png" alt="Search" />
  //           </button>
  //         </Link>
  //       </form>
  //     </div>
  //   );
  // };

  // export default SearchBar;


// export default SearchBar;
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const types = ["buy", "rent"];
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: "0",
    maxPrice: "0",
  });

  const switchType = (type) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      type: type,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prevQuery) => ({
      ...prevQuery,
      [name]: value,
    }));
  };

  return (
    <div className="lg:flex  lg:items-start sm:flex sm:flex-col sm:items-center">
      <div className="flex mb-4">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={`px-4 py-2 rounded mr-2 border border-black focus:outline-none ${
              query.type === type ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <form className="flex flex-col lg:flex-row gap-2">
        <input
          type="text"
          name="city"
          placeholder="City"
          className="p-2 text-sm border rounded w-full lg:w-fit"
          onChange={handleChange}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          placeholder="Min Price"
          className="p-2 text-sm border rounded w-full lg:w-fit"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          placeholder="Max Price"
          className="p-2 text-sm border rounded w-full lg:w-28"
          onChange={handleChange}
        />

        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
          className="w-full lg:w-auto"
        >
          <button className="w-full lg:w-auto p-2 bg-yellow-400 rounded flex items-center justify-center">
            <img className="h-4 w-4" src="/search.png" alt="Search" />
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;