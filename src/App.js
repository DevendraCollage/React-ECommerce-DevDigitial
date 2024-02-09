import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"; //? Home component is in './Home.js'
import About from "./About"; //? About component is in './About.js'
import Contact from "./Contact"; //? Contact component is in './Contact.js'
import Products from "./Products"; //? Products component is in './Products.js'
import SingleProduct from "./SingleProduct"; //? SingleProduct component is in './SingleProduct.js'
import Cart from "./Cart"; //? Cart component is in './Cart.js'
import ErrorPage from "./ErrorPage"; //? ErrorPage component is in './ErrorPage.js'
import { GlobalStyle } from "./GlobalStyle"; //* This is styled component file
import { ThemeProvider } from "styled-components";

function App() {
  // const theme = {
  //   colors: {
  //     //* This is represent as an object
  //     bg: "#000",
  //   },
  // };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle /> //* Now this is work as a external css file
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/errorpage" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
