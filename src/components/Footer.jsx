import React from "react";
import "./FooterStyle.css";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4>
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              New York | New Jersey
            </h4>
            <div></div>
            <br />
          </div>
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +1(201)-(638)-(2096)
            </h4>
          </div>
          <br />
          <div className="sms">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              eemmanuel@emmanuelpc.com{" "}
            </h4>
          </div>
          <br />
        </div>
        <div className="right">
          <h4>About the company</h4>
          <br />
          <p>
            Embert has over 30 years of experience working with small and medium
            size companies as well as It solution options for new, star-up
            businesses and fortune 500 companies, in the Tri-state area
          </p>
          <br />
          <div className="social">
            <FaFacebook
              className="icon"
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              className="icon"
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              className="icon"
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>

        <div className="right">
          <div className="helo">
            <img src="./images/123.png" alt="" />
            <br />
            <br />
            <h4>Emmanual Computer System</h4>
            <h4>© 2019 Emmanuel Computer Systems, LLC</h4>

            <br />
            <h4> Design By Fabvance solutions</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
