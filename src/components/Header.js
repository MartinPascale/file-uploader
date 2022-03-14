import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col w-full px-5 py-20 text-white bg-primary md:px-10">
      <h1 className="mb-4 text-5xl text-left md:mb-0">
        Welcome to <strong>Image Uploader</strong>
      </h1>
      <p className="text-xl">
        Chose any images from your computer or drag and drop them to the button
        box bellow, then click on Upload to see the full prieview.
      </p>
    </div>
  );
};

export default Header;
