
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import OurWorkInAction from './OurWorkInAction';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import fullherovideo from '/videos/fullherovideo.mp4';


import Testimonial from "./Testimonial";
import BookASpot from './services/BookASpot';
import ServiceGrid from './services/ServiceGrid';
import ContactCTA from './petCareAbout/ContactCTA';
import TeamSection from './petCareAbout/TeamSection';
  
  
  const LandingPage = () => {
  
  return (
    <div className="mx-auto font-roboto-mono">
      <section className="relative h-[100vh] flex items-center mt-16 justify-center bg-white dark:bg-gray-800 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center aspect-video">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src={ fullherovideo } type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute h-auto w-auto z-10 mt-10 xs:mt-0 text-center text-white p-6 rounded-md max-w-xxl lg:max-h-max mx-auto">
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl font-bold mb-4">
              Pamela's Pampered Pets
            </h1>
            <p className="text-xl mb-8">
              Professional, loving care for your furry friends.
            </p>
            <button className="bg-[#40bfe0] text-white px-6 py-3 rounded-full hover:bg-[#3aa8c7] transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <OurWorkInAction />
      <hr />
      <BookASpot />
      <hr />
      <section className="py-16 bg-[#f0f8ff]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Pet Care Services</h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-12">
          A range of services tailored to your pet's needs, from grooming and boarding to specialized medical care. The goal is to ensure your pet is happy, healthy, and well-cared for.
        </p>
        <ServiceGrid />
    
      </div>
    </section>
      {/* <hr />
      <ContactInfo /> */}
      <hr />

      <TeamSection/>
      <hr />
      <ContactCTA/>
      <hr />
      <Testimonial />
      
      <hr />
      
      {/* <div className="fixed bottom-0 left-0 right-0 bg-transparent shadow-lg p-4 flex  justify-center space-x-4">
        <Link to="/booking-form">
        <button className="bg-[#40bfe0] text-gray-800 px-6 py-2 rounded-full hover:bg-[#1e778e] hover:text-gray-100 transition duration-300">
          Book Now
        </button>
        </Link>

        <Link to="/contact">
        <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-[#1e778e] hover:text-gray-100 transition duration-300">
          Contact
        </button>
        </Link>
      </div> */}
      
      
    </div>
  );
};

export default LandingPage;

