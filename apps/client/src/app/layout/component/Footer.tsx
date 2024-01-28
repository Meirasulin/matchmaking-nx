import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white fixed bottom-0 w-full">
      <div className="container mx-auto px-6 py-10">
        <div className="flex justify-center">
          <img
            className="h-20"
            src="https://cdn.discordapp.com/attachments/1061944547246088242/1192438096722153503/logo-removebg-preview.png"
            alt="Company Logo"
          />
        </div>

        <div className="mt-8 flex justify-center">
          &copy; Matching 2023 | Created by Meir Asulin
        </div>

        <div className="mt-8 flex justify-center text-gray-400">
          <a className="mx-3 hover:underline" href="/about">
            About
          </a>
          <a className="mx-3 hover:underline" href="/contact">
            Contact
          </a>
          <a className="mx-3 hover:underline" href="/terms">
            Terms
          </a>
          <a className="mx-3 hover:underline" href="/privacy">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;