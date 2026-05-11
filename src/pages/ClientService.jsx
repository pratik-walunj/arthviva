import React from "react";
import { Link } from "react-router-dom";

import clientdesk from "../images/clientdesk.png";
import ewealth from "../images/nj-ewealth.png";

const ClientService = () => {
  return (
    <div className="bg-[#f8fafc] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-black/70"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Client Service
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Home / Offerings / Client Service
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-8">
            Premium Client Services
          </h2>

          <p className="text-lg text-gray-600 leading-9">
            We provide modern financial technology solutions and investment
            support services that help clients manage, monitor, and grow their
            investments efficiently with complete transparency and convenience.
          </p>
        </div>
      </section>

      {/* CLIENT DESK SECTION */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-blue-100 rounded-[40px]"></div>

            <img
              src={clientdesk}
              alt="Client Desk"
              className="relative z-10 rounded-[40px] shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          {/* CONTENT */}
          <div>
            <div className="inline-block bg-blue-100 text-blue-900 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              Wealth Management Desk
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-8 leading-tight">
              Client Desk
            </h2>

            <p className="text-gray-600 text-lg leading-9 mb-6">
              The Client Desk is a premium offering for our clients that
              consolidates the entire portfolio, covering every major financial
              and non-financial product for an entire family or an organisation.
              Access to the Client Desk is given to every client through a
              highly secured, unique login ID and password.
            </p>

            <p className="text-gray-600 text-lg leading-9 mb-6">
              The information inside the desk is updated daily, and all
              transactions done through us are automatically updated so that
              clients need not make any entries. The Client Desk empowers you by
              keeping you updated and informed anytime, anywhere - through
              online access or a mobile application.
            </p>

            <Link to="/contact">
              <button className="mt-10 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* NJ RECOMMENDED PORTFOLIO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* CONTENT */}
          <div>
            <div className="inline-block bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              Investment Planning
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-8 leading-tight">
              NJ Recommended MF Portfolio
            </h2>

            <p className="text-gray-600 text-lg leading-9 mb-6">
              Every investor aims to maximize returns while minimizing risk.
              While asset allocation and scheme selection are proven strategies,
              selecting the right schemes is a complex and time-consuming task
              that requires continuous monitoring and expertise. Managing this
              at an individual level can be challenging due to operational
              constraints and behavioral biases, often leading to less effective
              investment decisions. To ensure the right asset allocation,
              investors should consult their NJ Partner for better guidance.
            </p>

            <p className="text-gray-600 text-lg leading-9 mb-6">
              NJ Recommended MF Portfolio, formerly MARS, offers curated baskets
              of mutual fund schemes tailored to specific investment needs, risk
              profile and asset allocation strategies. These ready-to-invest
              portfolios simplify the investment process by eliminating the
              complexities of selecting and managing multiple schemes.
            </p>

            <Link to="/contact">
              <button className="mt-10 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg">
                Contact Us
              </button>
            </Link>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-yellow-100 rounded-[40px]"></div>

            <img
              src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2070&auto=format&fit=crop"
              alt="Portfolio"
              className="relative z-10 rounded-[40px] shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* E-WEALTH SECTION */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-green-100 rounded-[40px]"></div>

            <img
              src={ewealth}
              alt="NJ E-Wealth"
              className="relative z-10 rounded-[40px] shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          {/* CONTENT */}
          <div>
            <div className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              Digital Investment Platform
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-8 leading-tight">
              NJ E-Wealth Account
            </h2>

            <p className="text-gray-600 text-lg leading-9 mb-6">
              As a client of our NJ E-Wealth A/c service you can enjoy some big,
              tangible benefits. You can do hassle, worry and error free
              transactions in a very easy, time and cost effective manner – any
              time, any where.
            </p>

            <p className="text-gray-600 text-lg leading-9 mb-6">
              We offer easy transaction facilities and unique services for
              mutual fund and other transactions through our NJ E-Wealth
              Account, as given below.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-white shadow-md rounded-2xl p-5">
                Fresh Purchase /Additional Purchase /Redemptions /Switch
                Transactions
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5">
                SIP and STP registration
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5">
                NFO – Purchase, Switch and SIP Registration
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5">
                Equity Stock SIP registration
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5">
                Equity and Debt IPOs Application
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5">
                Comprehensive reports
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-9 mb-6">
              What's more, we offer multiple modes of doing transactions as
              listed below...
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-white shadow-md rounded-2xl p-5">
                Mobile: Transact through application on your mobile
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5">
                Online Desk: Transact through online Trading Account Desk
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5">
                Phone: Call and transact through your phone
              </div>
              <div className="bg-white shadow-md rounded-2xl p-5">
                Offline: Transact through physical instructions
              </div>
            </div>

            <Link to="/contact">
              <button className="mt-10 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientService;
