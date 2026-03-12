import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">

      <div className="max-w-7xl mx-auto px-6 flex justify-between">

        <h3 className="text-white text-xl font-bold">
          Finova AI
        </h3>

        <p>
          © {new Date().getFullYear()} Finova AI. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;