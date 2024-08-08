// import React, { useContext } from "react";
// import SearchBar from "../components/SearchBar";
// import { AuthContext } from "../context/AuthContext";

// const Homepage = () => {
//   const { currentUser } = useContext(AuthContext);
//   // console.log(currentUser);

//   return (
//     <div className="flex w-full h-screen overflow-hidden">
//       <div
//         className="flex flex-col justify-center w-[60%] p-[100px] gap-5"
//         style={{ paddingLeft: 0 }}
//       >
//         <h1 className="font-bold text-6xl mb-4">
//           Find Real Estate & Get Your Dream Place
//         </h1>
//         <p className="text-sm">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
//           cupiditate earum sapiente modi. Exercitationem quam deserunt ducimus
//           eaque cupiditate. Magnam qui, consequuntur cum perspiciatis beatae
//           explicabo at repellendus sequi vero.
//         </p>

//         <SearchBar />

//         <div className="flex justify-between ">
//           <div>
//             <h1 className="text-3xl font-bold">16+</h1>
//             <h2>Years of Experience</h2>
//           </div>
//           <div>
//             <h1 className="text-3xl font-bold">200</h1>
//             <h2>Award Gained</h2>
//           </div>
//           <div>
//             <h1 className="text-3xl font-bold">2000+</h1>
//             <h2>Property Ready</h2>
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center relative  w-[40%]  bg-[#fcf5f3]">
//         <img
//           className="absolute right-0 max-w-[118%]  h-full "
//           src="bg.png"
//           alt="Background"
//         />
//       </div>
//     </div>
//   );
// };

// export default Homepage;

import React, { useContext } from "react";
import SearchBar from "../components/SearchBar";
import { AuthContext } from "../context/AuthContext";

const Homepage = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen overflow-hidden">
      <div
        className="flex flex-col justify-center w-full lg:w-[60%] p-4 lg:p-[100px] gap-5"
        style={{ paddingLeft: 0 }}
      >
        <h1 className="font-bold text-4xl lg:text-6xl mb-4">
          Find Real Estate & Get Your Dream Place
        </h1>
        <p className="text-sm">
          Welcome to Your Dream Home Finder! With over 16 years of experience
          and 200+ awards, we specialize in helping you buy or rent your ideal
          home. Explore our extensive portfolio of over 2000 properties in your
          preferred city and budget. Start your journey with us today!
        </p>

        <SearchBar />

        <div className="flex flex-col items-center lg:flex-row lg:items-stretch justify-between gap-4 lg:gap-0">
          {[
            { number: "16+", text: "Years of Experience" },
            { number: "200", text: "Award Gained" },
            { number: "2000+", text: "Property Ready" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <h1 className="text-3xl font-bold">{item.number}</h1>
              <h2>{item.text}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex lg:items-center lg:relative lg:w-[40%] lg:bg-[#fcf5f3]">
        <img
          className="absolute right-0 max-w-[118%] h-full object-cover"
          src="bg.png"
          alt="Background"
        />
      </div>
    </div>
  );
};

export default Homepage;
