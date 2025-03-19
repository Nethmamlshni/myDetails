import Navbar from "../Home/nav.bar";
import BackgroundVideo from "../BackgroundVideo";
function Resume() {
    return (
        <div className="relative w-full h-screen">
        <BackgroundVideo />
      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-50 z-5">       
           <Navbar />
           <p>Add my CV</p>
      </div>
      </div>     
    );
}

export default Resume;