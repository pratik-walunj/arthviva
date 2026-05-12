import React from "react";
import { Link } from "react-router-dom";
import vidio from "../images/vidio_galary.png";

const VideoClips = () => {
  const videos = [
    {
      title: "Smart Investment Planning",
      youtubeId: "yYs8DhsJewc",
    },
    {
      title: "Mutual Fund Basics",
      youtubeId: "rTBugs3p288",
    },
    {
      title: "Retirement Planning",
      youtubeId: "vhxNxY6jkVM",
    },
    {
      title: "Insurance & Protection",
      youtubeId: "20M3k04Glt4",
    },
    {
      title: "Tax Saving Investments",
      youtubeId: "Rc19ZbD_gbg",
    },
    {
      title: "Financial Freedom Journey",
      youtubeId: "6WqcqC2G2f0",
    },
  ];

  return (
    <div className="bg-[#f8fafc]">
      {/* HERO SECTION */}
      <section className="relative h-[420px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${vidio})`,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Video Library
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300">
            Learn investments, wealth creation, retirement planning, mutual
            funds, and financial strategies.
          </p>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-blue-950 mb-4">
              Financial Video Collection
            </h2>

            <p className="text-gray-600 text-lg">
              Watch professional financial education videos.
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
              >
                {/* Video */}
                <iframe
                  className="w-full h-[240px]"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Title */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-950 text-center">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto bg-blue-950 rounded-[40px] p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Financial Journey Today
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Build smarter investment habits with professional financial
            guidance.
          </p>

          <a
            href="/contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-xl transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default VideoClips;
