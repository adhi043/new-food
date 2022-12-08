import React from "react";

import { Link } from "react-router-dom";
import profileImg from "../../assets/images/profile-02.png";
import "./top-nav.css";

const TopNav = () => {
  return (
    <div className="top__nav">
      <div className="top__nav-wrapper">
        <div className="">
         
        </div>
        <div className="top__nav-right pt-2">
          <span className="notification">
            <i class="ri-notification-3-line"></i>
            <span className="badge">1</span>
          </span>
          <div className="profile">
            <p>
              <img src={profileImg} alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
