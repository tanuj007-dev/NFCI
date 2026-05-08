import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventPage from './pages/EventPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import Footer from './components/Footer';
import EventDetailPage from './pages/EventDetailPage';



function App() {
  return (
    <Router>
      <div className="relative overflow-x-hidden min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/events" element={<EventPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blogdetails" element={<BlogDetailPage />} />
            <Route path="/eventdetails" element={<EventDetailPage />} />
          
          
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
