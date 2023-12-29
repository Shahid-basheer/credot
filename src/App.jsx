import "./App.css";
import Topbar from "./components/Topbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import { Cart } from "./context/cart";

function App() {
  return (
    <>
      <Cart>
        <Topbar />
        <Carousel />
        <Footer />
      </Cart>
    </>
  );
}

export default App;
