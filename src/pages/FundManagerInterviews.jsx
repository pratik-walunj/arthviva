import React from "react";
import { Star, Quote, UserRound, ShieldCheck } from "lucide-react";

const FundManagerInterviews = () => {
  const testimonials = [
    {
      name: "Mutual Fund Investment Guide",
      role: "Investment Planning",
      youtubeId: "20M3k04Glt4",
      message:
        "Learn how disciplined investing and mutual fund planning can help build long-term wealth and financial stability.",
    },

    {
      name: "Smart Wealth Creation",
      role: "Wealth Management",
      youtubeId: "mI_f_onJtd4",
      message:
        "Understand smart financial strategies for wealth creation, goal planning, and future financial security.",
    },

    {
      name: "SIP Investment Journey",
      role: "SIP Planning",
      youtubeId: "nhn9-QgdkAw",
      message:
        "Explore how SIP investments help investors create wealth gradually with disciplined financial planning.",
    },

    {
      name: "Retirement Planning",
      role: "Retirement Solutions",
      youtubeId: "ScMzIvxBSi4",
      message:
        "Discover retirement investment strategies and financial planning techniques for a secure future.",
    },

    {
      name: "Investment Awareness",
      role: "Financial Education",
      youtubeId: "aqz-KE-bpKQ",
      message:
        "Build better financial understanding through investment awareness and wealth management guidance.",
    },

    {
      name: "Tax Saving Investments",
      role: "Tax Planning",
      youtubeId: "LXb3EKWsInQ",
      message:
        "Learn tax-saving investment opportunities and financial planning solutions for smarter wealth management.",
    },
  ];

  return (
    <div className="bg-[#f8fafc] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative bg-blue-950 py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1554224154-26032fced8bd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 text-yellow-400 px-5 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4" />
            Trusted By Investors
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Client Success Stories
          </h1>

          <p className="mt-8 text-lg text-gray-300 leading-8 max-w-3xl mx-auto">
            Hear how ArthViva helped clients achieve financial freedom,
            retirement planning, wealth growth, and smart investment success.
          </p>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 px-6 -mt-10 relative z-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:-translate-y-2 transition duration-300">
            <h2 className="text-5xl font-bold text-blue-950">500+</h2>
            <p className="mt-4 text-gray-600 text-lg">Happy Investors</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:-translate-y-2 transition duration-300">
            <h2 className="text-5xl font-bold text-blue-950">10+</h2>
            <p className="mt-4 text-gray-600 text-lg">Years of Experience</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:-translate-y-2 transition duration-300">
            <h2 className="text-5xl font-bold text-blue-950">98%</h2>
            <p className="mt-4 text-gray-600 text-lg">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL CARDS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-5">
              What Our Clients Say
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
              Real stories from investors who trusted ArthViva for wealth
              management and financial planning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[35px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100"
              >
                {/* VIDEO */}
                <div className="relative">
                  <iframe
                    className="w-full h-[240px]"
                    src={`https://www.youtube.com/embed/${item.youtubeId}`}
                    title={item.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                    <Quote className="w-7 h-7 text-blue-950" />
                  </div>

                  <p className="text-gray-600 leading-8 italic text-lg">
                    "{item.message}"
                  </p>

                  {/* USER INFO */}
                  <div className="flex items-center gap-4 mt-8">
                    <div className="w-14 h-14 rounded-full bg-blue-950 flex items-center justify-center">
                      <UserRound className="text-white w-7 h-7" />
                    </div>

                    <div>
                      <h3 className="font-bold text-xl text-blue-950">
                        {item.name}
                      </h3>

                      <p className="text-gray-500">{item.role}</p>
                    </div>
                  </div>

                  {/* STARS */}
                  <div className="flex gap-1 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-950 to-blue-800 rounded-[40px] p-14 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Start Building Your Wealth Today
          </h2>

          <p className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto leading-8">
            Get expert financial guidance, personalized investment planning, and
            long-term wealth creation strategies with ArthViva.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition duration-300 shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default FundManagerInterviews;
