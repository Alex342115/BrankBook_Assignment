import React from "react";
// import Logo from "./icons/wishlist.svg";
import "./style/Error.css";

function Error() {
  return (
    <div className="flex error">
      <div className="error-desc flex">
      
        <h1 className="error-title">404</h1>
        <h1>PAGE NOT FOUND</h1>
      </div>
    </div>
  );
}

export default Error;
