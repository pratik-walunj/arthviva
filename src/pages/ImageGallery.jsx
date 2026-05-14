import React from "react";

// IMPORT YOUR LOCAL IMAGES
import gallery1 from "../images/image_1.jpg";
import gallery2 from "../images/image11.jpg";
import gallery3 from "../images/image12.jpg";
import gallery4 from "../images/image13.jpg";
import gallery5 from "../images/image_5.jpg";
import gallery6 from "../images/image14.jpg";
import gallery7 from "../images/image15.jpg";
import gallery8 from "../images/image_8.jpg";
import gallery9 from "../images/image16.jpg";
import gallery10 from "../images/image17.jpg";
import gallery11 from "../images/image18.jpg";
import gallery12 from "../images/image19.jpg";
import gallery13 from "../images/image20.jpg";
import gallery14 from "../images/image21.jpg";
import gallery15 from "../images/image22.jpg";
import gallery16 from "../images/image23.jpg";
import gallery17 from "../images/image24.jpg";
import gallery18 from "../images/image25.jpg";
import gallery19 from "../images/image26.jpg";

const ImageGallery = () => {
  const galleryImages = [
    {
      image: gallery1,
      title: "",
    },

    {
      image: gallery2,
      title: "",
    },

    {
      image: gallery3,
      title: "",
    },

    {
      image: gallery4,
      title: "",
    },

    {
      image: gallery5,
      title: "",
    },

    {
      image: gallery6,
      title: "",
    },

    {
      image: gallery7,
      title: "",
    },

    {
      image: gallery8,
      title: "",
    },

    {
      image: gallery9,
      title: "",
    },

    {
      image: gallery10,
      title: "",
    },
    {
      image: gallery11,
      title: "",
    },
    {
      image: gallery12,
      title: "",
    },
    {
      image: gallery13,
      title: "",
    },
    {
      image: gallery14,
      title: "",
    },
    {
      image: gallery15,
      title: "",
    },
    {
      image: gallery16,
      title: "",
    },
    {
      image: gallery17,
      title: "",
    },
    {
      image: gallery18,
      title: "",
    },
    {
      image: gallery19,
      title: "",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-blue-950 py-24 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Image Gallery
        </h1>

        <p className="text-gray-300 mt-6 text-lg">
          Home / Resources / Image Gallery
        </p>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                {/* IMAGE CONTAINER */}
                <div className="bg-gray-100 flex items-center justify-center p-4 h-[320px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* TITLE */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-blue-950 text-center">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageGallery;
