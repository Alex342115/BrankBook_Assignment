import Icon from "./icons/icon.jpg";
import ProfileIcon from "./icons/Profile.jpg"
import "./style/Navbar.css";

export default function Navbar() {
  
  return (
    <>
      <nav className="navbar">
        <div className="top-nav">
          <div className="icon">
            <img src={Icon} alt="Icon" />
            <h3 className='font-bold company-name'>Mo Market</h3>
          </div>
          <div className="input">
            <input
              className="search"
              type="text"
              placeholder="Search for products, Brands, Markets & more"
            />
            <button className="search-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_1_3246)">
                  <path
                    d="M15.4937 14.5735L11.6857 10.6129C12.6648 9.44901 13.2012 7.98455 13.2012 6.45999C13.2012 2.89801 10.3032 0 6.74124 0C3.17926 0 0.28125 2.89801 0.28125 6.45999C0.28125 10.022 3.17926 12.92 6.74124 12.92C8.07846 12.92 9.35277 12.5167 10.4423 11.751L14.2792 15.7416C14.4396 15.9082 14.6553 16 14.8865 16C15.1053 16 15.3128 15.9166 15.4704 15.7649C15.8052 15.4428 15.8159 14.9085 15.4937 14.5735ZM6.74124 1.68522C9.37411 1.68522 11.516 3.82713 11.516 6.45999C11.516 9.09286 9.37411 11.2348 6.74124 11.2348C4.10838 11.2348 1.96647 9.09286 1.96647 6.45999C1.96647 3.82713 4.10838 1.68522 6.74124 1.68522Z"
                    fill="#696969"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_3246">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div className="profile">
            <img className="profile-icon" src={ProfileIcon} alt="Profile" />
            <h3>Jagannath</h3>
          </div>

          <div className="cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M14.8672 18.75H5.11719C3.05469 18.75 1.36719 17.0625 1.36719 15V14.875L1.74219 4.875C1.80469 2.8125 3.49219 1.25 5.49219 1.25H14.4922C16.4922 1.25 18.1797 2.8125 18.2422 4.875L18.6172 14.875C18.6797 15.875 18.3047 16.8125 17.6172 17.5625C16.9297 18.3125 15.9922 18.75 14.9922 18.75C14.9922 18.75 14.9297 18.75 14.8672 18.75ZM5.49219 2.5C4.11719 2.5 3.05469 3.5625 2.99219 4.875L2.61719 15C2.61719 16.375 3.74219 17.5 5.11719 17.5H14.9922C15.6797 17.5 16.3047 17.1875 16.7422 16.6875C17.1797 16.1875 17.4297 15.5625 17.4297 14.875L17.0547 4.875C16.9922 3.5 15.9297 2.5 14.5547 2.5H5.49219Z"
                fill="#4B4B4B"
              />
              <path
                d="M9.99219 8.75C7.55469 8.75 5.61719 6.8125 5.61719 4.375C5.61719 4 5.86719 3.75 6.24219 3.75C6.61719 3.75 6.86719 4 6.86719 4.375C6.86719 6.125 8.24219 7.5 9.99219 7.5C11.7422 7.5 13.1172 6.125 13.1172 4.375C13.1172 4 13.3672 3.75 13.7422 3.75C14.1172 3.75 14.3672 4 14.3672 4.375C14.3672 6.8125 12.4297 8.75 9.99219 8.75Z"
                fill="#4B4B4B"
              />
            </svg>
            <h3>Cart</h3>
          </div>
        </div>
        <div className="bottom-nav">
          <ul className="nav-links">
            <li className="nav-link">
              <a href="#">Mobile & Tablets</a>{" "}
            </li>
            <li className="nav-link">
              <a href="#">Electrical & Electronics</a>
            </li>
            <li className="nav-link">
              <a href="#">Grocery</a>{" "}
            </li>
            <li className="nav-link">
              <a href="#">TV & Appliances</a>
            </li>
            <li className="nav-link">
              <a href="#">Fashion</a>
            </li>
            <li className="nav-link">
              <a href="#">Home & Kitchen</a>
            </li>
            <li className="nav-link">
              <a href="#">Furniture</a>
            </li>
            <li className="nav-link">
              <a href="#">Grocery</a>
            </li>
            <li className="nav-link">
              <a href="#">Grocery</a>
            </li>
            <li className="nav-link">
              <a href="#">Grocery</a>
            </li>
            <li className="nav-link">
              <a href="#">Top Saving Offers</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
