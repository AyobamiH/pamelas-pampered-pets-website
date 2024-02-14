import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Slider from 'react-slick';
import aboutimage1 from '/images/aboutimage1.svg'
import aboutimageone from '/images/aboutimageone.png'
import Image3 from '../assets/image/Image3.svg'
import Image2 from '../assets/image/Image2.svg'
import Image22 from '/images/Image22.svg'

import './AboutPage.css'
import Image from '../assets/image/Image.svg'

import headshottwo from '/images/headshottwo.png'
import api from '../services/landingpageservices';

const About = () => {
  const [services, setServices] = useState([]);
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
  }, []);
    return(
    
      <>
  <div className="container">
    <section className="about">
      <header className='about-title '>About</header>
      {/* <p className='para'>Professional pet care provider serving seattle washing for over 20 year!</p> */}
      
    </section>

    {/* About Section */}
    <div className='about-us' id='about' >
      <div className='about-section' >
        
        <div className='about-text'>
          <p className='para'>Hi, I'm Pam, the owner of Pamela's Pampered Pets, your premier choice for professional pet care in Seattle, Washington! With over 20 years in the pet care industry, I've built a trusted business serving pet owners across Seattle and Washington state. I know your pets are family, so I offer personalized care to meet their unique needs.</p>
          <p className='para' >As a licensed, insured, CPR, and First Aid certified professional, I prioritize your pet's safety above all. From daily walks to overnight stays, I treat each pet with love and care, ensuring they feel comfortable and happy while you're away. For pet sitting, overnight care, or special needs services in Seattle, choose Pamela's Pampered Pets. Book a spot for your furry friend today! </p>
        </div>
        <div className='about-image-container aboutImageContainer '>
        <img src={headshottwo} alt="Pamela Marbett" className='about-image'/>
      </div>
      </div>
    </div>
      {/* Our Process Section */}
      <section id="process" className="features process-section">
  <div className=" process-header">
    <header className="">Our Process</header>
  </div>
  <div className=" process-list">
    <div className="process-item">
      <img src={Image} alt="Consultation" className="process-image" />
      <h3  className="process-title">Complimentary Consultation</h3>
      <p>
        We start with a complimentary consultation where I can meet you and your fur baby. During this meeting, you can share all the important details about your darling's specific needs, preferences, and personality. This helps me to understand how best to care for them and ensure their happiness and well-being.
      </p>
    </div>
    <div className="process-item">
      <img src={Image2} alt="Care Plan" className="process-image" />
      <h3 className="process-title">Personalized Care Plan</h3>
      <p>
        Based on the information gathered during our consultation, I create a personalized care plan tailored to your sweet baby's unique needs. Whether they require special attention due to their age, health, or temperament, I am equipped to provide the perfect care for them.
      </p>
    </div>
    <div className="process-item">
      <img src={Image3} alt="Loving Approach" className="process-image" />
      <h3  className="process-title">Gentle and Loving Approach</h3>
      <p>
        My approach involves meeting your fur baby at their level, both physically and emotionally. By coming down to their level, I help them feel safe and comfortable. My many years of experience allow me to care for animals at all stages of life, ensuring their physical, mental, and emotional needs are met with compassion.
      </p>
    </div>
    <div className="process-item">
      <img src={Image22} alt="Special Touches" className="process-image" />
      <h3  className="process-title">Extra Special Touches</h3>
      <p>
        I always strive to go above and beyond in caring for your sweet baby. From fun outings to the dog park to special ice cream treats with biscuits on top, I look for creative ways to make their time with me feel like a little vacation. I am always thinking of new and exciting activities to keep your darling engaged and happy.
      </p>
    </div>
    <div className="process-item">
      <img src={Image} alt="Expertise" className="process-image" />
      <h3  className="process-title">Expertise and Insight</h3>
      <p>
        Having cared for animals from the healthiest to those nearing the end of their journey, I have developed the expertise to handle any situation that may arise. My keen insight allows me to notice when your fur baby is not feeling their best, enabling me to provide timely and appropriate care.
      </p>
    </div>
    <div className="process-item">
      <img src={Image2} alt="Communication" className="process-image" />
      <h3  className="process-title">Ongoing Communication</h3>
      <p>
        Throughout our time together, I maintain open and ongoing communication with you. I believe that no detail is too small when it comes to the care of your precious darling. You can trust that I will treat your fur baby as if they were my own, with the highest standards of care and attention.
      </p>
    </div>
  </div>
  <p className="process-conclusion">
    At Pamela's Pampered Pets, your sweet baby is my top priority. I am highly dedicated to ensuring they receive the love, care, and attention they deserve.
  </p>
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







