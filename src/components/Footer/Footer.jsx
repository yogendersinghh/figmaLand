import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="figmaland__footer">
      <div className="figmaland__footer-one ">
        <div className="figmaland__footer-heading">Fingertip</div>
        <div className="figmaland__footer-content">
          <div>Home</div>
          <div>Examples</div>
          <div>Pricing</div>
          <div>Updates</div>
        </div>
      </div>
      <div className="figmaland__footer-one">
        <div className="figmaland__footer-heading">Resources</div>
        <div className="figmaland__footer-content">
          <div>Home</div>
          <div>Examples</div>
          <div>Pricing</div>
          <div>Updates</div>
        </div>
      </div>
      <div className="figmaland__footer-one">
        <div className="figmaland__footer-heading">About</div>
        <div className="figmaland__footer-content">
          <div>Home</div>
          <div>Examples</div>
          <div>Pricing</div>
          <div>Updates</div>
        </div>
      </div>
      <div className="figmaland__footer-four ">
        <div className="figmaland__footer-address">
          <div className="figmaland__footer-mapimage same"></div>
          <div className="figmaland__footer-mapaddress">
            7480 Mockingbird Hill undefined
          </div>
        </div>
        <div className="figmaland__footer-contact ">
          <div className="figmaland__footer-phoneimage same"></div>
          <div className="figmaland__footer-phone">(239) 555-0108</div>
        </div>
        <div className="figmaland__footer-icons ">
          <div className="figmaland__footer-twitter same"></div>
          <div className="figmaland__footer-facebook same"></div>
          <div className="figmaland__footer-linkedin same"></div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
