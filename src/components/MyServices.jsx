import api from '../services/landingpageservices';
import React, { useEffect, useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const MyServices = () => {
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
    <>
     <div className=" mx-auto px-4 font-roboto-mono">
    <section id="services" className="py-8">
      <div className="text-center sm:mt-20 md:mt-0 xs:mt-64 mb-8">
        <header className="sm:text-5xl font-roboto-mono sm:text-center p-4 m-4 text-4xl md:text-5xl md:font-extrabold lg:font-extrabold lg:text-5xl font-bold lg:mt-14 text-gray-900 dark:text-gray-100">
          My Services
        </header>
      </div>
      <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div className="sm:bg-[#f0f8ff] bg-gray-100 dark:bg-gray-700 p-4 rounded" key={service.id}>
            <img
              src={service.image}
              alt={service.title}
              className="sm:w-[40%] sm:rounded-full sm:mx-auto w-full mb-4"
            />
            <h3 className="sm:text-3xl font-roboto-mono text-2xl lg:text-3xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {service.title}
            </h3>
            <p className="font-roboto-mono sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
    <section className="relative py-8">
    <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center blur-md opacity-50" style={{ backgroundImage: "url('/images/aboutimage.png')" }}></div>
    <header className="sm:text-4xl md:text-5xl md:font-extrabold lg:font-extrabold relative z-10  text-center mb-8 text-4xl font-bold text-gray-900 dark:text-gray-100">
      Testimonials
    </header>
    <Slider {...sliderSettings} className="relative z-10">
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className=" mx-auto  w-4/5 sm:w-3/5 lg:w-2/5 bg-black bg-opacity-70 p-8 rounded-lg text-center italic">
          <img src={testimonial.image} alt={testimonial.author} className="testimonial-image mx-auto mb-4 rounded-full w-24 h-24 object-cover" />
          <blockquote className=" mb-4 text-gray-100">
            <p className="lg:text-xl sm:text-lg font-roboto-mono text-lg">"{testimonial.quote}"</p>
            <footer className="text-lg font-semibold text-gray-200">— {testimonial.author}</footer>
          </blockquote>
        </div>
      ))}
    </Slider>
  </section>
  </div>
  </>
  );
};

export default MyServices;


// <section id="services" className="  py-8">
//         <div className=" text-center sm:mt-20 md:mt-0 xs:mt-64 mb-8">
//           <header className="sm:text-5xl font-roboto-mono  sm:text-center  p-4 m-4 text-4xl md:text-5xl md:font-extrabold lg:font-extrabold lg:text-5xl font-bold lg:mt-14 text-gray-900 dark:text-gray-100">My Services</header>
//         </div>
//         <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map(service => (
//             <div className=" sm:bg-[#f0f8ff]  bg-gray-100 dark:bg-gray-700 p-4 rounded" key={service.id}>
//               <img src={service.image} alt={service.title} className=" sm:w-[40%] sm:rounded-full sm:mx-auto  w-full mb-4" />
//               <h3 className="sm:text-3xl font-roboto-mono  text-2xl lg:text-3xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{service.title}</h3>
//               <p className="font-roboto-mono sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>