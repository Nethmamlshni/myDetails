import { useState } from "react";
import Navbar from "../Home/nav.bar";
import BackgroundVideo from "../BackgroundVideo";
import emailjs from "@emailjs/browser";
import { Facebook, Instagram, Linkedin, Github, Mail } from "lucide-react";

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

interface FormData extends Record<string, string> {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing environment variables.");
      alert("Environment variables are missing!");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        serviceId as string,
        templateId as string,
        formData as Record<string, unknown>,
        publicKey as string
      )
      .then(
        () => {
          setSent(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setLoading(false);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("An error occurred, Please try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="relative w-full h-screen">
      <BackgroundVideo />
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 z-5">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-screen text-black font-serif">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <form onSubmit={handleSubmit} className="w-3/4 max-w-lg bg-opacity-60 p-6 rounded-lg">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 mb-4 rounded-md border-1 bg-white text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 mb-4 rounded-md border-1 bg-white text-black"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-2 mb-4 rounded-md border-1 bg-white text-black"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 mb-4 rounded-md border-1 bg-white text-black"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {sent && (
            <div>
            </div>
          )}
        </div>

        <footer className="absolute bottom-4 w-full text-center text-black">
          <hr className="border-t border-white mb-4 w-1/2 mx-auto items-center justify-center" />
          <p className="text-black font-serif font-bold mb-5">Follow me on</p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com/nethu.malshi.940" target="_blank" className="hover:text-blue-400">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/_n_e_t_h_m_a__?igsh=bWtpZXQ2OHFlYjVr&utm_source=qr" target="_blank" className="hover:text-pink-400">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nethma-malshani-1a3a89339/" target="_blank" className="hover:text-blue-600">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Nethmamlshni" target="_blank" className="hover:text-gray-400">
              <Github size={24} />
            </a>
            <a href="mailto:nethmamalshani2002@gmail.com.com" target="_blank" className="hover:text-red-400">
              <Mail size={24} />
            </a>
          </div>
          <p className="mt-4 text-black font-serif">Made by Nethma Malshani.</p>
        </footer>
      </div>
    </div>
  );
}

export default Contact;
