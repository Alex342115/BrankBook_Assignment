import React from "react";
import Logo from "./icons/wishlist.svg";
import "./style/Wishlist.css";

function Error() {
  return (
    <div className="flex wishlist">
      <div className="wish-desc flex">
        <h1 className="underline text-xl font-black">404</h1>
        <h1 className="text-xl font-black">PAGE NOT FOUND</h1>
      </div>
    </div>
  );
}

export default Error;
