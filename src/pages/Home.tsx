import React, { Fragment } from "react";
import Topbar from "../components/Topbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <Fragment>
      <Topbar />
      <Carousel />
      <Footer />
    </Fragment>
  );
};

export default Home;
