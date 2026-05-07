import React from "react";
import BlogHero from "../components/BlogHero";

import BlogPageHero from "../components/BlogHero";
import BlogCardSection from "../components/BlogCardSection";
import RecentPostsSection from "../components/RecentPostsSection";
import NFCIHistory from "../components/NFCIHistory";
import Contact from "../components/Contact";
import AboutNavbar from "../components/AboutNavbar";
const BlogPage = () => {
  return (
    <>
        <AboutNavbar />
        <BlogPageHero />
        <BlogCardSection />
        <RecentPostsSection />
        <NFCIHistory />
        <Contact bgColor="bg-[#FFF7ED]" />



     

     
    </>
  );
};

export default BlogPage;