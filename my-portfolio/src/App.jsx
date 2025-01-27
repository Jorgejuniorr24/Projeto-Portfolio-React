// src/App.jsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Linkedin, Instagram, Github } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full">
        <nav className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">Jorge Oliveira</div>
          <div className="space-x-4">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#portfolio" className="hover:underline">Portfolio</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <span className="flag-icons">🇧🇷 🇺🇸</span>
          </div>
        </nav>
        <Card className="max-w-4xl w-full bg-white shadow-md rounded-2xl p-8 mt-8 flex flex-col md:flex-row items-center gap-8">
          <div className="text-center md:text-left md:flex-1">
            <h1 className="text-4xl font-bold text-gray-800">Hello, It's Me</h1>
            <h2 className="text-4xl font-extrabold text-gray-800 mt-2">Jorge Oliveira</h2>
            <p className="text-xl font-medium text-gray-600 mt-2">And I'm a FrontEnd Dev</p>
            <p className="text-gray-500 mt-4">
              Each well-crafted application is a testament to how technology can positively transform lives.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center md:justify-start">
              <Button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                About Me
              </Button>
              <Button className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300">
                Download Resume
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img
              src="/profile-pic.jpg"
              alt="Jorge Oliveira"
              className="w-48 h-48 rounded-full object-cover border-4 border-gray-200"
            />
          </div>
        </Card>
        <div className="flex justify-center md:justify-start gap-6 mt-6">
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <Github className="text-gray-800 w-6 h-6 hover:text-gray-600" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <Linkedin className="text-gray-800 w-6 h-6 hover:text-gray-600" />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <Instagram className="text-gray-800 w-6 h-6 hover:text-gray-600" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
