import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const EventPage = lazy(() => import('./pages/EventPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'));
const EventDetailPage = lazy(() => import('./pages/EventDetailPage'));
const CoursePage = lazy(() => import('./pages/CoursesPage'));
const CourseDetails = lazy(() => import('./pages/CoursesDetail'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh] w-full">
    <div className="w-10 h-10 border-4 border-[#9B251E] border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <Router>
      <div className="relative overflow-x-hidden min-h-screen flex flex-col">
        <div className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/events" element={<EventPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blogdetails" element={<BlogDetailPage />} />
              <Route path="/eventdetails" element={<EventDetailPage />} />
              <Route path="/courses" element={<CoursePage />} />
              <Route path="/coursesdetails" element={<CourseDetails />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
