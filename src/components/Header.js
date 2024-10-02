import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            alt=""
          />
        </div>
        <div className="nav-items">
          <ul className="nav">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/about">About us</Link></li>
            <li className="nav-item"><Link to="/contact">Contact us</Link></li>
            <li className="nav-item">Cart</li>
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