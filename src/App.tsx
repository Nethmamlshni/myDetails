import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./assets/Homepage";
import About from "./assets/about/abount";
import Contact from "./assets/Contact/contact";
import Profile from "./assets/ProfileDetails/profile";
import Resume from "./assets/resume/resume";


function App() {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
