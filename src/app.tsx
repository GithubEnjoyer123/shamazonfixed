import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Import router components

import Navbar from "./Components/navbar"; // Import Navbar component
import HomePageContent from "./Components/homePageContent"; // Importing home page content component
import SkincarePage from "./Components/SkincarePage"; // Import Skincare page component
import SupplementsPage from "./Components/SupplementsPage"; // Import Skincare page component
import ToysPage from "./Components/ToysPage"; // Import Skincare page component
import ContactUsPage from "./Components/ContactUsPage"; // Import Contact Us page component
import "./app.css"; // Import styles

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar will always be visible */}
      <div className="homePageContent">
        <Routes>
          <Route path="/" element={<HomePageContent />} /> {/* Home route */}
          <Route path="/skincarePage" element={<SkincarePage />} /> {/* Skincare page route */}
          <Route path="/supplementsPage" element={<SupplementsPage />} /> {/* Supplements page route */}
          <Route path="/toysPage" element={<ToysPage />} /> {/* Toys page route */}    
          <Route path="/contactUsPage" element={<ContactUsPage />} /> {/* Contact Us page route */}       
          {/* Add more routes as needed */}
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect to home if route not found */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

