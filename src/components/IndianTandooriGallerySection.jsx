// IndianTandooriGallerySection.jsx

export default function IndianTandooriGallerySection() {
  const images = {
    featured:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1400&auto=format&fit=crop",
    topLeft:
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=900&auto=format&fit=crop",
    topRight:
      "https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=900&auto=format&fit=crop",
    bottomLeft:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=900&auto=format&fit=crop",
    bottomRight:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=900&auto=format&fit=crop",
  };

  return (
    <section className="w-full overflow-hidden bg-[#F7F0E8] py-[100px]">
      <div className="mx-auto max-w-[1440px]">
        {/* TEXT CONTENT */}
        <div className="px-6 md:px-10 lg:ml-[193px] lg:px-0">
          <div className="max-w-[1080px] space-y-9">
            <p
              className="
                text-[16px]
                md:text-[18px]
                leading-[160%]
                font-normal
                text-[#151515]
              "
              style={{ fontFamily: "Lora, serif" }}
            >
              Our qualified and experienced professionals in Indian Cuisine
              focus on aspiring chefs who want to establish themselves in Indian
              and Tandoori cuisine by guiding them to learn various styles of
              marinating and preparations. Tandoori cooking originated in
              ancient India. It is used to make certain types of vegetarian and
              non-vegetarian dishes. Charcoal adds a smoky flavor to cooked food
              which not only gives it a natural dye but it ensures negligible
              loss of nutrients while cooking vegetables and meat.
            </p>

            <p
              className="
                text-[16px]
                md:text-[18px]
                leading-[160%]
                font-normal
                text-[#151515]
              "
              style={{ fontFamily: "Lora, serif" }}
            >
              NFCI Offers{" "}
              <span
                className="
                  cursor-pointer
                  text-[#9B251E]
                  underline
                  underline-offset-2
                  transition-all
                  duration-300
                  hover:opacity-80
                "
              >
                advanced culinary courses
              </span>
              . Our Certificate Course in Indian & Tandoori Cuisine covers
              Tandoori Roti / Bread which is the other version of roti as it is
              crispy and becomes heavier when the dough is baked in tandoor.
              Mostly milk or yogurt is blended with dough to make bread soft and
              chewy. There are lot of varieties that can be found in tandoori
              roti from simple to stuffed naans or lachha parantha. With our
              certificate course in Indian Cuisine, you will learn all Indian
              cooking skills from basics to advance.
            </p>
          </div>
        </div>

        {/* IMAGE GALLERY */}
        <div
          className="
            mt-[80px]
            flex
            flex-col
            gap-6
            px-6
            md:px-10
            lg:ml-[193px]
            lg:flex-row
            lg:items-start
            lg:gap-[22px]
            lg:px-0
          "
        >
          {/* FEATURED IMAGE */}
          <div
            className="
              group
              relative
              h-[320px]
              w-full
              overflow-hidden
              rounded-[10px]
              shadow-[0_12px_40px_rgba(0,0,0,0.08)]
              md:h-[500px]
              lg:h-[528px]
              lg:w-[530px]
              shrink-0
            "
          >
            <img
              src={images.featured}
              alt="Indian Tandoori Cuisine"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.05]
              "
            />
          </div>

          {/* RIGHT GRID */}
          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              md:gap-[18px]
            "
          >
            {/* TOP LEFT */}
            <div
              className="
                group
                relative
                h-[220px]
                w-full
                overflow-hidden
                rounded-[10px]
                border-[4px]
                border-[#9B251E]
                shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                md:h-[255px]
                lg:w-[257px]
              "
            >
              <img
                src={images.topLeft}
                alt="Indian curry bowl"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.05]
                "
              />
            </div>

            {/* TOP RIGHT */}
            <div
              className="
                group
                relative
                h-[220px]
                w-full
                overflow-hidden
                rounded-[10px]
                shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                md:h-[255px]
                lg:w-[258px]
              "
            >
              <img
                src={images.topRight}
                alt="Indian cuisine plate"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.05]
                "
              />
            </div>

            {/* BOTTOM LEFT */}
            <div
              className="
                group
                relative
                h-[220px]
                w-full
                overflow-hidden
                rounded-[10px]
                shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                md:h-[255px]
                lg:w-[257px]
              "
            >
              <img
                src={images.bottomLeft}
                alt="Tandoori dish"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.05]
                "
              />
            </div>

            {/* BOTTOM RIGHT */}
            <div
              className="
                group
                relative
                h-[220px]
                w-full
                overflow-hidden
                rounded-[10px]
                shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                md:h-[255px]
                lg:w-[257px]
              "
            >
              <img
                src={images.bottomRight}
                alt="Indian gourmet food"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.05]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}