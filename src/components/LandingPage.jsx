import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LandingPage.css'; // Import the CSS file
import Image2 from '../assets/image/Image2.svg'
import Image3 from '../assets/image/Image3.svg'
import heroimage from '../assets/image/heroimage.png'
import Imagesix from '/images/Imagesix.svg'
import Headshotone from '/images/Headshotone.png'
import api from '../services/landingpageservices';


 

const LandingPage = () => {
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

   

  return (
    <div className="container">

      <section className="hero" style={{backgroundColor:'#fff'}}>
        <div className="hero-content  ">
          <h1 className="hero-title about-title">Pamela’s Pampered Pets</h1>
          <p className="hero-description para">Providing engaging pet care services pet owners for 20 years.</p>
          <p className="hero-subtitle para">Your premier choice for professional pet care in Seattle, Washington!</p>
          <a href="#services" className="btn btn-primary">Explore Our Services</a>
          <Link to="/booking-form" className=" btn btn-primary">Book Now</Link>
          
        </div>
        <div className="hero-image-container">
          <img  src={heroimage} alt="Pamela’s Pampered Pets" className="hero-image about-image"/>
        </div>
        
        
      </section>
      <section className="hero" style={{backgroundColor:'#fff'}}>
        <div className="hero-content  ">
          <h1 className="hero-title about-title">Ready to Give Your Pet the Best Care?</h1>
          <p className="hero-description para">My goal is to provide convenient and trustworthy pet care service, fostering a community that values pets.</p>
          <p className="hero-subtitle para">Your premier choice for professional pet care in Seattle, Washington!</p>
          <Link to="/contact" className="btn btn-primary">Contact Me</Link>
          <Link to="/booking-form" className="btn btn-primary">Book Now</Link>
          
        </div>
        <div className="hero-image-container">
          <img  src={Imagesix} alt="Pamela’s Pampered Pets" className="hero-image about-image"/>
        </div>
      </section>
   
      <section id="services" className="features " style={{height:'auto'}}>
        <div className="section-title" >
          <header  className="hero-title about-title">My Services</header>
      
        </div>
        
        <div className="features-list ">
          
          {services.map((service, index) => (
            <div className="feature-item" key={service.id}>
              <img src={service.image} alt={service.title} className="feature-image" />
              <h3 className="feature-title">{service.title}</h3>
              <p className="feature-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>


       {/* About Section */}
      <div className='about-us' id='about' >
      
      <div className='about-section' >
        <div className='about-text'>
          <header className='about-title '>Who is Pamela?</header>
          <p className='para'>Hi, I'm Pam, the owner of Pamela's Pampered Pets, your premier choice for professional pet care in Seattle, Washington! With over 20 years in the pet care industry, I've built a trusted business serving pet owners across Seattle and Washington state. I know your pets are family, so I offer personalized care to meet their unique needs.
            
          </p>
          <p className='para' >As a licensed, insured, CPR, and First Aid certified professional, I prioritize your pet's safety above all. From daily walks to overnight stays, I treat each pet with love and care, ensuring they feel comfortable and happy while you're away. For pet sitting, overnight care, or special needs services in Seattle, choose Pamela's Pampered Pets. Book a spot for your furry friend today! </p>
          
        </div>
        <div className='about-image-container aboutImageContainer'>
          <img src={Headshotone} alt="Pamela Marbett" className='about-image'/>
        </div>
      </div>

      

      <div  className='about-section ' style={{flexDirection:'column'}}>
        <div className='about-image-container aboutImageContainer'>
          <img src={Image3} alt="Our Approach" className='about-image' />
        </div>
        <div className='about-text'>
          
          <header className='about-title '>My Approach</header>
          <p className='para' >
           I believe in meeting each animal with a calm, gentle, and loving demeanor. With years of experience, I connect with pets on their level, ensuring they feel safe and comfortable. My expertise spans from caring for healthy animals to those near the end of their lives, allowing me to handle any situation with excellent troubleshooting skills and keen insight into your pet's well-being.</p>
          <p className='para'>
           I am committed to going above and beyond in my care. Whether it's taking dogs to the park or treating them to special ice cream with biscuits, I strive to create unique and enjoyable experiences for each pet. Always thinking of new and creative ways to pamper your pet, I aim to make them feel special and give them a vacation of their own when possible. Your pet's happiness and well-being are my top priorities.
          </p>
        </div>
      </div>

      <div className='about-section' >
        <div className='about-text' >
         
          <header className='about-title '>Our Process</header>
          <p className='para'>
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.
          </p>
          <p className='para'>
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.
          </p>
        </div>
        <div className='about-image-container aboutImageContainer' >
          <img src={Image2} alt="Our Process" className='about-image' />
        </div>
      </div>
    </div>
      

      


      <section className="testimonials">
        <header className="section-title about-title">What Others Are Saying About Pamela</header>
        <Slider {...sliderSettings} >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-slide">
              <img src={testimonial.image} alt={testimonial.author} className="testimonial-image" />
            
              <blockquote className="testimonial">
                <p >"{testimonial.quote}"</p>
                <footer>— {testimonial.author}</footer>
              </blockquote>
              {/* <img src={testimonial.image} alt={testimonial.author} className="testimonial-image" /> */}
            </div>
          ))}
        </Slider>
      </section>

    </div>
  );
};

export default LandingPage;
