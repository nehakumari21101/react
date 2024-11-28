import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items)

    return (
      <div className="flex justify-between bg-pink-100 shadow-lg mb-4 ">
        <div className="logo-container">
          <img
          className="w-36"
            src={LOGO_URL}
            alt=""
          />
        </div>
        <div className="flex items-center ">
          <ul className="flex p-4">
            <li className="px-2"><Link to="/">Home</Link></li>
            <li className="px-2"><Link to="/about">About us</Link></li>
            <li className="px-2"><Link to="/contact">Contact us</Link></li>
            <li className="px-2 font-bold cursor-pointer">Cart({cartItems.length})</li>

            <button className="login-btn" onClick={()=>{
              if(btnNameReact === "Login"){
                setBtnNameReact("Logout")
              }else{setBtnNameReact("Login")}
            }}>{btnNameReact}</button>

          </ul>
        </div>
      </div>
    );
  };

  export default Header;