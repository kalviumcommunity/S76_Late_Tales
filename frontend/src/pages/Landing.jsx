import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"; // React Icons

const Landing = () => {
  return (
    <div className="min-h-screen bg-cover bg-[url('/image-6.png')] flex flex-col">
      {/* Navigation */}
      <div className="h-20 w-[90%] bg-[#460058] mx-auto mt-10 rounded-[10px] flex justify-end items-center shadow-lg">
        <div className="flex gap-10 text-3xl font-bold text-white px-10">
          <h1 className="cursor-pointer hover:text-gray-300 transition">
            Login
          </h1>
          <h1 className="cursor-pointer hover:text-gray-300 transition">
            Sign Up
          </h1>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-between w-full px-20 py-28">
        <div className="flex flex-col gap-10">
          <img
            src="/image-3.jpeg"
            alt="First"
            className="h-95 w-135 rounded-lg shadow-md"
          />
          <img
            src="/image-4.jpeg"
            alt="Second"
            className="h-95 w-135 rounded-lg shadow-md"
          />
        </div>
        <img
          src="/image-2.jpg"
          alt="Center"
          className="h-200 rounded-lg shadow-lg"
        />
      </div>

      {/* Get Started Button */}
      <div className="flex justify-center">
        <button className="bg-[#460058] py-4 px-12 rounded-2xl text-3xl font-bold text-white hover:bg-[#660080] transition shadow-md">
          Get Started
        </button>
      </div>

      {/* Overview Section */}
      <div className="flex justify-center py-20">
        <div className="w-4/5 bg-amber-100 p-10 rounded-2xl shadow-lg">
          <h1 className="text-center font-bold text-4xl mb-6">Overview</h1>
          <p className="text-center text-2xl leading-relaxed">
            <strong>Late Tales</strong> is a fun and interactive website where
            people can share hilarious and silly reasons for being late. Users
            can browse through different "late tales," like and upvote their
            favorites, and see the
            <strong>"Silliest of the Day"</strong>—the most upvoted excuse. It's
            a lighthearted way to laugh at the struggles of being late while
            turning everyday delays into entertaining stories. 🚀😂
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-black text-white py-20">
        <div className="w-4/5 mx-auto flex items-center justify-between">
          {/* Social Media Icons */}
          <div className="flex flex-col gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <FaInstagram size={40} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <FaLinkedin size={40} />
            </a>
          </div>

            {/* Image */}
          <img src="/image-5.jpg" alt="About Us" className="w-1/2 rounded-lg shadow-lg" />

          {/* Text & Icons */}
          <div className="flex-1">
            <h2 className="text-5xl font-bold mb-8">About Us</h2>
            <p className="text-xl leading-8 mb-6">
              We built **Late Tales** to make people laugh at the struggles of being late. 
              Our goal is to create a fun and interactive community where delays 
              turn into entertainment.
            </p>

            {/* Social Icons */}
            <div className="flex gap-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-pink-500 transition">
                <FaInstagram />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-500 transition">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-500 transition">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-8 text-center">
        <p className="text-gray-400">&copy; 2025 Late Tales. All rights reserved.</p>
      </footer>
    </div>
  );
};


export default Landing;
