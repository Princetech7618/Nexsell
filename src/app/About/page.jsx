"use client";

import HeroSection from "../Components/Hero";


export default function About() {

  return (

<>
              {/* Hero Section */}
  <HeroSection 
  tittle={"Connecting Buyers & Sellers Seamlessly"}
  text={"Discover a marketplace that brings people together"}
    bgImg={"    /img/About.jpeg"}

  
  />



    <main className="bg-white text-gray-900 min-h-screen font-serif px-6 py-20 max-w-5xl mx-auto ">
      <section className="space-y-20">

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-indigo-600 text-center mb-12">
          About Nexsell
        </h1>

        {/* INTRO SECTION */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

          {/* Text */}
          <div className="md:w-1/2 text-base md:text-lg leading-normal text-gray-700 max-w-md mx-auto text-center md:text-left">
            <p className="mb-3">
              Welcome to <strong className="text-indigo-600">Nexsell</strong>, your premium 
              platform designed to revolutionize buying and selling in India. We focus on 
              speed, safety, and a modern user experience.
            </p>

            <p>
              Whether it's Cars, Bikes, Mobiles, Electronics, or Commercial Vehicles—Nexsell 
              offers a seamless experience for every user.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 rounded-xl shadow-xl overflow-hidden group">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Nexsell overview"
              className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500 ease-out"
              loading="lazy"
            />
          </div>
        </div>

        {/* VISION SECTION */}
        <div className="flex flex-col md:flex-row items-center gap-10 mt-10">

          {/* Image */}
          <div className="md:w-1/2 rounded-3xl shadow-xl overflow-hidden order-last md:order-first">
            <img
              src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg"
              alt="Vision"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-base md:text-lg leading-normal max-w-md mx-auto text-center md:text-left">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-3">
              Our Vision
            </h2>
            <p>
              We aim to build a transparent marketplace powered by trust and technology. 
              Nexsell evolves with verified profiles, fraud protection, and a smooth UI.
            </p>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="flex flex-col md:flex-row items-center gap-10 mt-20">

          {/* Text */}
          <div className="md:w-1/2 text-base md:text-lg leading-normal max-w-md mx-auto text-center md:text-left">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-3">
              Why Choose Nexsell?
            </h2>

            <ul className="space-y-2 list-disc pl-5">
              <li><strong>Verified Users:</strong> Genuine buyers & sellers only.</li>
              <li><strong>Fast Posting:</strong> Create listings in minutes.</li>
              <li><strong>Secure System:</strong> Multi-layer anti-scam protection.</li>
              <li><strong>Pan-India Reach:</strong> Active in 1,900+ cities.</li>
              <li><strong>Fully Responsive:</strong> Smooth on all devices.</li>
            </ul>
          </div>

          {/* Image */}
          <div className="md:w-1/2 rounded-3xl shadow-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg"
              alt="Trusted users"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* COMMUNITY */}
        <section className="text-base md:text-lg leading-normal max-w-3xl mx-auto mt-16 text-center">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-3">
            Our Community
          </h2>
          <p>
            Nexsell’s community grows every day—built by users who prefer simplicity, trust, 
            and quality. With strong tools and dedicated support, we help everyone make 
            smarter buying & selling decisions.
          </p>
        </section>

        {/* GET STARTED */}
        <div className="flex flex-col md:flex-row items-center gap-10 mt-16">

          {/* Image */}
          <div className="md:w-1/2 rounded-3xl shadow-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              alt="Join Nexsell"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-base md:text-lg leading-normal max-w-md mx-auto text-center md:text-left">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-3">
              Get Started Today!
            </h2>
            <p>
              Join thousands of Nexsell users who buy and sell with confidence. Whether 
              casual sellers or professional traders—Nexsell works for everyone.
            </p>

            <p className="mt-8 text-xl font-semibold text-indigo-600">
              “Sell Anything, Anytime, Anywhere.”
            </p>
          </div>
        </div>






      </section>





      
    </main>


</>


  );
}
