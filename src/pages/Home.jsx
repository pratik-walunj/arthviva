import React from "react";
import { Link } from "react-router-dom";
import pyramid from "../images/Financial_Pyramid.png";
import about from "../images/quant-fund.png";
import mutal_funds from "../images/mutual-fund.jpg";
import etf from "../images/etf.jpg";
import insurance from "../images/insurance.jpg";
import las from "../images/las.jpg";
import fullfill from "../images/full_fill .jpeg";
import child_feature from "../images/Childs.png";
import welth from "../images/welth.png";
import our_home from "../images/own_home.png";
import value_added from "../images/value_added.png";
import A_Z_planning from "../images/A_Z_planning.png";

import {
  Shield,
  TrendingUp,
  Wallet,
  Landmark,
  FileText,
  PieChart,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  const products = [
    {
      title: "Mutual Funds",
      image: mutal_funds,
      desc: "A mutual fund is a professionally managed investment vehicle that pools money from investors to invest in different asset classes.",
    },

    {
      title: "Equity and ETFs",
      image: etf,
      desc: "Equities offer direct company ownership, while ETFs provide diversified exposure through a basket of securities.",
    },

    {
      title: "Insurance",
      image: insurance,
      desc: "Protection against financial risks by covering losses of the insured during unforeseen and adverse circumstances.",
    },

    {
      title: "Loan against MF",
      image: las,
      desc: "A loan against mutual funds lets investors borrow using their holdings as collateral, providing liquidity without selling assets.",
    },

    {
      title: "Value Added Services",
      image: value_added,
      desc: "Additional services like financial planning, tax-saving advice, and personalized investment strategies to enhance your financial journey.",
    },

    {
      title: "A-Z Financial Solutions",
      image: A_Z_planning,
      desc: "Comprehensive financial services covering everything from investment management to retirement planning, tailored to your unique needs.",
    },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Business Owner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "ArthViva helped me plan my investments professionally. Their financial guidance gave me confidence and long-term stability.",
    },

    {
      name: "Priya Mehta",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "The team explained mutual funds and retirement planning in a very simple way. Highly professional service and support.",
    },

    {
      name: "Amit Kulkarni",
      role: "Investor",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      review:
        "Excellent advisory services and financial planning. I strongly recommend ArthViva for wealth management solutions.",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO SLIDER SECTION */}
      <section className="relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="h-screen"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="h-[80vh] md:h-screen bg-cover md:bg-cover bg-contain bg-center bg-no-repeat relative flex items-center justify-center"
              style={{
                backgroundImage: `url(${fullfill})`,
              }}
            >
              <div className="absolute inset-0 bg-black/60"></div>

              <div className="relative z-10 text-center px-6 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Fulfill Dreams
                </h1>

                <p className="text-gray-200 text-xl mt-6">
                  Fulfill Dreams with Smart Financial Solutions.
                </p>

                <Link to="/product-basket">
                  <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="h-[80vh] md:h-screen bg-cover md:bg-cover bg-contain bg-center bg-no-repeat relative flex items-center justify-center"
              style={{
                backgroundImage: `url(${child_feature})`,
              }}
            >
              <div className="absolute inset-0 bg-black/60"></div>

              <div className="relative z-10 text-center px-6 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white">
                  Child Future Planning
                </h1>

                <p className="text-gray-200 text-xl mt-6">
                  Child Future Planning.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div
              className="h-[80vh] md:h-screen bg-cover md:bg-cover bg-contain bg-center bg-no-repeat relative flex items-center justify-center"
              style={{
                backgroundImage: `url(${welth})`,
              }}
            >
              <div className="absolute inset-0 bg-black/60"></div>

              <div className="relative z-10 text-center px-6 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white">
                  Wealth Building
                </h1>

                <p className="text-gray-200 text-xl mt-6">Wealth Building.</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div
              className="h-[80vh] md:h-screen bg-cover md:bg-cover bg-contain bg-center bg-no-repeat relative flex items-center justify-center"
              style={{
                backgroundImage: `url(${our_home})`,
              }}
            >
              <div className="absolute inset-0 bg-black/60"></div>

              <div className="relative z-10 text-center px-6 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white">
                  Own a Home
                </h1>

                <p className="text-gray-200 text-xl mt-6">
                  Grow your wealth with trusted investment strategies.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* WELCOME SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Welcome to ArthViva
            </h2>

            <p className="text-gray-600 leading-8 text-lg mb-6">
              ArthViva provides smart financial and investment solutions
              tailored to help individuals and businesses achieve financial
              stability and long-term growth.
            </p>

            <p className="text-gray-600 leading-8 text-lg">
              Our expert team focuses on wealth creation, retirement planning,
              tax-saving investments, and insurance solutions.
            </p>

            <Link to="/about">
              <button className="mt-8 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg transition">
                Learn More
              </button>
            </Link>
          </div>

          <div>
            <img src={about} alt="Finance" className="rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* PYRAMID SECTION */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src={pyramid}
              alt="Financial Pyramid"
              className="w-full max-w-lg mx-auto"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Get Your Personalised Financial Plan Today!
            </h2>

            <p className="text-gray-600 leading-8 text-lg mb-6">
              “A dream without a plan is just a wish. A financial plan turns
              wishes into reality.”
            </p>

            <ul className="space-y-4 text-gray-700">
              A personalised financial plan is your roadmap to a secure future.
              Tailored to your income, goals, and risk profile, it helps you
              plan for home purchase, education, tax savings, and retirement.
              With the right balance of protection and investments, it adapts to
              life changes and keeps you confident and in control.
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
            Our Financial Services
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
            We offer complete financial solutions for individuals, families, and
            businesses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-contain bg-white p-2"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-7">{item.desc}</p>
                  <Link to="/product-basket">
                    <button className="mt-6 text-blue-700 font-semibold hover:text-blue-900">
                      Learn More →
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-bold text-xl text-blue-900">
                      {item.name}
                    </h3>

                    <p className="text-gray-500">{item.role}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-7 italic">
                  "{item.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
