import React from 'react';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';

const Articles = () => {
  const blogPosts = [
    {
      title: "5 Electric Steamer for Cooking",
      date: "Feb 29, 2024",
      readTime: "10 Min",
      image: blog1,
      excerpt: "From intimate dinners to corporate gatherings, the Restaurant offers exclusive space and services for your special events."
    },
    {
      title: "High Protein Vegetarian Breakfast Ideas: Top 13 Indian Power-Packed Op...",
      date: "Feb 29, 2024",
      readTime: "10 Min",
      image: blog2,
      excerpt: "We take pride in using local ingredients as part of our commitment to sustainability and quality. Learn how to start your day right."
    },
    {
      title: "Degree in Hotel Management in Amritsar: A Complete Guide",
      date: "Feb 29, 2024",
      readTime: "10 Min",
      image: blog3,
      excerpt: "Confused about what to order when visiting the Restaurant? This article will help you choose the best career path in hotel management."
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-10 lg:px-[100px]">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <p className="font-lora text-[#FF594D] font-bold text-sm tracking-[0.2em] border-b-2 border-t-2 border-[#FF594D] py-1 px-6">
                Articles
              </p>
            </div>
            <h2 className="font-new-york text-4xl md:text-5xl lg:text-[52.84px] text-[#333333] leading-tight">
              Stories, Insights, And Updates About Our Mission
            </h2>
          </div>
          <a href="#" className="font-lora text-[#FF594D] font-bold text-lg hover:underline transition-all">
            View All
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-[#FAF6F1] rounded-[30px] p-3 group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Post Thumbnail */}
              <div className="rounded-[20px] overflow-hidden mb-6 aspect-[16/10]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
              </div>

              {/* Post Meta */}
              <div className="flex px-2 gap-4 mb-4">
                <p className="font-lora text-nfci-red text-xs font-bold uppercase tracking-wider">
                  {post.date}
                </p>
                <p className="font-lora  text-nfci-red text-xs font-bold uppercase tracking-wider">
                  {post.readTime}
                </p>
              </div>

              {/* Post Title */}
              <h3 className="font-new-york px-2 text-xl md:text-[20px] text-[#1a1a1a] mb-4 leading-tight line-clamp-2">
                {post.title}
              </h3>

              {/* Post Excerpt */}
              <p className="font-lora mt-3 py-2 text-gray-500 text-sm md:text-base leading-relaxed line-clamp-3 px-2">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
