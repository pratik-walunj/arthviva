import React from "react";
import abouts from "../images/about.jpg";

import {
  Users,
  BadgeIndianRupee,
  BriefcaseBusiness,
  Award,
  Target,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Layers3,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const About = () => {
  const strengths = [
    {
      number: "500+",
      title: "Satisfied Clients",
      icon: <Users className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
    },
    {
      number: "200+",
      title: "Lacs AUM",
      icon: (
        <BadgeIndianRupee className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />
      ),
    },
    {
      number: "15+",
      title: "Years of Experience",
      icon: (
        <BriefcaseBusiness className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />
      ),
    },
    {
      number: "20+",
      title: "Awards",
      icon: <Award className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
    },
  ];

  const whyUs = [
    {
      title: "Client Centric Approach",
      icon: (
        <HeartHandshake className="w-8 h-8 md:w-10 md:h-10 text-blue-700" />
      ),
      desc: "Nothing influences and concerns us more than your long-term interests. Hence, we have designed everything possible to match your needs and ensure that you benefit first and the most.",
    },
    {
      title: "Rich Product Basket",
      icon: <Layers3 className="w-8 h-8 md:w-10 md:h-10 text-blue-700" />,
      desc: "We offer a single point access to multiple financial products and services with a holistic need-driven approach & not product centric approach.",
    },
    {
      title: "Value Addition",
      icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-blue-700" />,
      desc: "Our Services ensure comfort, convenience, confidence, and control to you in assessing your wealth. You would enjoy being always updated of your investments, any time, anywhere.",
    },
    {
      title: "Experience & Trust",
      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-blue-700" />,
      desc: "We have rich experience in financial services and products distribution space. Backed with right qualifications & skills, we are the right people to engage with to ensure a smooth ride towards your financial well-being.",
    },
  ];

  return (
    <div className="bg-[#fcfdfe] overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[350px] md:min-h-[450px] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070')] bg-cover bg-center md:bg-fixed"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-[10px] md:text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight">
            Our{" "}
            <span className="text-blue-400 font-light italic">Identity</span>
          </h1>
          <div className="mt-6 md:mt-8 flex items-center justify-center gap-2 md:gap-3 text-gray-400 text-xs md:sm font-medium">
            <span>Home</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <span className="text-blue-400">About Us</span>
          </div>
        </div>
      </section>

      {/* --- OUR STORY SECTION --- */}
      <section className="py-16 md:py-32 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative order-2 lg:order-1 text-center lg:text-left">
            <div className="hidden lg:block absolute -top-10 -left-10 w-32 h-32 bg-blue-50 rounded-full -z-10 blur-2xl opacity-70"></div>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-3 italic">
              The Journey
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight">
              Crafting Financial <br className="hidden md:block" />
              <span className="text-blue-700">Legacies Since Day One.</span>
            </h3>

            <div className="space-y-4 md:space-y-6 text-slate-600 text-base md:text-lg leading-relaxed mx-auto lg:mx-0 max-w-xl">
              <p>
                ArthViva was incorporated with a vision to help individuals and
                families achieve financial freedom through smart and effective
                investment solutions.
              </p>
              <p className="border-l-4 border-blue-600 pl-4 md:pl-6 italic bg-slate-50 py-4 rounded-r-xl text-left">
                We are certified Mutual Fund and Insurance distributors
                recognized by NSE and AMFI.
              </p>
              <p>
                Our team provides complete financial distribution services
                tailored to your long-term goals.
              </p>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 group">
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-3xl opacity-10"></div>
            <img
              src={abouts}
              alt="About ArthViva"
              className="relative z-10 rounded-2xl shadow-xl w-full h-[300px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- STRENGTH SECTION (COUNTER) --- */}
      <section className="py-16 md:py-24 bg-blue-950 relative overflow-hidden px-4">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
              Skill Strength
            </h2>
            <p className="text-blue-300 font-medium tracking-wide uppercase text-[10px] md:text-sm">
              Building trust and delivering excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {strengths.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10 hover:bg-white transition-all duration-500 group text-center"
              >
                <div className="flex justify-center mb-4 md:mb-8 transform group-hover:scale-110 transition-transform">
                  <div className="p-3 md:p-4 bg-white/10 rounded-xl md:rounded-2xl group-hover:bg-blue-50">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white group-hover:text-blue-900 mb-2 transition-colors">
                  {item.number}
                </h3>
                <p className="text-blue-200 group-hover:text-slate-600 text-xs md:text-lg font-semibold uppercase tracking-wider transition-colors">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VISION MISSION SECTION --- */}
      <section className="py-16 md:py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {[
              {
                icon: <Eye className="w-8 h-8 md:w-10 md:h-10" />,
                title: "Our Vision",
                desc: "Our Vision is to provide the most ideal options in wealth building for our clients’ overall financial well-being. It is our mission to reach a maximum number of clients and make a positive, worthwhile impact in their lives and help them fulfil their responsibilities and financial needs in life.",
                color: "bg-blue-600",
                light: "bg-blue-50",
              },
              {
                icon: <Target className="w-8 h-8 md:w-10 md:h-10" />,
                title: "Our Mission",
                desc: "Our Mission is to provide our clients with the best guidance in wealth building. We are driven to provide clients with simple, unbiased, and uncluttered guidance that adds value to their quality of life and results in actionable options.",
                color: "bg-yellow-500",
                light: "bg-yellow-50",
              },
              {
                icon: <HeartHandshake className="w-8 h-8 md:w-10 md:h-10" />,
                title: "Our Purpose",
                desc: "Our core purpose is to provide financial guidance & thereby help people enjoy a secure retirement life.",
                color: "bg-green-600",
                light: "bg-green-50",
              },
            ].map((box, i) => (
              <div
                key={i}
                className={`group ${box.light} rounded-2xl md:rounded-3xl p-8 md:p-12 border border-transparent hover:border-slate-200 transition-all duration-500`}
              >
                <div
                  className={`${box.color} text-white w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-xl md:rounded-2xl mb-6 md:mb-10 shadow-lg`}
                >
                  {box.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
                  {box.title}
                </h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US SECTION --- */}
      <section className="py-20 md:py-32 bg-slate-50 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-[10px] md:text-sm font-black uppercase tracking-widest text-blue-600 mb-2 md:mb-4">
                The Advantage
              </h2>
              <h3 className="text-3xl md:text-6xl font-bold text-slate-900 tracking-tight">
                Why Choose Us
              </h3>
            </div>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-sm md:border-l-2 border-slate-300 md:pl-6 text-center md:text-left">
              Trusted financial expertise with personalized service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl md:rounded-[2rem] p-8 md:p-10 border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm md:text-slate-500 leading-relaxed transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
