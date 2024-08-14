
import React from "react";
import * as Icon from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-information">
        <div >
          <h4>About Us</h4>
          <p>
          "Recipe Explorer helps you discover and enjoy easy, flavorful recipes from around the world."
          </p>
      </div>
      <div className="footer-icons">
        <h3>Follow us</h3>
        <div className="icons">
            <Icon.Facebook className="icon"/>
            <Icon.Youtube className="icon" />
            <Icon.Google className="icon" />
        </div>

      </div>
        </div>
    <hr/>
      <div >
        <p>&copy; 2024 Recipe Explorer. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer