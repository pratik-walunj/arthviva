import React from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  BarChart3,
  ShieldCheck,
  Briefcase,
  HandCoins,
  Umbrella,
  ChevronRight,
} from "lucide-react";

// Assuming mutual_funds image is imported as before
import mutual_funds from "../images/mutual-fund.jpg";
import etf from "../images/etf.jpg";
import insurance from "../images/insurance.jpg";
import las from "../images/las.jpg";
import value_added from "../images/value_added.png";
import A_Z_planning from "../images/A_Z_planning.png";

const ProductBasket = () => {
  const products = [
    {
      title: "Mutual Funds",
      category: "Growth",
      icon: <TrendingUp className="w-6 h-6" />,
      image: mutual_funds,
      content: `A mutual fund is a professionally managed investment fund that pools money from many investors to purchase securities. These investors may be retail or institutional in nature.
      
      Mutual funds have advantages and disadvantages compared to direct investing in individual securities. The primary advantages of mutual funds are that they provide economies of scale, a higher level of diversification, they provide liquidity, and they are managed by professional Fund Managers. On the negative side, investors in a mutual fund must pay various fees and expenses.
      
      Primary structures of mutual funds include open-ended funds and closed-ended funds.
      `,
    },
    {
      title: "Equity & ETFs",
      category: "Market",
      icon: <BarChart3 className="w-6 h-6" />,
      image: etf,
      content: `Equities and ETFs offer distinct avenues for investors to participate in the stock market. While equities represent direct ownership in a specific company, ETFs provide a diversified approach by pooling investments into a basket of securities. This diversification can mitigate risk as it spreads investments across various companies or industries.
      
      Direct Equity involves buying and selling shares of individual companies, making the investor a part-owner. The main goal is to profit from rising share prices. Many companies also distribute dividends to shareholders. This approach offers higher potential returns but also carries higher risk. Investors must conduct thorough research and analysis to identify promising stocks. Active management is crucial, as investors need to monitor their portfolio and make timely buy and sell decisions.`,
    },
    {
      title: "Insurance",
      category: "Protection",
      icon: <ShieldCheck className="w-6 h-6" />,
      image: insurance,
      content: `Insurance refers to a contractual arrangement in which one party, i.e., the insurance company or the insurer, agrees to compensate the loss or damage sustained to another party, i.e. the insured, by paying a definite amount in exchange for an adequate consideration called a premium.
      
      The insured receives a contract called the insurance policy, which details the conditions and circumstances under which the insurer will compensate the insured. `,
    },
    {
      title: "Loan against Mutual Funds",
      category: "Liquidity",
      icon: <Briefcase className="w-6 h-6" />,
      image: las,
      content: `A loan against mutual funds is a financial product that allows investors to borrow money from banks or non-banking financial companies (NBFCs) using their mutual fund holdings as collateral. This option provides liquidity to investors without the need to sell their mutual fund units, thereby allowing them to remain invested for long-term growth.
      
      One of the main advantages of a loan against mutual funds is liquidity. It provides immediate access to cash without disrupting long-term investment plans. The flexibility of this financial product means that it can be used for various purposes, such as funding emergencies, education, or catering to urgent financial needs, while still benefiting from the potential market appreciation of mutual fund investments.`,
    },
    {
      title: "Value Added Services",
      category: "Convenience",
      icon: <HandCoins className="w-6 h-6" />,
      image: value_added,
      content: `Value-added services in the financial industry refer to additional benefits or features that go beyond the core offerings of a product or service. These services are designed to enhance the customer experience, provide convenience, and add extra value to the primary financial products.
      
      Examples of value-added services include personalized financial advice, portfolio management tools, educational resources, and customer support. These services can help customers make informed decisions, manage their investments more effectively, and ultimately improve their overall financial well-being.`,
    },
    {
      title: "A-Z Financial Solutions",
      category: "Comprehensive",
      icon: <Umbrella className="w-6 h-6" />,
      image: A_Z_planning,
      content: `A-Z Financial Solutions encompass a wide range of financial products and services that cater to various aspects of an individual's financial needs. From investment options like mutual funds and ETFs to insurance products such as term life and health insurance, these solutions are designed to provide comprehensive financial support.
      
      A-Z Financial Solutions aim to address the diverse financial requirements of individuals, offering a one-stop-shop for all their financial needs. This comprehensive approach allows customers to manage their finances more efficiently and effectively, ensuring that they have access to the right products and services at every stage of their financial journey.`,
    },
  ];

  return (
    <div className="bg-[#fcfdfe] text-slate-900 font-sans">
      {/* MODERN HERO SECTION */}
      <section className="relative h-[550px] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
            className="w-full h-full object-cover"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/95 via-blue-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 px-4 py-1 rounded-full text-sm font-medium tracking-wide uppercase">
            Our Offerings
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mt-6 tracking-tight">
            The Product <span className="text-blue-400">Basket</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
            Curated financial instruments designed to protect your capital and
            accelerate your wealth creation.
          </p>
        </div>
      </section>

      {/* STRATEGIC INTRO */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
            Institutional Quality <br />
            <span className="text-blue-700 font-medium italic">
              for Retail Investors
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            We don't just offer products; we offer paths to financial freedom.
            Each basket item is selected based on rigorous market analysis and
            historical performance.
          </p>
        </div>
      </section>

      {/* PRODUCTS LIST */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto space-y-40">
          {products.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* IMAGE WRAPPER */}
              <div className="w-full lg:w-1/2 group relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-[2rem] -z-10 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[450px] object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Float Badge */}
                <div className="absolute -bottom-6 right-8 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-slate-100">
                  <div className="bg-blue-600 p-3 rounded-lg text-white">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                      {item.category}
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                      Verified Plan
                    </p>
                  </div>
                </div>
              </div>

              {/* TEXT CONTENT */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line border-l-4 border-blue-600 pl-6 italic">
                  {item.content}
                </p>

                <div className="pt-6">
                  <Link to="/contact">
                    <button className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 active:scale-95">
                      Contact Us
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductBasket;
