import React from 'react';
import Navbar from './component/Navbar';
import BlogList from './component/BlogList';
import blogData from './data/blogData';
import Contact from './component/Contact';
import Footer from './component/Footer';
function App() {


  return (
    <div>
      <Navbar />
      <div className="container mx-auto  p-6 relative" style={{ height: '80vh', backgroundImage: 'url(https://www.nichepursuits.com/wp-content/uploads/2023/06/trav-1200x750.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black-400 opacity-75"></div>
        <div className="relative z-10 text-white text-center">
          <h1 className="text-3xl font-bold mb-6">Welcome to My Blog</h1>
          <p className="text-lg text-gray-700">
            This is where your main content would go. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>
      </div>
      <BlogList blogs={blogData} />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
