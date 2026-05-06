import React from "react";
import BlogHero from "../components/BlogHero";

import BlogPageHero from "../components/BlogHero";
import BlogCardSection from "../components/BlogCardSection";
import RecentPostsSection from "../components/RecentPostsSection";
import NFCIHistory from "../components/NFCIHistory";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
const BlogPage = () => {
  return (
    <>
        <Navbar />
        <BlogPageHero />
        <BlogCardSection />
        <RecentPostsSection />
        <NFCIHistory />
        <Contact />



     

     
    </>
  );
};

export default BlogPage;