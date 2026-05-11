import React from "react";

// IMPORT YOUR LOCAL IMAGES
import gallery1 from "../images/image_1.jpg";
import gallery2 from "../images/image_2.jpg";
import gallery3 from "../images/image_3.jpg";
import gallery4 from "../images/image_4.jpg";
import gallery5 from "../images/image_5.jpg";
import gallery6 from "../images/image_6.jpg";
import gallery7 from "../images/image_7.jpg";
import gallery8 from "../images/image_8.jpg";
import gallery9 from "../images/image_9.jpg";
import gallery10 from "../images/image_10.jpg";

const ImageGallery = () => {
  const galleryImages = [
    {
      image: gallery1,
      title: "SIP Investment",
    },

    {
      image: gallery2,
      title: "Happy Mothers Day",
    },

    {
      image: gallery3,
      title: "Mutual Funds",
    },

    {
      image: gallery4,
      title: "World Lafter Day",
    },

    {
      image: gallery5,
      title: "SIP Investment",
    },

    {
      image: gallery6,
      title: "Worlds labor day",
    },

    {
      image: gallery7,
      title: "Happy Baudhha Purnima",
    },

    {
      image: gallery8,
      title: "SIP Investment",
    },

    {
      image: gallery9,
      title: "Wealth building formula",
    },

    {
      image: gallery10,
      title: "Mutual Funds",
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
