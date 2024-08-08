import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen max-w-[1100px] ml-auto mr-auto pl-[20px] pr-[20px]">
      {children}
    </div>
  );
};

export default Layout;
