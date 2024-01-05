import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Review from "./Review";
import Wishlist from "./Wishlist";
import Error from "./Error";
import "./style/Main.css";
export default function Main() {
  return (
    <div className="main">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Review />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/orders" element={<Error />} />
        <Route path="/info" element={<Error />} />
        <Route path="/address" element={<Error />} />
        <Route path="/paymentInfo" element={<Error />} />
        <Route path="/notifications" element={<Error />} />
        <Route path="/*" element={<Error />} />
      </Routes>

      {/* <Review /> */}
    </div>
  );
}
