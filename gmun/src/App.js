import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Landing from "./components/Landing";
import NavBar from "./components/Navbar";
import ContactForm from "./components/Contacts";
import GuidePage from "./components/Guide";
import { useState } from "react";
import EditProfile from "./components/EditDetails";
import Committee from "./components/Committee";
import Gallery from "./components/Gallery";
import WorldMap from "./components/WorldMap";
const App = () => {
  // const [isUser, setIsUser] = useState(false);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path="/" element={<Landing />} />
          <Route path="/navbar" element={<NavBar />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/contact" element={<ContactForm />} />
          <Route path="/guide" element={<GuidePage />} />

          <Route path="/EditDetails" element={<EditProfile />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/WorldMap" element={<WorldMap />} />
          {/* Dynamic route for committees */}
        <Route path="/committee/:id" element={<Committee />} /> 
        </Routes>

      </BrowserRouter>
    </>
  );
};

export default App;
