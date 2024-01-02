import React from "react";
import { Badge, Container } from "react-bootstrap";
import { RootState } from "../redux/cart/store";
import { useSelector } from "react-redux";

const Topbar: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "3rem",
        height: "5rem",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "0",
          zIndex: "999",
          minWidth: "82%",
        }}
      >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#shoes">
                  Shoes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#backpack">
                  Backpack
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#subscribe">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <a className="navbar-brand" href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0nfTRD2FcGsNKVvGm1wHoEv5YcC71YWb_bEPJzvXqF1ED2r2"
              alt=""
              width={50}
              height={50}
            />
            <Badge bg="secondary">{cart?.length}</Badge>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Topbar;
