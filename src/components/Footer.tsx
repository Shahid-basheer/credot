import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <div
        className="container d-flex align-items-center justify-content-center orange-bg"
        id="subscribe"
      >
        <div>
          <h3>LET'S STAY IN TOUCH</h3>
          <h6>Get updates on sales, specials, and more</h6>
          <input className="form-control" type="text" />
          <button className="buy-now-button-sub mt-2">SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
