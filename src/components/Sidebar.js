import "./sidebar.css";
import ProfilePhoto from "./mainProfile.jpeg";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-card">
        <img className="profile-photo" src={ProfilePhoto} alt="MainProfile" />
        <div className="profile-details">
          <h5 className='text-sm'>Hello</h5>
          <h1 className='font-black text-xl'>Jagannath S</h1>
        </div>
      </div>

      <div className="profile-menu">
        <p>My Profile</p>
        <ol className="profile-option">
          <li>
            <a href="#">Prosonal Information</a>
          </li>
          <li>
            <a href="#">Manage Addresses</a>
          </li>
          <li>
            <a href="#">Payment Card Information</a>
          </li>
          <li>
            <a href="#">All Notifications</a>
          </li>
        </ol>
      </div>

      <div className="order-menu">
        <p>My Orders</p>
        <ol className="order-option">
          <li>
            <a href="#">All Orders</a>
          </li>
          <li>
            <a href="#">My Wishlist</a>
          </li>
          <li>
            <a href="#">My Reviews</a>
          </li>
          <li>
            <a href="#">Saved for Later</a>
          </li>
        </ol>
      </div>
    </div>
  );
}
