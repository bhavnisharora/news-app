import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-light mt-5 py-3 text-center ">
      <p className="fs-6 mb-0">
        &copy; {new Date().getFullYear()} News App. All Rights are Reserved.
      </p>
    </div>
  );
};

export default Footer;
