import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import NavBar from "./NavBar";
import ContactForm from "./Contact";
import GuidePage from "./Guide";
import { useState } from "react";
import EditProfile from "./EditDetails";

const App = () => {
  const [isUser, setIsUser] = useState(false);
  return (
    <>
      <BrowserRouter>
        <NavBar />

          <Routes>
 
            <Route path="/profile" element={<Profile />} />

            <Route path="/contact" element={<ContactForm />} />
            <Route path="/guide" element={<GuidePage />} />
            
            <Route path="/EditDetails" element={<EditProfile />} />
          </Routes>
        
      </BrowserRouter>
    </>
  );
};

export default App;
