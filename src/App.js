import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home/Home";
import ContactPage from "./pages/ContactPage";
import Men from "./components/Home/Men/Men";
import Women from "./components/Home/Women/Women";
import Collection from "./components/Home/Collection/Collection";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ErrorPage from "./pages/ErrorPage";
import Product from "./components/Shop/Product";
import ProfilePage from "./pages/ProfilePage";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="contact" element={<ContactPage />}/>
        <Route path="/men" element={<Men />}/>
        <Route path="/women" element={<Women />}/>
        <Route path="/collection" element={<Collection />}/>
        <Route path="/shop" element={<ShopPage />}/>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/product/:id" element={<Product />}/>   
        <Route path="/profile" element={<ProfilePage />}/>   
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
