import React, { useState, useEffect } from "react";

const Footer = () => {
  return (
    <footer className="bg-background z-20 rounded-lg lg:px-32">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <h1 className="text-text font-lora font-bold text-4xl">Bloom</h1>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-outline sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>


        <hr className="my-6 lg:border-none border-outline sm:mx-auto lg:my-8" />
        <span className="block text-sm text-outline sm:text-center">
          © 2024{" "}
          <a href="#" className="hover:underline">
            Bloom
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
