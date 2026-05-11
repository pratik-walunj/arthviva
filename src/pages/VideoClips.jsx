import React from "react";

const VideoClips = () => {
  const videos = [
    {
      title: "Smart Investment Planning",
      desc: "Learn strategic investment techniques for long-term wealth creation and financial stability.",
      youtubeId: "yYs8DhsJewc",
    },

    {
      title: "Mutual Fund Basics",
      desc: "Understand mutual funds, SIPs, and wealth creation strategies.",
      youtubeId: "ysz5S6PUM-U",
    },

    {
      title: "Retirement Planning",
      desc: "Discover retirement planning strategies for a secure financial future.",
      youtubeId: "ScMzIvxBSi4",
    },

    {
      title: "Insurance & Protection",
      desc: "Protect your family and future with smart insurance planning.",
      youtubeId: "aqz-KE-bpKQ",
    },

    {
      title: "Tax Saving Investments",
      desc: "Explore tax-saving investment opportunities and financial planning.",
      youtubeId: "LXb3EKWsInQ",
    },

    {
      title: "Financial Freedom Journey",
      desc: "Build financial discipline and achieve long-term financial independence.",
      youtubeId: "M7lc1UVf-VE",
    },
  ];

  return (
    <div className="bg-[#f8fafc] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 to-black/70"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Financial Video Library
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-8">
            Learn investment strategies, retirement planning, mutual funds,
            insurance, and wealth management through expert financial video
            content.
          </p>

          <button className="mt-10 bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 rounded-xl font-semibold transition duration-300 shadow-xl">
            Explore Videos
          </button>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-blue-100 text-blue-900 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            Financial Education
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-8">
            Learn Finance Through Professional Videos
          </h2>

          <p className="text-lg text-gray-600 leading-9">
            Explore financial knowledge through professional videos covering
            investment planning, mutual funds, insurance, retirement strategies,
            tax-saving investments, and wealth management solutions.
          </p>
        </div>
      </section>

      {/* VIDEO GRID */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 border border-gray-100"
              >
                {/* YOUTUBE VIDEO */}
                <iframe
                  className="w-full h-[260px]"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* CONTENT */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-blue-950 mb-4">
                    {video.title}
                  </h3>

                  <p className="text-gray-600 leading-8">{video.desc}</p>

                  <button className="mt-6 text-blue-900 font-semibold hover:text-blue-700 transition">
                    Watch Full Video →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="py-24 px-6 bg-white mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-block bg-blue-100 text-blue-900 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              Financial Learning
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 leading-tight mb-8">
              Learn Investment Strategies From Experts
            </h2>

            <p className="text-lg text-gray-600 leading-9 mb-6">
              Our financial video library helps investors understand important
              concepts including mutual funds, retirement planning, insurance,
              tax-saving strategies, and wealth management techniques.
            </p>

            <p className="text-lg text-gray-600 leading-9">
              Stay updated with valuable financial insights and make smarter
              investment decisions for your future.
            </p>

            <button className="mt-10 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg">
              Explore More Videos
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-100 rounded-[40px]"></div>

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
              alt="Financial Learning"
              className="relative z-10 rounded-[40px] shadow-2xl w-full h-[550px] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoClips;
