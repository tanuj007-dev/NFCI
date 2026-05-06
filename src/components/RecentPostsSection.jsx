// File: RecentPostsSection.jsx

import React from "react";

const categories = [
  "All",
  "Cooking",
  "Dessert",
  "Professional Service",
  "Hospitality",
];

const posts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop",
    date: "Feb 29, 2024",
    readTime: "10 Min",
    title: "5 Electric Steamer for Cooking",
    description:
      "From intimate dinners to corporate gatherings, the Restaurant offers exclusive space and services for unforgettable dining experiences.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    date: "Feb 29, 2024",
    readTime: "10 Min",
    title: "High Protein Vegetarian Breakfast Ideas: Top 13 Indian Power-Packed Options",
    description:
      "We take pride in using local ingredients as part of our commitment to sustainability and quality for healthier breakfast choices.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",
    date: "Feb 29, 2024",
    readTime: "10 Min",
    title: "Degree in Hotel Management in Amritsar: A Complete Guide",
    description:
      "Confused about what to order when visiting the restaurant? This article will help you choose the perfect hospitality career path.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
    date: "Feb 29, 2024",
    readTime: "10 Min",
    title: "Healthy Indian Breakfast Recipes To Boost Your Morning Workout",
    description:
      "If you have the right food in the morning before your workout, it not only provides you with energy but also improves focus.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop",
    date: "Feb 29, 2024",
    readTime: "10 Min",
    title: "Domestic Biogas Plant Setup for Indian Hotels",
    description:
      "Today, installing a biogas plant is one of the smartest decisions whether it's the kitchen of a hotel or a hospitality chain.",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1200&auto=format&fit=crop",
    date: "Feb 29, 2024",
    readTime: "10 Min",
    title: "How To Choose The Best Culinary Arts Course For Your Career",
    description:
      "Are you dreaming of becoming a professional chef? Explore how to choose the right culinary arts course for long-term success.",
  },
];

const BlogCard = ({ post }) => {
  return (
    <article className="group flex flex-col gap-[18px] cursor-pointer transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="overflow-hidden rounded-[10px]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[229px] object-cover block transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        {/* Meta */}
        <div className="flex items-center gap-2">
          <span className="font-lora text-[12px] leading-[17.1px] text-[#9B251E]">
            {post.date}
          </span>

          <span className="w-[3px] h-[3px] rounded-full bg-[#999999]" />

          <span className="font-lora text-[12px] leading-[17.1px] text-[#666666]">
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-[Cormorant_Garamond] text-[24px] leading-[115%] font-semibold text-[#1F1A17] line-clamp-2">
          {post.title}
        </h3>

        {/* Description */}
        <p className="font-lora text-[16px] leading-6 font-normal text-[#444444] line-clamp-3">
          {post.description}
        </p>
      </div>
    </article>
  );
};

const RecentPostsSection = () => {
  return (
    <section className="w-full bg-[#FFF7ED] pt-20 pb-[90px] px-5 md:px-8 overflow-hidden">
      <div className="max-w-[1333px] mx-auto flex flex-col items-center gap-12">
        {/* Header */}
        <div className="w-full max-w-[902px] flex flex-col items-center gap-[10px]">
          {/* Small Label */}
          <div className="flex flex-col items-center gap-2">
            <span className="w-[72px] h-[1px] bg-[#C98984]" />

            <p className="font-lora text-[16px] font-normal text-[#9B251E]">
              Blog Posts
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-center font-[NewYork] text-[44px] md:text-[58px] lg:text-[72px] leading-none font-normal tracking-normal text-[#1F1A17]">
            Recent Posts
          </h2>

          {/* Filters */}
          <div className="w-full overflow-x-auto scrollbar-hide pt-2">
            <div className="flex items-center justify-center gap-3 min-w-max px-1">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`h-[42px] px-[22px] rounded-full border font-lora text-[16px] font-medium whitespace-nowrap transition-all duration-300 ${
                    index === 0
                      ? "bg-[#9B251E] text-white border-[#9B251E]"
                      : "bg-transparent text-[#9B251E] border-[#C98984] hover:bg-[#9B251E] hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Load More */}
        <button className="w-[180px] h-[52px] rounded-full bg-[#9B251E] text-white font-lora text-[16px] font-semibold transition-all duration-300 hover:opacity-90 hover:-translate-y-1">
          Load More
        </button>
      </div>
    </section>
  );
};

export default RecentPostsSection;