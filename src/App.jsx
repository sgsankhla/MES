import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Services } from "./pages/Services/Services";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { Page1 } from "./pages/Pages/Page1";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/Contactus" element={<ContactUs/>} />
          <Route path="/page1" element={<Page1/>} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
