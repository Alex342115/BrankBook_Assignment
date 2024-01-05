import Logo from "./icons/wishlist.svg";
import "./style/Wishlist.css";
export default function Wishlist() {
  const wishList = [];

  return (
    <div className="flex wishlist">
      <h1 className="text-center">My Wishlist</h1>

      {wishList.length === 0 ? (
        <div className="wish-desc flex">
          <img src={Logo} alt="Wishlist" />
          <h1 className="font-black text-xl">OPPS!!</h1> <h1>YOU’VE NOTHING IN WISHLIST YET</h1>
          <button className="bg-blue-200  browseBtn">Browse now</button>
        </div>
      ) : (
        wishList.map((item) => {})
      )}
    </div>
  );
}
