import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg> */}
          <img
            src="https://img.freepik.com/free-vector/gradient-coding-logo-template_23-2148809439.jpg"
            alt=""
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          />
          <span className="ml-3 text-xl text-white">SAJID ALI</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Portfolio —
          <a
            href="/"
            className="text-gray-400 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @professir
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className=" text-gray-400 cursor-pointer hover:text-white transition-all">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a className="ml-3 text-gray-400 cursor-pointer hover:text-white transition-all">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a
            href="https://wa.me/923040535970"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter text-gray-400 ml-1"
          >
            <ion-icon
              className="text-[10px] text-gray-400"
              name="logo-whatsapp"
            ></ion-icon>
          </a>
          <a className="ml-3 text-gray-400 cursor-pointer hover:text-white transition-all">
            <ion-icon className="w-10" name="logo-linkedin"></ion-icon>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
