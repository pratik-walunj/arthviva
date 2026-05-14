import React from "react";
import { MapPin, Phone, Mail, Clock3, Send } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="bg-[#f8fafc] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop')",
          }}
        ></div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 to-black/70"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            Contact ArthViva
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Let’s Discuss
            <span className="block text-yellow-400 mt-3">
              Your Financial Goals
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-300 leading-9 max-w-3xl mx-auto">
            Connect with our financial experts for investment planning, mutual
            funds, insurance solutions, retirement planning, and wealth
            management services.
          </p>
        </div>
      </section>

      {/* CONTACT INFO SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* ADDRESS */}
            <div className="bg-[#f8fafc] rounded-[35px] p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">
              <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <MapPin className="w-10 h-10 text-blue-900" />
              </div>

              <h3 className="text-2xl font-bold text-blue-950 mb-4">
                Office Address
              </h3>

              <p className="text-gray-600 leading-8">
                Kondhwa Pune, Maharashtra
                <br />
                India - 411001
              </p>
            </div>

            {/* PHONE */}
            <div className="bg-[#f8fafc] rounded-[35px] p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">
              <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Phone className="w-10 h-10 text-blue-900" />
              </div>

              <h3 className="text-2xl font-bold text-blue-950 mb-4">
                Phone Number
              </h3>

              <p className="text-gray-600 leading-8">+91 8432339777</p>
            </div>

            {/* EMAIL */}
            <div className="bg-[#f8fafc] rounded-[35px] p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">
              <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Mail className="w-10 h-10 text-blue-900" />
              </div>

              <h3 className="text-2xl font-bold text-blue-950 mb-4">
                Email Address
              </h3>

              <p className="text-gray-600 leading-8">support@arthviva.com</p>
            </div>

            {/* HOURS */}
            <div className="bg-[#f8fafc] rounded-[35px] p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">
              <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Clock3 className="w-10 h-10 text-blue-900" />
              </div>

              <h3 className="text-2xl font-bold text-blue-950 mb-4">
                Working Hours
              </h3>

              <p className="text-gray-600 leading-8">
                Mon - Sat
                <br />
                9:00 AM - 7:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-block bg-blue-100 text-blue-900 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              Get In Touch
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 leading-tight mb-8">
              Send Us Your Message
            </h2>

            <p className="text-lg text-gray-600 leading-9 mb-6">
              Whether you are planning investments, retirement, insurance, or
              wealth creation — our team is here to guide you with professional
              financial advice.
            </p>

            <p className="text-lg text-gray-600 leading-9">
              Fill out the form and our experts will contact you shortly to
              understand your financial requirements.
            </p>

            {/* IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
              alt="Contact"
              className="rounded-[35px] shadow-2xl mt-10"
            />
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white rounded-[40px] shadow-2xl p-10 md:p-14">
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-blue-950 mb-4">
                Contact Form
              </h3>

              <p className="text-gray-600 leading-8">
                Fill all required details and submit your enquiry.
              </p>
            </div>

            {/* WEB3FORMS */}
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              {/* ACCESS KEY */}
              <input
                type="hidden"
                name="access_key"
                value="af806a14-a275-49ca-b5b5-d70910e106e3"
              />

              {/* NAME */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full border border-gray-300 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>

              {/* EMAIL */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full border border-gray-300 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>

              {/* PHONE */}
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full border border-gray-300 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full border border-gray-300 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <textarea
                  rows="6"
                  name="message"
                  placeholder="Write your message..."
                  required
                  className="w-full border border-gray-300 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-blue-900"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white py-5 rounded-2xl font-semibold transition duration-300 flex items-center justify-center gap-3 shadow-xl text-lg"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden shadow-2xl">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
            width="100%"
            height="550"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
