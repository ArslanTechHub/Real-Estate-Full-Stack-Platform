import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen overflow-hidden">
      <div className="flex flex-col lg:w-[60%] p-4 lg:p-[80px] gap-6 lg:gap-12">
        <h1 className="font-bold text-4xl lg:text-5xl mb-4 text-gray-800">
          About Us
        </h1>
        <p className="text-sm lg:text-base text-gray-700 mb-0">
          At Real Estate, we have been dedicated to helping individuals and families find their perfect home for over 16 years. Our team is committed to providing exceptional service and expertise to ensure you make the best decision for your future.
        </p>
        <p className="text-sm lg:text-base text-gray-700 mb-0">
          Our portfolio boasts over 2000 properties across various cities and budgets, catering to every need and preference. We are proud of the  200+ awards we have received, reflecting our commitment to excellence and customer satisfaction.
        </p>

        {/* Statistics Section Moved Above */}
        <div className="flex flex-col lg:flex-row lg:gap-8 mt-0">
          {[
            { number: "16+", text: "Years of Service" },
            { number: "200", text: "Awards Won" },
            { number: "2000+", text: "Properties Listed" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center lg:items-start text-center lg:text-left bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{item.number}</h1>
              <h2 className="text-gray-600">{item.text}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex lg:w-[40%] lg:items-center lg:relative lg:bg-[#fcf5f3]">
        <img
          className="absolute right-0 max-w-[120%] h-full object-cover"
          src="bg.png"  
          alt="About Background"
        />
      </div>
    </div>
  );
};

export default AboutPage;
