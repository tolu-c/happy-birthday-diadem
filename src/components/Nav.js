import React from "react";
import PhotoGraphIcon from "@heroicons/react/solid/PhotographIcon";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="border border-solid border-purple-100 h-20 mx-auto flex items-center font-pacifico justify-between p-2 shadow-2xl md:shadow-xl">
      <Link to="/">
        <p className="capitalize text-xl md:text-4xl text-gray-900 md:ml-4">
          HappyBirthday<span className="text-purple-700">Diadem</span>
        </p>
      </Link>
      <div>
        <Link
          to="gallery"
          className="text-gray-700 hover:text-gray-900 cursor-pointer text-sm md:text-2xl flex items-center md:mr-4"
        >
          <span>Gallery</span>
          <PhotoGraphIcon className="h-6 w-6 ml-1 md:ml-2 md:h-8 md:w-8" />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
