import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../lib/apiRequest";
import UploadWidget from "../components/UploadWidget";
import { useNavigate } from "react-router-dom";

function NewPostPage() {
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [latWarning, setLatWarning] = useState("");
  const [longWarning, setLongWarning] = useState("");

  const navigate = useNavigate();

  const validateCoordinates = (latitude, longitude) => {
    const lat = parseFloat(latitude);
    const long = parseFloat(longitude);
    let valid = true;

    if (isNaN(lat) || lat < -90 || lat > 90) {
      setLatWarning("Latitude must be between -90 and 90.");
      valid = false;
    } else {
      setLatWarning("");
    }

    if (isNaN(long) || long < -180 || long > 180) {
      setLongWarning("Longitude must be between -180 and 180.");
      valid = false;
    } else {
      setLongWarning("");
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    // Validate latitude and longitude
    const isValid = validateCoordinates(inputs.latitude, inputs.longitude);
    if (!isValid) return;

    // Include the description from ReactQuill
    inputs.description = description;
    try {
      const res = await apiRequest.post("/posts", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          address: inputs.address,
          city: inputs.city,
          bedroom: parseInt(inputs.bedroom),
          bathroom: parseInt(inputs.bathroom),
          type: inputs.type,
          property: inputs.property,
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          images: images,
        },
        postDetail: {
          desc: description,
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size),
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      });

      navigate("/" + res.data.id);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  return (
    <div className="flex flex-col lg:flex-row h-full bg-gray-50">
      <div className="w-full lg:w-3/5 overflow-y-auto p-4 lg:p-8 bg-white shadow-md rounded-lg scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        <h1 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-gray-800">
          Add New Post
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col lg:flex-row w-full gap-4">
              <div className="flex-1 min-w-0 flex flex-col">
                <label
                  htmlFor="title"
                  className="text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="p-2 border rounded text-sm text-gray-700"
                />
              </div>
              <div className="flex-1 min-w-0 flex flex-col">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-700"
                >
                  Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  className="p-2 border rounded text-sm text-gray-700"
                />
              </div>
              <div className="flex-1 min-w-0 flex flex-col">
                <label
                  htmlFor="address"
                  className="text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="p-2 border rounded text-sm text-gray-700"
                />
              </div>
            </div>
            <div className="w-full flex flex-col mt-4">
              <label
                htmlFor="desc"
                className="text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <ReactQuill
                value={description}
                onChange={handleDescriptionChange}
                className="h-40 text-sm"
              />
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-4 mt-20">
              <div className="flex-1 min-w-0 flex flex-col">
                <label
                  htmlFor="city"
                  className="text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  className="p-2 border rounded text-sm text-gray-700"
                />
              </div>
              <div className="flex-1 min-w-0 flex flex-col">
                <label
                  htmlFor="bedroom"
                  className="text-sm font-medium text-gray-700"
                >
                  Bedroom Number
                </label>
                <input
                  min={1}
                  id="bedroom"
                  name="bedroom"
                  type="number"
                  className="p-2 border rounded text-sm text-gray-700"
                />
              </div>
              <div className="flex-1 min-w-0 flex flex-col">
                <label
                  htmlFor="bathroom"
                  className="text-sm font-medium text-gray-700"
                >
                  Bathroom Number
                </label>
                <input
                  min={1}
                  id="bathroom"
                  name="bathroom"
                  type="number"
                  className="p-2 border rounded text-sm text-gray-700"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-4 mt-4">
              <div className="flex-1 min-w-0 flex flex-col">
                <label
                  htmlFor="latitude"
                  className="text-sm font-medium text-gray-700"
                >
                  Latitude
                </label>
                <input
                  id="latitude"
                  name="latitude"
                  type="number"
                  step="any"
                  className="p-2 border rounded text-sm text-gray-700"
                />
                {latWarning && (
                  <span className="text-red-500 text-xs mt-1">
                    {latWarning}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0 flex flex-col">
                <label
                  htmlFor="longitude"
                  className="text-sm font-medium text-gray-700"
                >
                  Longitude
                </label>
                <input
                  id="longitude"
                  name="longitude"
                  type="number"
                  step="any"
                  className="p-2 border rounded text-sm text-gray-700"
                />
                {longWarning && (
                  <span className="text-red-500 text-xs mt-1">
                    {longWarning}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0 flex flex-col">
                <label
                  htmlFor="type"
                  className="text-sm font-medium text-gray-700"
                >
                  Type
                </label>
                <select
                  name="type"
                  className="p-2 border rounded text-sm text-gray-700"
                >
                  <option value="rent" defaultChecked>
                    Rent
                  </option>
                  <option value="buy">Buy</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-4 mt-4">
              <div className="flex-1 min-w-0 flex flex-col">
                <label
                  htmlFor="property"
                  className="text-sm font-medium text-gray-700"
                >
                  Property
                </label>
                <select
                  name="property"
                  className="p-2 border rounded text-sm text-gray-700"
                >
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                </select>
              </div>
              <div className="flex-1 min-w-0 flex flex-col">
                <label
                  htmlFor="utilities"
                  className="text-sm font-medium text-gray-700"
                >
                  Utilities Policy
                </label>
                <select
                  name="utilities"
                  className="p-2 border rounded text-sm text-gray-700"
                >
                  <option value="owner">Owner is responsible</option>
                  <option value="tenant">Tenant is responsible</option>
                  <option value="shared">Shared</option>
                </select>
              </div>
              <div className="flex-1 min-w-0 flex flex-col">
                <label
                  htmlFor="pet"
                  className="text-sm font-medium text-gray-700"
                >
                  Pet Policy
                </label>
                <select
                  name="pet"
                  className="p-2 border rounded text-sm text-gray-700"
                >
                  <option value="allowed">Allowed</option>
                  <option value="not-allowed">Not Allowed</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-4 mt-4">
              <div className="flex-1 min-w-0 flex flex-col">
                <label
                  htmlFor="income"
                  className="text-sm font-medium text-gray-700"
                >
                  Income Policy
                </label>
                <input
                  id="income"
                  name="income"
                  type="text"
                  className="p-2 border rounded text-sm text-gray-700"
                />
              </div>
              <div className="flex-1 min-w-0 flex flex-col">
                <label
                  htmlFor="size"
                  className="text-sm font-medium text-gray-700"
                >
                  Total Size (sqft)
                </label>
                <input
                  min={0}
                  id="size"
                  name="size"
                  type="number"
                  className="p-2 border rounded text-sm text-gray-700"
                />
              </div>
              <div className="flex-1 min-w-0 flex flex-col">
                <label
                  htmlFor="school"
                  className="text-sm font-medium text-gray-700"
                >
                  School
                </label>
                <input
                  min={0}
                  id="school"
                  name="school"
                  type="number"
                  className="p-2 border rounded text-sm text-gray-700"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full gap-4 mt-4 items-center justify-center">
              <div className="w-full lg:flex-1 min-w-0 flex flex-col">
                <label
                  htmlFor="bus"
                  className="text-sm font-medium text-gray-700"
                >
                  Bus
                </label>
                <input
                  min={0}
                  id="bus"
                  name="bus"
                  type="number"
                  className="p-2 border rounded text-sm text-gray-700 w-full"
                />
              </div>
              <div className="w-full lg:flex-1 min-w-0 flex flex-col">
                <label
                  htmlFor="restaurant"
                  className="text-sm font-medium text-gray-700"
                >
                  Restaurant
                </label>
                <input
                  min={0}
                  id="restaurant"
                  name="restaurant"
                  type="number"
                  className="p-2 border rounded text-sm text-gray-700 w-full"
                />
              </div>
              <div className="w-full lg:flex-1 min-w-0 flex flex-col">
                <label className="text-sm font-medium text-gray-700 invisible">
                  Add
                </label>
                <button
                  type="submit"
                  className="w-full p-2 bg-teal-500 text-white font-bold rounded"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="w-full lg:w-2/5 bg-[#fcf5f3] p-4 lg:p-8 flex flex-col">
        <div className="flex flex-1 justify-center items-center mb-4 lg:order-2">
          <UploadWidget
            uwConfig={{
              multiple: true,
              cloudName: "dgdkmfby6",
              uploadPreset: "RealEstate",
              folder: "posts",
            }}
            setState={setImages}
          />
        </div>
        <div className="flex flex-wrap gap-4 lg:order-1">
          {images.map((image, index) => (
            <img
              src={image}
              key={index}
              alt="Uploaded"
              className="h-24 w-24 lg:h-32 lg:w-32 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewPostPage;