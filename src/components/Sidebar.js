import "./style/sidebar.css";
import { NavLink, Link, Outlet } from "react-router-dom";

import ProfilePhoto from "./icons/mainProfile.jpeg";
export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="profile-card">
          <img className="profile-photo" src={ProfilePhoto} alt="MainProfile" />
          <div className="profile-details">
            <h5 className="text-sm">Hello</h5>
            <h1 className="font-black text-xl">Jagannath S</h1>
          </div>
        </div>

        <div className="profile-menu">
          <p>My Profile</p>
          <ol className="profile-option">
            <li>
              <NavLink
                to="/info"
                ClassName={({ isActive }) =>
                  isActive ? "active" : "notActive"
                }
              >
                Prosonal Information
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/address"
                ClassName={({ isActive }) =>
                  isActive ? "active" : "notActive"
                }
              >
                Manage Addresses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/paymentInfo"
                ClassName={({ isActive }) =>
                  isActive ? "active" : "notActive"
                }
              >
                Payment Card Information
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/notifications"
                ClassName={({ isActive }) =>
                  isActive ? "active" : "notActive"
                }
              >
                All Notifications
              </NavLink>
            </li>
          </ol>
        </div>

        <div className="order-menu">
          <p>My Orders</p>
          <ol className="order-option">
            <li>
              <NavLink
                to="/orders"
                ClassName={({ isActive }) =>
                  isActive ? "active" : "notActive"
                }
              >
                All Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wishlist"
                ClassName={({ isActive }) =>
                  isActive ? "active" : "notActive"
                }
              >
                My Wishlist
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                ClassName={({ isActive }) =>
                  isActive ? "active" : "notActive"
                }
              >
                My Reviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/error"
                activeClassName={({ isActive }) =>
                  isActive ? "active" : "notActive"
                }
              >
                Saved for Later
              </NavLink>
            </li>
          </ol>
        </div>
        {/* <Outlet /> */}
      </div>
    </>
  );
}
