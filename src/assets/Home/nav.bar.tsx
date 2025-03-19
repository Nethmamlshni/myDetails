import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import {Link} from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full p-4  text-black fixed top-0 left-0 z-50">
            <div className=" items-center ">
                {/* Logo or Title */}
                <h1 className="text-2xl font-bold ml-2"></h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex  items-center justify-center font-serif font-bold mt-10">
                <Link to="/" className="mr-4 hover:underline">Home</Link>
                <Link to="/about" className="mr-4 hover:underline">About</Link>
                <Link to="/profile" className="mr-4 hover:underline">Projects</Link>
                <Link to="/contact" className="mr-4 hover:underline">Contact</Link>
                <Link to="/resume" className="mr-4 hover:underline">Resume</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 focus:outline-none"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center font-serif border py-4 mt-2 rounded-md">
                    <Link to="/" className="mr-4 hover:underline">Home</Link>
                    <Link to="/about" className="mr-4 hover:underline">About</Link>
                    <Link to="/profile" className="mr-4 hover:underline">Projects</Link>
                   <Link to="/contact" className="mr-4 hover:underline">Contact</Link>
                    <Link to="/resume" className="mr-4 hover:underline">Resume</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
