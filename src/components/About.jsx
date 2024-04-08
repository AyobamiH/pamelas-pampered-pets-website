import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Slider from 'react-slick';
import aboutimage1 from '/images/aboutimage1.svg'
import aboutimageone from '/images/aboutimageone.png'
import Image3 from '../assets/image/Image3.svg'
import Image2 from '../assets/image/Image2.svg'
import Image22 from '/images/Image22.svg'


import Image from '../assets/image/Image.svg'

import headshottwo from '/images/headshottwo.png'
import api from '../services/landingpageservices';

const About = () => {
  const [services, setServices] = useState([]);

  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    // Fetch services
    api
      .getServices()
      .then(fetchedServices => {
        setServices(fetchedServices);
        console.log(fetchedServices)
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });      
      
      // Fetch testimonials
      api
      .getTestimonials()
      .then(fetchedTestimonials => {
        setTestimonials(fetchedTestimonials);
        console.log(fetchedTestimonials)
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

    return(
    
      <>
<section className="py-8 md:bg-[#f0f8ff]" id="about">
        <div className="flex flex-col-reverse lg:flex-row md:flex-col-reverse  mb-8">
          <div className=" lg:w-1/2 lg:mt-4 lg:mr-8">
            <header className="sm:text-4xl sm:text-center md:text-5xl md:font-extrabold lg:font-extrabold p-4 m-4  text-4xl font-bold mb-4 md:text-center text-gray-900 dark:text-gray-100">Who is Pamela?</header>
            <p className="font-roboto-mono p-4 sm:text-lg m-4 lg:text-xl mb-4 text-gray-700 dark:text-gray-300">Hi, I'm Pam, the owner of Pamela's Pampered Pets, your premier choice for professional pet care in Seattle, Washington! With over 20 years in the pet care industry, I've built a trusted business serving pet owners across Seattle and Washington state. I know your pets are family, so I offer personalized care to meet their unique needs.</p>
            <p className="font-roboto-mono p-4 m-4 sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300">As a licensed, insured, CPR, and First Aid certified professional, I prioritize your pet's safety above all. From daily walks to overnight stays, I treat each pet with love and care, ensuring they feel comfortable and happy while you're away. For pet sitting, overnight care, or special needs services in Seattle, choose Pamela's Pampered Pets. Book a spot for your furry friend today!</p>
          </div>
          <div className=" md:mx-auto md:w-2/6 lg:w-1/2 mt-8 lg:mt-0 sm:bg-[#f0f8ff] xs:bg-[#f0f8ff]">
            <img src={headshottwo} alt="Pamela Marbett" className="xs:mx-auto xs:w-full  sm:w-3/6 sm:mx-auto  w-4/6 h-6/6 sm:rounded-full lg:rounded-lg md:rounded:lg  lg:mx-auto" />
          </div>
        </div>

        <div className=" flex flex-col mb-8 lg:flex-row md:flex-row ">
          <div className="md:w-1/2  lg:w-1/2 mt-8 lg:mt-4 ">
            <img src={Image3} alt="Our Approach" className=" xs:w-full sm:mx-auto sm:w-3/6 w-5/6 h-auto rounded-md lg:mx-auto md:mx-auto md:my-56" />
          </div>
          <div className="md:w-1/2 lg:w-1/2 lg:mt-4 lg:ml-6">
            <header className="sm:text-4xl sm:text-center  md:text-5xl md:font-extrabold lg:font-extrabold p-4 m-4 md:text-center md:mt-4 text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">My Approach</header>
            <p className="p-4 m-4 font-roboto-mono sm:text-lg md:text-xl lg:text-xl mb-4 text-gray-700 dark:text-gray-300">I believe in meeting each animal with a calm, gentle, and loving demeanor. With years of experience, I connect with pets on their level, ensuring they feel safe and comfortable. My expertise spans from caring for healthy animals to those near the end of their lives, allowing me to handle any situation with excellent troubleshooting skills and keen insight into your pet's well-being.</p>
            <p className="p-4 m-4 font-roboto-mono sm:text-lg md:text-xl lg:text-xl text-gray-700 dark:text-gray-300">I am committed to going above and beyond in my care. Whether it's taking dogs to the park or treating them to special ice cream with biscuits, I strive to create unique and enjoyable experiences for each pet. Always thinking of new and creative ways to pamper your pet, I aim to make them feel special and give them a vacation of their own when possible. Your pet's happiness and well-being are my top priorities.</p>
          </div>
        </div>
<hr></hr>
        <div className=" flex flex-col-reverse lg:flex-row md:flex-row ">
          <div className="md:w-1/2 lg:w-1/2 lg:mt-4 lg:mr-8 ">
            <header className="sm:text-4xl sm:text-center md:text-5xl md:font-extrabold lg:font-extrabold p-4 m-4 text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Our Process</header>
            <p className="font-roboto-mono p-4 m-4 sm:text-lg md:text-xl lg:text-xl mb-4 text-gray-700 dark:text-gray-300">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.</p>
            <p className="font-roboto-mono p-4 m-4 sm:text-lg md:text-xl lg:text-xl text-gray-700 dark:text-gray-300">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.</p>
          </div>
          <div className=" lg:w-1/2 mt-8 lg:mt-0">
            <img src={Image2} alt="Our Process" className="sm:w-3/6 xs:w-full  sm:mx-auto w-5/6 h-auto rounded-md lg:mx-auto md:mx-auto md:my-36" />
          </div>
        </div>
      </section>
 
    <section className="relative py-8">
    <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center blur-md opacity-50" style={{ backgroundImage: "url('/images/aboutimage.png')" }}></div>
    <header className="sm:text-4xl md:text-5xl md:font-extrabold lg:font-extrabold relative z-10  text-center mb-8 text-4xl font-bold text-gray-900 dark:text-gray-100">
      What Others Are Saying About Pamela
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

     

  
  <section className="blog">
       
        <div className="section-title" >
          <header  className="hero-title about-title">Pet Care Blog</header>
      
        </div>
        <div className="blog-posts">
          <div className="image-overlay">
            <img src={Image22} alt="Pet Health" />
            <h4 className="blog-title">How to keep your pet healthy and happy</h4>
            <p>Expert advice from pet care</p>
            <button className="discover-more">DISCOVER MORE</button>
          </div>
          <div className="image-overlay">
            <img src={aboutimage1} alt="Budget" />
            <h4 className="blog-title">Tips for managing your pet's budget</h4>
            <p>Budgeting tips for pet owners</p>
            <button className="explore-more">EXPLORE MORE</button>
          </div>
          
            <div className="image-overlay">
            <img src={aboutimage1} alt="Budget" />
            <h4 className="blog-title">Tips for managing your pet's budget</h4>
            <p>Budgeting tips for pet owners</p>
            <button className="explore-more">DISCOVER MORE</button>
            </div>
            
          
        </div>
        </section>
</>

     
    )
}
export default About







