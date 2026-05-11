import React from "react";
import { PlayCircle, Star, Quote, UserRound } from "lucide-react";

const FundManagerInterviews = () => {
  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "Mutual Fund Investor",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      message:
        "ArthViva helped me build a strong investment portfolio with proper financial planning and expert guidance.",
    },

    {
      name: "Priya Sharma",
      role: "Business Owner",
      video: "https://www.youtube.com/embed/tgbNymZ7vqY",
      message:
        "The retirement and wealth management advice provided by ArthViva gave me confidence for my financial future.",
    },

    {
      name: "Amit Desai",
      role: "Long-Term Investor",
      video: "https://www.youtube.com/embed/ysz5S6PUM-U",
      message:
        "Professional support, transparent advice, and excellent financial services helped me achieve my investment goals.",
    },
  ];

  return (
    <div className="bg-[#f8fafc] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop')",
          }}
        ></div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 to-black/80"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="inline-block bg-yellow-500 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
            Client Video Testimonials
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Real Stories From
            <span className="block text-yellow-400 mt-3">
              Our Happy Clients
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-300 leading-8 max-w-3xl mx-auto">
            Hear directly from our clients about their financial growth,
            investment journey, retirement planning, and wealth management
            experience with ArthViva.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-blue-100 text-blue-900 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            Trusted Financial Guidance
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-8">
            Building Trust Through Results
          </h2>

          <p className="text-lg text-gray-600 leading-9">
            Our clients trust ArthViva for investment planning, mutual funds,
            retirement solutions, insurance guidance, and long-term wealth
            management strategies tailored to their financial goals.
          </p>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[35px] overflow-hidden shadow-xl hover:shadow-2xl transition duration-500"
            >
              {/* VIDEO */}
              <div className="relative h-[250px]">
                <iframe
                  className="w-full h-full"
                  src={item.video}
                  title={item.name}
                  allowFullScreen
                ></iframe>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                {/* QUOTE ICON */}
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                  <Quote className="w-8 h-8 text-blue-900" />
                </div>

                {/* MESSAGE */}
                <p className="text-gray-600 leading-8 text-lg italic">
                  "{item.message}"
                </p>

                {/* CLIENT INFO */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-900 flex items-center justify-center">
                    <UserRound className="text-white w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-950">
                      {item.name}
                    </h3>

                    <p className="text-gray-500">{item.role}</p>
                  </div>
                </div>

                {/* RATING */}
                <div className="flex gap-1 mt-6">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="py-24 px-6 bg-white mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-block bg-blue-100 text-blue-900 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              Why Clients Choose Us
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 leading-tight mb-8">
              Professional Financial Guidance You Can Trust
            </h2>

            <p className="text-lg text-gray-600 leading-9 mb-6">
              We focus on building long-term relationships through transparency,
              expert financial advice, and personalized investment solutions
              tailored to each client’s goals.
            </p>

            <p className="text-lg text-gray-600 leading-9">
              From mutual funds and insurance to retirement planning and wealth
              creation, ArthViva helps clients achieve financial confidence and
              stability.
            </p>

            <button className="mt-10 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg">
              Explore More Success Stories
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-100 rounded-[40px]"></div>

            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
              alt="Client Success"
              className="relative z-10 rounded-[40px] shadow-2xl w-full h-[550px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-950 to-blue-800 rounded-[40px] p-14 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Start Your Financial Growth Journey Today
          </h2>

          <p className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto leading-8">
            Join hundreds of satisfied clients who trust ArthViva for wealth
            management, retirement planning, and smart investment strategies.
          </p>

          <button className="mt-10 bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition duration-300 shadow-xl">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default FundManagerInterviews;
