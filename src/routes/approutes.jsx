import { Routes, Route } from "react-router-dom";
import Hero1 from "../pages/hero1";
import Hero2 from "../pages/hero2";
import PropertiesPage from "../pages/propertiespage";
import FeaturesPage from "../pages/featurespage";
import AboutPage from "../pages/aboutpage";
import ContactPage from "../pages/contactpage";
import NotFound from "../pages/notfound";
import ServerError from "../pages/servererror";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import ForgotPassword from "../pages/auth/forgotpassword";
import Verify from "../pages/auth/verify";
import ConfirmPassword from "../pages/auth/confirmpassword";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Hero1 />} />
      <Route path="/hero1" element={<Hero1 />} />
      <Route path="/hero2" element={<Hero2 />} />
      <Route path="/properties" element={<PropertiesPage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/confirm-password" element={<ConfirmPassword />} />
      <Route path="/reset-password" element={<ConfirmPassword />} />
      <Route path="/500" element={<ServerError />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
