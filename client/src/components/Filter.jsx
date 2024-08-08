import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    bedroom: searchParams.get("bedroom") || "",
  });

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <h1 className="font-light text-2xl">
        Search results for <b>{searchParams.get("city")}</b>
      </h1>
      <div className="lg:flex lg:flex-col lg:gap-1 flex flex-col gap-1">
        <label htmlFor="city">Location</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="City Location"
          className="lg:w-full lg:p-2 lg:border lg:border-gray-300 lg:rounded w-auto p-2 border border-gray-300 rounded "
          onChange={handleChange}
          defaultValue={query.city}
        />
      </div>

      <div className="flex flex-col flex-wrap gap-4 lg:flex lg:flex-row lg:flex-wrap lg:gap-4">
        <div className="flex flex-col gap-1 lg:flex lg:flex-col lg:gap-1">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            className="w-20 p-2 border border-gray-300 rounded"
            onChange={handleChange}
            defaultValue={query.type}
          >
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="property">Property</label>
          <select
            name="property"
            id="property"
            className="w-30 p-2 border border-gray-300 rounded"
            onChange={handleChange}
            defaultValue={query.property}
          >
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            className="w-20 p-2 border border-gray-300 rounded"
            onChange={handleChange}
            defaultValue={query.minPrice}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            className="w-20 p-2 border border-gray-300 rounded"
            onChange={handleChange}
            defaultValue={query.maxPrice}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            className="w-20 p-2 border border-gray-300 rounded"
            onChange={handleChange}
            defaultValue={query.bedroom}
          />
        </div>
        <div className="mt-8">
          <button
            onClick={handleFilter}
            
            className="flex items-center justify-center p-2 bg-yellow-400 text-white rounded"
            
          >
            <img src="/search.png" alt="Search" className="w-5 h-5" />
            
            <span className="ml-2 lg:hidden">search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
