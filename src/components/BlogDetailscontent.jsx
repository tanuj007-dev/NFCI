// File: BlogDetail.jsx

import React from "react";


import featureImg from "../assets/feature-image.png";
import nerveImg from "../assets/nerve-image.png";
import foodChartImg from "../assets/b12-food-chart.png";

const SectionHeading = ({ children }) => (
  <h2
    className="
      font-['Cormorant_Garamond']
      text-[42px]
      leading-[115%]
      font-semibold
      text-[#151515]
      mt-6
      mb-[18px]
      tracking-[0]
      max-md:text-[36px]
      max-sm:text-[32px]
    "
  >
    {children}
  </h2>
);

const BodyText = ({ children, className = "" }) => (
  <p
    className={`
      font-['Lora']
      text-[18px]
      leading-[160%]
      font-normal
      text-[#151515]
      tracking-[0]
      mb-5
      max-sm:text-[16px]
      ${className}
    `}
  >
    {children}
  </p>
);

const ListItem = ({ children }) => (
  <li
    className="
      font-['Lora']
      text-[18px]
      leading-[160%]
      text-[#151515]
      max-sm:text-[16px]
    "
  >
    {children}
  </li>
);

const BlogDetail = () => {
  return (
    <section className="w-full bg-[#F5EFE8]">
      <article
        className="
          max-w-[1080px]
          mx-auto
          flex
          flex-col
          gap-[42px]
          pt-[60px]
          pb-[100px]
          px-6
          max-sm:px-5
        "
      >
        {/* Intro Content */}
        <div>
          <BodyText>
            Vitamin B12 plays a significant role in maintaining healthy nerves,
            producing red blood cells, and supporting overall neurological
            function. Deficiency of this important nutrient can lead to fatigue,
            tingling sensations, weakness, and cognitive challenges. Understanding
            the symptoms and knowing where to get Vitamin B12 from is essential
            for maintaining long-term wellness and energy.
          </BodyText>

          {/* Feature Image */}
          <div className="mt-8 overflow-hidden rounded-[10px]">
            <img
              src={featureImg}
              alt="Vitamin B12 Foods"
              className="
                w-full
                h-[526px]
                object-cover
                rounded-[10px]
                max-lg:h-[460px]
                max-md:h-[380px]
                max-sm:h-[240px]
              "
            />
          </div>

          <BodyText className="mt-8">
            Let’s dive deeper into why Vitamin B12 matters and how deficiency
            can silently impact your daily health and overall wellbeing.
          </BodyText>

          {/* What is Vitamin B12 */}
          <SectionHeading>What is Vitamin B12?</SectionHeading>

          <BodyText>
            Vitamin B12 is a water-soluble vitamin that supports the body’s
            nervous system, helps in the formation of DNA, and assists with red
            blood cell production. Since the body cannot naturally produce B12,
            it must be consumed through food or supplements.
          </BodyText>

          {/* Symptoms */}
          <SectionHeading>
            Signs of Vitamin B12 Deficiency
          </SectionHeading>

          <BodyText>
            Early deficiency symptoms can appear gradually and may often be
            overlooked. Some common symptoms include:
          </BodyText>

          <ul className="list-disc pl-7 space-y-2 mb-6">
            <ListItem>Fatigue and weakness</ListItem>
            <ListItem>Numbness or tingling in hands and feet</ListItem>
            <ListItem>Difficulty concentrating</ListItem>
            <ListItem>Dizziness and headaches</ListItem>
            <ListItem>Pale or yellowish skin</ListItem>
            <ListItem>Shortness of breath</ListItem>
            <ListItem>Memory issues and mood changes</ListItem>
          </ul>

          <BodyText>
            If untreated, Vitamin B12 deficiency may eventually affect nerve
            function and long-term neurological health.
          </BodyText>
        </div>

        {/* Side by Side Section */}
        <div
          className="
            grid
            grid-cols-[1fr_455px]
            gap-12
            items-start
            max-lg:grid-cols-1
          "
        >
          {/* Left */}
          <div>
            <SectionHeading>
              Does diabetes affects your nerves, the hidden role of vitamin
              B-12 and what you should start doing.
            </SectionHeading>

            <BodyText>
              Diabetes can impact the nervous system over time, especially when
              blood sugar levels remain uncontrolled. Vitamin B12 deficiency can
              further worsen nerve-related symptoms and contribute to peripheral
              neuropathy.
            </BodyText>

            <BodyText>
              People taking long-term diabetes medications may sometimes develop
              reduced Vitamin B12 absorption, making proper nutrition and
              supplementation even more important.
            </BodyText>

            <BodyText>
              Supporting your body with nutrient-rich foods, regular checkups,
              and healthy lifestyle habits can help maintain stronger nerve
              health and better energy levels.
            </BodyText>
          </div>

          {/* Right Image */}
          <div className="overflow-hidden rounded-[9px]">
            <img
              src={nerveImg}
              alt="Peripheral Neuropathy"
              className="
                w-full
                h-[482px]
                object-cover
                rounded-[9px]
                max-lg:h-auto
              "
            />
          </div>
        </div>

        {/* Food Grid Section */}
        <div>
          <SectionHeading>
            27 Best B12 Rich Foods Vegetarian Options | Vegetable and Fruits
          </SectionHeading>

          <div
            className="
              grid
              grid-cols-[551px_1fr]
              gap-12
              items-start
              mt-8
              max-xl:grid-cols-1
            "
          >
            {/* Left Image */}
            <div className="overflow-hidden rounded-[10px]">
              <img
                src={foodChartImg}
                alt="Vitamin B12 Rich Foods"
                className="
                  w-full
                  h-[850px]
                  object-contain
                  rounded-[10px]
                  bg-white
                  max-xl:h-auto
                "
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col gap-10">
              <div>
                <h3
                  className="
                    font-['Cormorant_Garamond']
                    text-[34px]
                    leading-[115%]
                    font-semibold
                    text-[#151515]
                    mb-5
                    max-sm:text-[28px]
                  "
                >
                  Vitamin B-12 Rich Vegetables and Fruits
                </h3>

                <ol className="list-decimal pl-7 space-y-2">
                  <ListItem>Mushrooms</ListItem>
                  <ListItem>Spinach</ListItem>
                  <ListItem>Potatoes</ListItem>
                  <ListItem>Beetroot</ListItem>
                  <ListItem>Broccoli</ListItem>
                  <ListItem>Bananas</ListItem>
                  <ListItem>Avocados</ListItem>
                  <ListItem>Blueberries</ListItem>
                  <ListItem>Oranges</ListItem>
                  <ListItem>Apples</ListItem>
                </ol>
              </div>

              <div>
                <h3
                  className="
                    font-['Cormorant_Garamond']
                    text-[34px]
                    leading-[115%]
                    font-semibold
                    text-[#151515]
                    mb-5
                    max-sm:text-[28px]
                  "
                >
                  Additional Vegetarian Sources
                </h3>

                <ol className="list-decimal pl-7 space-y-2">
                  <ListItem>Milk and yogurt</ListItem>
                  <ListItem>Cheese</ListItem>
                  <ListItem>Fortified cereals</ListItem>
                  <ListItem>Nutritional yeast</ListItem>
                  <ListItem>Paneer</ListItem>
                  <ListItem>Soy milk</ListItem>
                  <ListItem>Almond milk</ListItem>
                  <ListItem>Tofu</ListItem>
                  <ListItem>Tempeh</ListItem>
                  <ListItem>Fortified oats</ListItem>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Final Section */}
        <div>
  <SectionHeading>
    Transform Your Eating Habits with NFCI
  </SectionHeading>

  <BodyText>
    In the above-mentioned details, you have learned about the
    benefits of Vitamin B12 rich food and the effects of its
    deficiency. If you experience any of the symptoms mentioned,
    make sure to monitor your B12 levels and make necessary
    changes to your diet.
  </BodyText>

  <BodyText>
    It is important to include a variety of vegetables and fruits
    in your daily meals so you don’t have to depend on additional
    supplements. Healthy eating begins with understanding how to
    prepare nutritious food in a tasty and enjoyable way.
  </BodyText>

  <BodyText>
    If you want to learn how to turn healthy recipes into delicious
    meals, NFCI can help you bring a positive transformation to your
    life and your family’s lifestyle.
  </BodyText>

  <BodyText>
    To know more about{" "}
    <a
      href="/"
      className="
        underline
        underline-offset-2
        hover:opacity-80
        transition-opacity
      "
    >
      NFCI’s Curated Cooking Courses
    </a>
    , call us at +91-988801222.
  </BodyText>

  <BodyText>
    Don’t overthink — just give it a try, and thank us later!
  </BodyText>

  <div
    className="
      mt-6
      font-['Lora']
      text-[18px]
      leading-[160%]
      text-[#151515]
      max-sm:text-[16px]
    "
  >
    <span className="font-medium">Tag:</span>

    <a
      href="/"
      className="underline underline-offset-2 ml-1 hover:opacity-80"
    >
      How can I increase my B12 naturally?
    </a>

    <span>, </span>

    <a
      href="/"
      className="underline underline-offset-2 hover:opacity-80"
    >
      Vitamin b-12 rich options for vegetarian
    </a>

    <span>, </span>

    <a
      href="/"
      className="underline underline-offset-2 hover:opacity-80"
    >
      Vitamin B12 vegetables and fruits
    </a>

    <span>, </span>

    <a
      href="/"
      className="underline underline-offset-2 hover:opacity-80"
    >
      Vitamin B12 vegetarian foods in India
    </a>

    <span>, </span>

    <a
      href="/"
      className="
        underline
        underline-offset-2
        
        px-1
        rounded-[2px]
        hover:opacity-80
      "
    >
      What vegetarian foods are high in B12?
    </a>

    <span>, </span>

    <a
      href="/"
      className="underline underline-offset-2 hover:opacity-80"
    >
      Which fruit is high on B12?
    </a>
  </div>
</div>
      </article>
    </section>
  );
};

export default BlogDetail;