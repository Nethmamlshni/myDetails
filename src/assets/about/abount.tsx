import Navbar from "../Home/nav.bar";
import BackgroundVideo from "../BackgroundVideo";
function About() {
    return (
        <div>
            <div className="relative w-full h-screen">
              <BackgroundVideo />
            <div className="absolute top-0 left-0 w-full h-full  bg-opacity-50 z-5">       
                 <Navbar />
                    <div className="flex justify-center items-center font-serif h-screen">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold mb-4">About Me</h1>
                            <p className="text-lg">I am a full stack web developer with a passion for creating beautiful and functional websites. I have experience with HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I am always looking to learn new technologies and improve my skills. I am currently seeking new opportunities to work on exciting projects and collaborate with other developers.</p>
                        </div>
                    </div>
            </div> 
            </div>
        </div>
    );
}
export default About;