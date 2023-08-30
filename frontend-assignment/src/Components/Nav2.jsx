import React from "react";
import styles from "./Nav2.module.css";

// import navStripe2 from "../assets/stripe2.png";
import logo from "../logo/logo.png";
import dot from "../logo/dot.png";
import dropDown from "../logo/dropDown.png";

import { Link } from "react-router-dom";
import { useState } from "react";
import Popup from "./popup";

export const Nav2 = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className={styles.nav2Section}>
      {/* <img src={navStripe2} /> */}
      <div className={styles.nav2}>
        <div className={styles.logoSection}>
          <Link to="/"><img src={logo} /></Link>
          
          <div className={styles.gatewayButton}>
            <button type="submit">Gateway</button>
            <img src={dot} alt="" />
          </div>
        </div>
        <div className={styles.navLinks}>
          <Link style={{ textDecoration: "none" }}>
            <div className={styles.navLinkProducts}>
              <p className={styles.navLink}>Products</p>
              <img src={dropDown} onClick={handleButtonClick} />
              {isPopupOpen && <Popup onClose={handleClosePopup} />}
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <p className={styles.navLink}>About Us</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
