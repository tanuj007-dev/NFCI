// src/pages/BlogDetailPage.jsx

import React from "react";
import AboutNavbar from "../components/AboutNavbar";
import Footer from "../components/Footer";
import BlogHeroBanner from "../components/BlogHeroBanner";
import BlogDetail from "../components/BlogDetailscontent";
import RelatedPosts from "../components/RelatedPosts";
import Contact from "../components/Contact";





const BlogDetailPage = () => {
  return (
    <>
      
      <AboutNavbar />
        <BlogHeroBanner />
        <BlogDetail />
        <RelatedPosts />
        <Contact />
        


  

      
   
    </>
  );
};

export default BlogDetailPage;