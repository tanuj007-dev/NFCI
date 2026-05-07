import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const relatedPosts = [
  {
    id: 1,
    title: "How to Make Masoor Dal Chilla at H...",
    date: "Feb 29, 2024",
    readTime: "10 Min",
    excerpt: "Need a protein-packed breakfast? Masoor dal chilla is one of the best options for your morning...",
    image: blog1,
  },
  {
    id: 2,
    title: "Best Hotel Management Institute in Uttarakhand",
    date: "Feb 29, 2024",
    readTime: "10 Min",
    excerpt: "The hospitality industry is one of the fastest-growing sectors in India, and choosing the right...",
    image: blog2,
  },
  {
    id: 3,
    title: "Sous Chef Salary In India: Pay, Scale, Growth And Opportunities",
    date: "Feb 29, 2024",
    readTime: "10 Min",
    excerpt: "If you love cooking and working in a professional kitchen, you can become a sous chef. The positio...",
    image: blog3,
  },
];

const RelatedPosts = () => {
  return (
    <section className="bg-[#FFF7ED] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-10 lg:px-[100px]">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-8">
          <div>
            <div className="inline-block mb-3">
              <span className="text-[#9B251E] font-lora text-sm font-semibold tracking-wider relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#9B251E]">
                Articles
              </span>
            </div>
            <h2 className="font-new-york text-[42px] md:text-[56px] text-[#1F1A17] leading-tight font-normal">
              Related Posts
            </h2>
          </div>
          <Link
            to="/blog"
            className="text-[#9B251E] font-lora font-semibold text-lg hover:opacity-80 transition-opacity"
          >
            View All
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {relatedPosts.map((post) => (
            <Link key={post.id} to="/blogdetails" className="group">
              <article className="flex flex-col gap-5">
                {/* Image */}
                <div className="overflow-hidden rounded-[15px] aspect-[1.5/1]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3">
                  <span className="text-[#9B251E] font-lora text-[14px] font-medium">
                    {post.date}
                  </span>
                  <span className="text-[#6B6B6B] font-lora text-[14px]">
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-new-york text-[22px] md:text-[24px] text-[#1F1A17] leading-tight font-normal line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="font-lora text-[#4B403A] text-[16px] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
