// src/pages/BlogDetailPage.jsx

import React from "react";
import AboutNavbar from "../components/AboutNavbar";
import Footer from "../components/Footer";
import BlogHeroBanner from "../components/BlogHeroBanner";
import BlogDetail from "../components/BlogDetailscontent";
import RelatedPosts from "../components/RelatedPosts";




const BlogDetailPage = () => {
  return (
    <>
      
      <AboutNavbar />
        <BlogHeroBanner />
        <BlogDetail />
        <RelatedPosts />
        


  

      
   
    </>
  );
};

export default BlogDetailPage;