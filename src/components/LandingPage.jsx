import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LandingPage.css'; // Import the CSS file
import pamelasdoggie from '../assets/image/pamelasdoggie.jpg';
import Image from '../assets/image/Image.svg'
import Image2 from '../assets/image/Image2.svg'
import landingpagecontact from '../assets/image/landingpagecontact.png'
import servicesone from '../../public/images/servicesone.png'
import Image3 from '../assets/image/Image3.svg'
import heroimage from '../assets/image/heroimage.png'
import Image5 from '../assets/image/Image5.svg'
import Imagesix from '../../public/images/Imagesix.svg'
import Image7 from '../assets/image/Image7.svg'
import Image8 from '../assets/image/Image8.svg'
import api from '../services/landingpageservices';


 const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      color: '#40E0D0', // turquoise blue
      width: '100%',
      height:'auto'
    },
    mainImage: {
    flex: '1',
    width: '50%',
    margin: '0 auto',
    padding: '0px 10px', // Image occupies half the width
    height: 'auto', // Maintain aspect ratio
    borderRadius: '10px', // Adjusted border radius for rounded corners
  },
    header: {
      marginBottom: '20px',
      textAlign: 'center',
      justifyContent: 'space-around',
      margin: '0 auto',
      alignContent: 'center',
      alignItems: 'center',
    },
    h1: {
      color: '#2c3e50',
      fontSize: '48px',
      fontFamily: 'Roboto Mono',
      fontWeight: 500,
      lineHeight: '60px',
      textAlign: 'center',
    },
    h2: {
      color: '#2c3e50',
      fontSize: '30px',
      fontFamily: 'Roboto Mono',
      fontWeight: 500,
      lineHeight: '50px',
      textAlign: 'center',
      marginBottom:'20px',
    },
    p: {
      color: '#2c3e50',
      fontSize: '18px',
      fontFamily: 'Roboto Mono',
      fontWeight: 300,
      lineHeight: '24px',
      textAlign: 'center',
      marginBottom: '1em', /* Add space between paragraphs */
      lineHeight: '1.6', /* Maintain line spacing within paragraphs */
      letterSpacing:' 0.03em',  /* Slightly increase space between letters */
      whiteSpace: 'wrap',
      textIndent: '20px',
     
    // },
    // aboutImage: {
    // width: '100%',
    // height: 'auto',
    // borderRadius: '10px',
    // marginBottom: '20px',
  },
  aboutSection: {
    display: 'flex',
    alignItems: 'center',
    height:'auto',

    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor:'#e9e9e9',
   

  },
  aboutText: {
    flex: '1',
    margin: '20px',
    lineHeight:'35px',
    
  },
  aboutImageContainer: {
    flex: '1',
    textAlign: 'center',
    margin:'50px',
      padding:'10px',
      height:'auto'
  },


    h3: {
      color: '#2c3e50',
      fontSize: '30px',
      fontFamily: 'Roboto Mono',
      fontWeight: 500,
      lineHeight: '36px',
      textAlign: 'center',
      marginBottom:'20px',
    },
    mainImage: {
      width: '20%',
      height: 'auto',
      borderRadius: '100%',
      display: 'block',
      margin: 'auto',
      marginBottom:'30px'
    },
    section: {
      padding: '50px 20px',
      textAlign: 'center',
      marginBottom: '40px', // Added margin bottom for spacing
      width: '100%',
      height: '414px',
      backgroundColor: '#40bfe0',
    },
    button: {
      cursor: 'pointer',
      top: '1326px',
      left: '554px',
      width: '332px',
      height: '36px',
      padding: '0px 8px',
      border: '1px solid #030303',
      boxSizing: 'border-box',
      boxShadow: '2px 2px 0px rgba(0,0,0,0.8)',
      backgroundColor: '#ffffff',
      color: '#2c3e50',
      fontSize: '18px',
      fontFamily: 'Roboto Mono',
      lineHeight: '23px',
      textTransform: 'uppercase',
      outline: 'none',
      marginTop: '80px',
    },
    

   
    description: {
      padding: '40px 0px',
      display: 'flex',
      justifyContent: 'space-between',
      
    },
    descriptionText: {
      flex: '1',
      lineHeight: '200px',
        padding:'2px',
      margin:'2px'
    },
    // descriptionImage: {
    //   flex: '1',
    //   width: '50%',
    //   height: 'auto',
    //   borderRadius:'100%'
    //     padding:'2px',
    //   margin:'2px'
      
    // },
    descriptionImage: {
      flex: '1',
      width: '50%',
      padding: '0px 20px', // Image occupies half the width
      height: 'auto', // Maintain aspect ratio
      borderRadius: '100px', // Adjusted border radius for rounded corners
      
    },
    
    footer: {
      backgroundColor: '#000',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
    },
    footerLinks: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '10px 0',
    },
    footerLink: {
      color: '#fff',
      textDecoration: 'none',
    },

    
  };



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
          <a className=" btn btn-primary"><Link to="/booking-form">Book Now</Link></a>
          
        </div>
        <div className="hero-image-container">
          <img  src={heroimage} alt="Pamela’s Pampered Pets" className="hero-image about-image"/>
        </div>
        
        
      </section>
      <section className="hero herotwo" style={{marginTop:'100px'}} >
        <div className="hero-image-container">
          <img  src={Imagesix} alt="Pamela’s Pampered Pets" className="hero-image about-image"/>
        </div>
        <div className="hero-content para">
          <header className="hero-title about-title">Ready to Give Your Pet the Best Care?</header>
          <p className="hero-description para">My goal is to provide convenient and trustworthy pet care service, fostering a community that values pets.</p>
          <p className="hero-subtitle para">Your premier choice for professional pet care in Seattle, Washington!</p>
          <a className="btn btn-primary"><Link to="/contact">Contact Me</Link></a>
          <a  className="btn btn-primary"><Link to="/booking-form">Book Now</Link></a>
          
        </div>
        
      </section>
      <section id="services" className="features" style={{height:'auto'}}>
        <div className="section-title" >
          <header  className="about-title">My Services</header>
      
        </div>
        
        <div className="features-list">
          
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
          <p className='para' >Your premier choice for professional pet care in Seattle, Washington! </p>
          <p className='para'>
            I'm Pam, the owner of Pamela's Pampered Pets. With over 20 years in the pet care industry, I've built a trusted business serving pet owners across Seattle and Washington state.
            I know your pets are family, so I offer personalized care to meet their unique needs. As a licensed, insured, CPR, and First Aid certified business, your pet's safety is my priority.
            From daily walks to overnight stays, I treat each pet with love and care, ensuring they feel comfortable and happy while you're away.
            For pet sitting, overnight care, or special needs services in Seattle, choose Pamela's Pampered Pets. Book a spot for your furry friend today!
          </p>
        </div>
        <div className='about-image-container aboutImageContainer'>
          <img src={Image} alt="Pamela Marbett" className='about-image'/>
        </div>
      </div>

      <div  className='about-section ' style={{flexDirection:'column'}}>
        <div className='about-image-container aboutImageContainer'>
          <img src={Image3} alt="Our Approach" className='about-image' />
        </div>
        <div className='about-text'>
          
          <header className='about-title '>Our Approach</header>
          <p className='para' >
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.
          </p>
          <p className='para'>
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.
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
