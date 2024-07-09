import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image2 from '../assets/image/Image2.svg';
import Image3 from '../assets/image/Image3.svg';
import heroimage from '../assets/image/heroimage.png';
import Imagesix from '/images/Imagesix.svg';
import Headshotone from '/images/Headshotone.png';
import headshottwo from '/images/headshottwo.png';
import api from '../services/landingpageservices';

const LandingPage = () => {
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    api.getServices()
      .then(fetchedServices => {
        setServices(fetchedServices);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });

    api.getTestimonials()
      .then(fetchedTestimonials => {
        setTestimonials(fetchedTestimonials);
      })
      .catch(error => {
        console.error('Error fetching testimonials:', error);
      });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className=" mx-auto font-roboto-mono">
      <section className="lg:h-[100vh] sm:justify-center xs:py-0 sm:items-center sm:mt-4 sm:mb-2 md:justify-center md:items-center lg:justify-center lg:items-center bg-white dark:bg-gray-800 py-8 sm:flex sm:flex-col lg:flex 
      lg:flex-row md:flex md:flex-row h-auto ">
        <div className="xs:mt-20 sm:mt-4 sm:w-3/4  lg:mt-24">
          <img src={heroimage} alt="Pamela’s Pampered Pets" className="xs:w-1/2 p-4 mx-auto w-full md:w-4/6 sm:w-4/6 lg:w-5/6 xs:mt-10 sm:mt-12 sm:text-center xs:bg-[#40bfe0]  xs:rounded-full mt-20 sm:bg-[#40bfe0] sm:rounded-full dark:rounded-full" />
        </div>
        <div className="text-center lg:text-left xs:mt-4 mt-36 sm:mt-4 md:mt-10 ">
          <h1 className="p-4 m-4 sm:text-5xl font-roboto-mono lg:font-extrabold lg:text-5xl text-4xl  font-bold mb-4 text-gray-900 dark:text-gray-100 ">Pamela’s Pampered Pets</h1>
          <p className="p-4 m-4 xs:m-0 font-roboto-mono text-lg lg:text-xl mb-2 text-gray-700 dark:text-gray-300">Providing engaging pet care services pet owners for 20 years.</p>
          <p className="p-4 m-4 xs:m-0 font-roboto-mono  text-lg lg:text-xl mb-4 text-gray-700 dark:text-gray-300">Your premier choice for professional pet care in Seattle, Washington!</p>
          <div className="p-4 m-4 flex flex-col  sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#services" className="btn btn-primary bg-[#40bfe0] dark:bg-white dark:text-gray-900 text-white px-4 py-2 rounded ">Explore Our Services</a>
            <Link to="/booking-form" className=" btn btn-primary bg-[#40bfe0] dark:bg-white dark:text-gray-900 text-white px-4 py-2 rounded">Book Now</Link>
          </div>
        </div>
        <hr />
      </section>

      <section className="lg:h-[100vh] lg:flex-row-reverse lg:p-4 lg:m-4  sm:justify-center xs:py-0 sm:items-center sm:mt-4 sm:mb-2 md:justify-center md:items-center lg:justify-center lg:items-center bg-white dark:bg-gray-800 py-8 sm:flex sm:flex-col lg:flex  md:flex md:flex-row-reverse h-auto">
        <div className="  lg:mt-0">
          <img src={Imagesix} alt="Pamela’s Pampered Pets" className="xs:w-1/2 p-4 sm:w-4/6 mx-auto w-full   lg:w-5/6 xs:mt-10 sm:mt-10 xs:bg-[#40bfe0] xs:rounded-full mt-20 sm:mb-10 sm:bg-[#40bfe0] md:w-4/6 sm:rounded-full dark:rounded-full" />
        </div>

      
        <div className="text-center lg:text-left mt-36 xs:mt-4 sm:m-2 sm:mt-4 md:mt-10 ">
          <h1 className="p-4 m-4 xs:m-0 sm:text-5xl font-roboto-mono  text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">Ready to Give Your Pet the Best Care?</h1>
          <p className=" p-4 m-4 xs:m-0 font-roboto-mono text-lg lg:text-xl mb-2 text-gray-700 dark:text-gray-300">My goal is to provide convenient and trustworthy pet care service, fostering a community that values pets.</p>
          <p className="p-4 m-4 xs:m-0 font-roboto-mono text-lg lg:text-xl mb-4 text-gray-700 dark:text-gray-300">Your premier choice for professional pet care in Seattle, Washington!</p>
          <div className="flex p-4 m-4 flex-col sm:flex-row sm:m-2 gap-4 justify-center lg:justify-start">
            <Link to="/contact" className=" btn btn-primary bg-[#40bfe0] dark:bg-white dark:text-gray-900 text-white px-4 py-2 rounded">Contact Me</Link>
            <Link to="/booking-form" className="btn btn-primary bg-[#40bfe0] dark:bg-white dark:text-gray-900 text-white px-4 py-2 rounded">Book Now</Link>
          </div>
        </div>
        
      </section>
<hr />
      <section id="services" className="py-8 lg:h-auto">
        <div className=" text-center sm:mt-4 md:mt-0 xs:mt-4 xs:mb-2 sm:mb-2 mb-8">
          <header className="sm:text-5xl font-roboto-mono  sm:text-center xs:m-0 p-4 m-4 text-4xl md:text-5xl md:font-extrabold lg:font-extrabold lg:text-5xl font-bold lg:mt-14 text-gray-900">My Services</header>
        </div>
        <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map(service => (
            <div className=" sm:bg-[#f0f8ff]  bg-gray-100 dark:bg-gray-700 p-4 rounded" key={service.id}>
              <img src={service.image} alt={service.title} className=" sm:w-1/2 xs:w-1/2 xs:rounded-full sm:rounded-full sm:mx-auto xs:mx-auto  w-full mb-4" />
              <h3 className="sm:text-3xl font-roboto-mono xs:p-2  text-2xl lg:text-3xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{service.title}</h3>
              <p className="font-roboto-mono sm:text-lg xs:p-2 lg:text-xl text-gray-700 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
          <hr />
      <section className="py-8 md:bg-[#f0f8ff]" id="about">
        <div className="flex flex-col-reverse lg:flex-col-reverse lg:items-center md:flex-col-reverse mb-8">
          
          <div className=" lg:w-5/6 lg:mt-4 lg:mr-8">
            <header className="sm:text-4xl sm:text-center xs:p-4 xs:mx-auto md:text-5xl md:font-extrabold lg:font-extrabold p-4 m-4  text-4xl font-bold mb-4 md:text-center text-gray-900 ">Who is Pamela?</header>
            <p className="font-roboto-mono p-4 sm:text-lg m-4 lg:text-xl mb-4 text-gray-700 ">Hi, I'm Pam, the owner of Pamela's Pampered Pets, your premier choice for professional pet care in Seattle, Washington! With over 20 years in the pet care industry, I've built a trusted business serving pet owners across Seattle and Washington state. I know your pets are family, so I offer personalized care to meet their unique needs.</p>
            <p className="font-roboto-mono p-4 m-4 sm:text-lg lg:text-xl text-gray-700 ">As a licensed, insured, CPR, and First Aid certified professional, I prioritize your pet's safety above all. From daily walks to overnight stays, I treat each pet with love and care, ensuring they feel comfortable and happy while you're away. For pet sitting, overnight care, or special needs services in Seattle, choose Pamela's Pampered Pets. Book a spot for your furry friend today!</p>
          </div>
          <div className=" md:mx-auto  md:w-3/6 lg:w-1/2 mt-8 lg:mt-0 sm:bg-[#f0f8ff] xs:bg-[#f0f8ff]">
            <img src={headshottwo} alt="Pamela Marbett" className="xs:mx-auto xs:w-1/2 sm:w-1/2  sm:mx-auto  w-4/6 h-6/6 sm:rounded-full lg:rounded-lg md:rounded:lg  lg:mx-auto" />
          </div>
        </div>
        <hr />
        <div className="flex flex-col lg:flex-col lg:flex-wrap mt-4 lg:items-center">
          <div className="lg:w-1/2 md:w-full lg:mr-8">
            <img src={Image3} alt="My Approach" className="xs:w-1/2 h-auto rounded-md  lg:mb-4 mx-auto lg:mx-auto" />
          </div>
          <div className="lg:w-5/6 md:w-full">
        
            <header className="sm:text-4xl sm:text-center  xs:text-center md:text-5xl md:font-extrabold lg:font-extrabold p-4 m-4 md:text-center md:mt-4 text-4xl font-bold mb-4 text-gray-900">My Approach</header>
            <p className="p-4 m-4 font-roboto-mono sm:text-lg md:text-xl lg:text-xl mb-4 text-gray-700 ">I believe in meeting each animal with a calm, gentle, and loving demeanor. With years of experience, I connect with pets on their level, ensuring they feel safe and comfortable. My expertise spans from caring for healthy animals to those near the end of their lives, allowing me to handle any situation with excellent troubleshooting skills and keen insight into your pet's well-being.</p>
            <p className="p-4 m-4 font-roboto-mono sm:text-lg md:text-xl lg:text-xl text-gray-700 ">I am committed to going above and beyond in my care. Whether it's taking dogs to the park or treating them to special ice cream with biscuits, I strive to create unique and enjoyable experiences for each pet. Always thinking of new and creative ways to pamper your pet, I aim to make them feel special and give them a vacation of their own when possible. Your pet's happiness and well-being are my top priorities.</p>
        
          </div>
        </div>
        <hr />
        <div className="flex flex-col lg:flex-col lg:flex-wrap mt-4 lg:items-center lg:h-auto">
          <div className="lg:w-1/2 md:w-full ">
            <img src={Image2} alt="My Process" className="lg:mx-auto xs:w-1/2 h-auto rounded-md  lg:mb-4 mx-auto" />
          </div>
          <div className="lg:w-5/6 md:w-full ">
            <header className="sm:text-4xl xs:text-center sm:text-center md:text-5xl md:font-extrabold lg:font-extrabold p-4 m-4 text-4xl font-bold mb-4 text-gray-900">My Process</header>
            <p className="font-roboto-mono p-4 m-4 sm:text-lg md:text-xl lg:text-xl mb-4 text-gray-700">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.</p>
            <p className="font-roboto-mono p-4 m-4 sm:text-lg md:text-xl lg:text-xl text-gray-700">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.</p>
          </div>
        </div>
        <hr />


      </section>

  <section className="relative xs:py-0 py-8">
    <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center blur-md  opacity-50" style={{ backgroundImage: "url('/images/aboutimage.png')" }}></div>
    <header className="sm:text-5xl xs:text-center lg:p-4 lg:text-5xl sm:text-center md:text-5xl md:font-extrabold lg:font-extrabold p-4 m-4 text-4xl font-bold mb-4 text-gray-900 relative z-10">
      
      What Others Are Saying About Pamela
    </header>
    <Slider {...sliderSettings} className="relative z-10">
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className=" mx-auto  w-4/5  sm:w-1/2 lg:w-2/5 bg-black bg-opacity-70 p-8 rounded-lg text-center italic">
          <img src={testimonial.image} alt={testimonial.author} className="testimonial-image mx-auto mb-4 rounded-full w-24 h-24 object-cover" />
          <blockquote className=" mb-4 text-gray-100 ">
            <p className="lg:text-xl sm:text-lg font-roboto-mono text-lg">"{testimonial.quote}"</p>
            <footer className="text-lg font-semibold text-gray-200">— {testimonial.author}</footer>
          </blockquote>
        </div>
      ))}
    </Slider>
  </section>

    </div>
  );
};

export default LandingPage;

