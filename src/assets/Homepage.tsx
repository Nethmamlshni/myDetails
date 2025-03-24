import { useState, useEffect } from "react";
import Navbar from "./Home/nav.bar";
import BackgroundVideo from "./BackgroundVideo";

const Homepage = () => {
  const [text, setText] = useState("");
  const name = "Hello I am Nethma Malshani Welcome to my Portfolio !"; 
  const typingSpeed = 150; 
  const delayAfterComplete = 1000; 

  useEffect(() => {
    let i = 0;
    const typeText = () => {
      if (i <= name.length) {
        setText(name.substring(0, i));
        i++;
        setTimeout(typeText, typingSpeed);
      } else {
        setTimeout(() => {
          setText(""); 
          i = 0;
          typeText(); 
        }, delayAfterComplete);
      }
    };
    typeText(); 
  }, []);

  return ( 
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <BackgroundVideo />
      
      {/* Dark Overlay to Make Text Visible */}
      <div className="absolute inset-0 bg-opacity-50"></div> 

      {/* Navbar */}
      <Navbar />

      {/* Name Animation */}
  
      <div className="absolute mt-60 ml-10 w-1/3 text-left h-full flex flex-col  text-black font-serif">
        <h1 className="text-4xl font-bold text-center">
          {text}
          <span className="text-black">|</span> 
        </h1>
      </div>
      <div>
      <img
  src="/Screenshot 2025-03-19 at 14.21.14.png"
  alt="Profile Picture"
  className="absolute top-80 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-70 h-80 rounded-2xl"
/>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 w-full text-center text-black font-serif">
        Made by 🤍 Nethma Malshani.
      </footer>
    </div>
  );
};

export default Homepage;
