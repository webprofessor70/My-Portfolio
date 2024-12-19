import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  // VANTA.RINGS({
  //   el: "#vanta-bg",
  //   mouseControls: true,
  //   touchControls: true,
  //   gyroControls: false,
  //   minHeight: 200.00,
  //   minWidth: 200.00,
  //   scale: 1.00,
  //   scaleMobile: 1.00,
  //   backgroundColor: 0x111111,
  //   color1: 0x1e90ff,
  //   color2: 0xff4500,
  //   ringColor: 0xffffff,
  // });
  return (
    <section className="flex header justify-center items-center text-center h-screen py-20 text-white">
      <div>
        <h1 className="text-4xl font-bold bg-gray-800 rounded-md p-2 mb-4">
          Welcome to Sajid Ali's Portfolio
        </h1>
        <p className="flex justify-center items-center md:ml-40 w-[200px] text-lg mb-5 bg-gray-800 rounded-md px-2 py-2">
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "Backend Developer",
                "Graphic Designer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <Link
          to={"/services"}
          className="mt-6 mt-4 px-6 py-3 bg-white text-blue-500 font-bold rounded-lg hover:bg-gray-200"
        >
          Explore More
        </Link>
      </div>
    </section>
  );
};

export default Home;
