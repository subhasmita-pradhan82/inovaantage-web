import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "../mainComponent/HomeComponent";
import ProductsComponent from "../mainComponent/ProductsComponent";
// import ContactPage from "../mainComponent/ContactPage";

function AppRounting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent page="home" />} />
        <Route path="/products" element={<ProductsComponent />} />
        <Route path="/products/:productId" element={<ProductsComponent />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRounting;
