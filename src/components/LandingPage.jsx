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
    <div className=" mx-auto px-4 font-roboto-mono">
      <section className="sm:mt-36  sm:justify-center sm:items-center md:justify-center md:items-center lg:justify-center lg:items-center bg-white dark:bg-gray-800 py-8 sm:flex sm:flex-col lg:flex lg:flex-row md:flex md:flex-row h-[100vh]">
        <div className="mt-8 lg:mt-0">
          <img src={heroimage} alt="Pamela’s Pampered Pets" className="sm:w-4/6 sm:mx-auto w-full lg:w-5/6 lg:mx-auto lg:mt-20 dark:w-[40%] dark:rounded-full" />
        </div>
        <div className="text-center lg:text-left sm:mb-36 ">
          <h1 className=" sm:text-5xl font-roboto-mono lg:font-extrabold lg:text-5xl text-4xl  font-bold mb-4 text-gray-900 dark:text-gray-100 ">Pamela’s Pampered Pets</h1>
          <p className="p-4 m-4 font-roboto-mono text-lg lg:text-xl mb-2 text-gray-700 dark:text-gray-300">Providing engaging pet care services pet owners for 20 years.</p>
          <p className="p-4 m-4 font-roboto-mono  text-lg lg:text-xl mb-4 text-gray-700 dark:text-gray-300">Your premier choice for professional pet care in Seattle, Washington!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#services" className="btn btn-primary bg-[#40bfe0] dark:bg-white dark:text-gray-900 text-white px-4 py-2 rounded dark:py-8">Explore Our Services</a>
            <Link to="/booking-form" className=" btn btn-primary bg-[#40bfe0] dark:bg-white dark:text-gray-900 text-white px-4 py-2 rounded dark:py-8">Book Now</Link>
          </div>
        </div>
        
      </section>
<hr />
      <section className="xs:mt-36 sm:mt-36 sm:justify-center xs:mb-24 sm:mb-24 sm:items-center md:justify-center md:items-center lg:justify-center lg:items-center bg-white dark:bg-gray-800 py-8 sm:flex sm:flex-col lg:flex lg:flex-row-reverse md:flex md:flex-row h-[100vh]">
        <div className="  mt-10 lg:mt-0">
          <img src={Imagesix} alt="Pamela’s Pampered Pets" className="sm:w-4/6 sm:mx-auto  w-full lg:w-5/6 lg:mx-auto" />
        </div>
        <div className="text-center lg:text-left ">
          <h1 className="sm:text-5xl font-roboto-mono  text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">Ready to Give Your Pet the Best Care?</h1>
          <p className="p-4 m-4 font-roboto-mono text-lg lg:text-xl mb-2 text-gray-700 dark:text-gray-300">My goal is to provide convenient and trustworthy pet care service, fostering a community that values pets.</p>
          <p className="p-4 m-4 font-roboto-mono text-lg lg:text-xl mb-4 text-gray-700 dark:text-gray-300">Your premier choice for professional pet care in Seattle, Washington!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/contact" className="btn btn-primary bg-[#40bfe0] dark:bg-white dark:text-gray-900 text-white px-4 py-2 rounded">Contact Me</Link>
            <Link to="/booking-form" className="btn btn-primary bg-[#40bfe0] dark:bg-white dark:text-gray-900 text-white px-4 py-2 rounded">Book Now</Link>
          </div>
        </div>
        
      </section>
<hr />
      <section id="services" className="  py-8">
        <div className=" text-center sm:mt-20 md:mt-0 xs:mt-64 mb-8">
          <header className="sm:text-5xl font-roboto-mono  sm:text-center  p-4 m-4 text-4xl md:text-5xl md:font-extrabold lg:font-extrabold lg:text-5xl font-bold lg:mt-14 text-gray-900">My Services</header>
        </div>
        <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div className=" sm:bg-[#f0f8ff]  bg-gray-100 dark:bg-gray-700 p-4 rounded" key={service.id}>
              <img src={service.image} alt={service.title} className=" sm:w-[40%] sm:rounded-full sm:mx-auto  w-full mb-4" />
              <h3 className="sm:text-3xl font-roboto-mono  text-2xl lg:text-3xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{service.title}</h3>
              <p className="font-roboto-mono sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 md:bg-[#f0f8ff]" id="about">
        <div className="flex flex-col-reverse lg:flex-row md:flex-col-reverse  mb-8">
          <div className=" lg:w-1/2 lg:mt-4 lg:mr-8">
            <header className="sm:text-4xl sm:text-center md:text-5xl md:font-extrabold lg:font-extrabold p-4 m-4  text-4xl font-bold mb-4 md:text-center text-gray-900 ">Who is Pamela?</header>
            <p className="font-roboto-mono p-4 sm:text-lg m-4 lg:text-xl mb-4 text-gray-700 ">Hi, I'm Pam, the owner of Pamela's Pampered Pets, your premier choice for professional pet care in Seattle, Washington! With over 20 years in the pet care industry, I've built a trusted business serving pet owners across Seattle and Washington state. I know your pets are family, so I offer personalized care to meet their unique needs.</p>
            <p className="font-roboto-mono p-4 m-4 sm:text-lg lg:text-xl text-gray-700 ">As a licensed, insured, CPR, and First Aid certified professional, I prioritize your pet's safety above all. From daily walks to overnight stays, I treat each pet with love and care, ensuring they feel comfortable and happy while you're away. For pet sitting, overnight care, or special needs services in Seattle, choose Pamela's Pampered Pets. Book a spot for your furry friend today!</p>
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
            <header className="sm:text-4xl sm:text-center  md:text-5xl md:font-extrabold lg:font-extrabold p-4 m-4 md:text-center md:mt-4 text-4xl font-bold mb-4 text-gray-900">My Approach</header>
            <p className="p-4 m-4 font-roboto-mono sm:text-lg md:text-xl lg:text-xl mb-4 text-gray-700 ">I believe in meeting each animal with a calm, gentle, and loving demeanor. With years of experience, I connect with pets on their level, ensuring they feel safe and comfortable. My expertise spans from caring for healthy animals to those near the end of their lives, allowing me to handle any situation with excellent troubleshooting skills and keen insight into your pet's well-being.</p>
            <p className="p-4 m-4 font-roboto-mono sm:text-lg md:text-xl lg:text-xl text-gray-700 ">I am committed to going above and beyond in my care. Whether it's taking dogs to the park or treating them to special ice cream with biscuits, I strive to create unique and enjoyable experiences for each pet. Always thinking of new and creative ways to pamper your pet, I aim to make them feel special and give them a vacation of their own when possible. Your pet's happiness and well-being are my top priorities.</p>
          </div>
        </div>
<hr></hr>
        <div className=" flex flex-col-reverse lg:flex-row md:flex-row ">
          <div className="md:w-1/2 lg:w-1/2 lg:mt-4 lg:mr-8 ">
            <header className="sm:text-4xl sm:text-center md:text-5xl md:font-extrabold lg:font-extrabold p-4 m-4 text-4xl font-bold mb-4 text-gray-900 ">My Process</header>
            <p className="font-roboto-mono p-4 m-4 sm:text-lg md:text-xl lg:text-xl mb-4 text-gray-700 ">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.</p>
            <p className="font-roboto-mono p-4 m-4 sm:text-lg md:text-xl lg:text-xl text-gray-700 ">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.</p>
          </div>
          <div className=" lg:w-1/2 mt-8 lg:mt-0">
            <img src={Image2} alt="Our Process" className="sm:w-3/6 xs:w-full  sm:mx-auto w-5/6 h-auto rounded-md lg:mx-auto md:mx-auto md:my-36" />
          </div>
        </div>
      </section>

  <section className="relative py-8">
    <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center blur-md opacity-50" style={{ backgroundImage: "url('/images/aboutimage.png')" }}></div>
    <header className="sm:text-4xl md:text-5xl md:font-extrabold lg:font-extrabold relative z-10  text-center mb-8 text-4xl font-bold text-gray-900 ">
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

    </div>
  );
};

export default LandingPage;



// 
// 
// 


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Image2 from '../assets/image/Image2.svg';
// import Image3 from '../assets/image/Image3.svg';
// import heroimage from '../assets/image/heroimage.png';
// import Imagesix from '/images/Imagesix.svg';
// import Headshotone from '/images/Headshotone.png';
// import headshottwo from '/images/headshottwo.png';
// import api from '../services/landingpageservices';

// const LandingPage = () => {
//   const [services, setServices] = useState([]);
//   const [testimonials, setTestimonials] = useState([]);

//   useEffect(() => {
//     api.getServices()
//       .then(fetchedServices => {
//         setServices(fetchedServices);
//       })
//       .catch(error => {
//         console.error('Error fetching services:', error);
//       });

//     api.getTestimonials()
//       .then(fetchedTestimonials => {
//         setTestimonials(fetchedTestimonials);
//       })
//       .catch(error => {
//         console.error('Error fetching testimonials:', error);
//       });
//   }, []);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//   };

//   return (
//     <div className="mx-auto px-4 font-roboto-mono">
//       <section className="sm:mt-36 sm:justify-center sm:items-center md:justify-center md:items-center lg:justify-center lg:items-center bg-white dark:bg-gray-900 py-8 sm:flex sm:flex-col lg:flex lg:flex-row md:flex md:flex-row h-[100vh]">
//         <div className="mt-8 lg:mt-0">
//           <img src={heroimage} alt="Pamela’s Pampered Pets" className="sm:w-4/6 sm:mx-auto w-full lg:w-5/6 lg:mx-auto lg:mt-20" />
//         </div>
//         <div className="text-center lg:text-left sm:mb-36">
//           <h1 className="sm:text-5xl font-roboto-mono lg:font-extrabold lg:text-5xl text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Pamela’s Pampered Pets</h1>
//           <p className="p-4 m-4 font-roboto-mono text-lg lg:text-xl mb-2 text-gray-700 dark:text-gray-300">Providing engaging pet care services pet owners for 20 years.</p>
//           <p className="p-4 m-4 font-roboto-mono text-lg lg:text-xl mb-4 text-gray-700 dark:text-gray-300">Your premier choice for professional pet care in Seattle, Washington!</p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <a href="#services" className="btn btn-primary bg-[#40bfe0] dark:bg-white dark:text-gray-900 text-white px-4 py-2 rounded">Explore Our Services</a>
//             <Link to="/booking-form" className="btn btn-primary bg-[#40bfe0] dark:bg-white dark:text-gray-900 text-white px-4 py-2 rounded">Book Now</Link>
//           </div>
//         </div>
//       </section>
//       <hr />
//       <section className="xs:mt-36 sm:mt-36 sm:justify-center xs:mb-24 sm:mb-24 sm:items-center md:justify-center md:items-center lg:justify-center lg:items-center bg-white dark:bg-gray-900 py-8 sm:flex sm:flex-col lg:flex lg:flex-row-reverse md:flex md:flex-row h-[100vh]">
//         <div className="mt-10 lg:mt-0">
//           <img src={Imagesix} alt="Pamela’s Pampered Pets" className="sm:w-4/6 sm:mx-auto w-full lg:w-5/6 lg:mx-auto" />
//         </div>
//         <div className="text-center lg:text-left">
//           <h1 className="sm:text-5xl font-roboto-mono text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">Ready to Give Your Pet the Best Care?</h1>
//           <p className="p-4 m-4 font-roboto-mono text-lg lg:text-xl mb-2 text-gray-700 dark:text-gray-300">My goal is to provide convenient and trustworthy pet care service, fostering a community that values pets.</p>
//           <p className="p-4 m-4 font-roboto-mono text-lg lg:text-xl mb-4 text-gray-700 dark:text-gray-300">Your premier choice for professional pet care in Seattle, Washington!</p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <Link to="/contact" className="btn btn-primary bg-[#40bfe0] text-white px-4 py-2 rounded">Contact Me</Link>
//             <Link to="/booking-form" className="btn btn-primary bg-[#40bfe0] text-white px-4 py-2 rounded">Book Now</Link>
//           </div>
//         </div>
//       </section>
//       <hr />
//       <section id="services" className="py-8">
//         <div className="text-center sm:mt-20 md:mt-0 xs:mt-64 mb-8">
//           <header className="sm:text-5xl font-roboto-mono sm:text-center p-4 m-4 text-4xl md:text-5xl md:font-extrabold lg:font-extrabold lg:text-5xl font-bold lg:mt-14 text-gray-900 dark:text-gray-100">My Services</header>
//         </div>
//         <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map(service => (
//             <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded" key={service.id}>
//               <img src={service.image} alt={service.title} className="sm:w-[40%] sm:rounded-full sm:mx-auto w-full mb-4" />
//               <h3 className="sm:text-3xl font-roboto-mono text-2xl lg:text-3xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{service.title}</h3>
//               <p className="font-roboto-mono sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="py-8 dark:bg-gray-900" id="about">
//         <div className="flex flex-col-reverse lg:flex-row md:flex-col-reverse mb-8">
//           <div className="lg:w-1/2 lg:mt-4 lg:mr-8">
//             <header className="sm:text-4xl sm:text-center md:text-5xl md:font-extrabold lg:font-extrabold p-4 m-4 text-4xl font-bold mb-4 md:text-center text-gray-900 dark:text-gray-100">Who is Pamela?</header>
//             <p className="font-roboto-mono p-4 sm:text-lg m-4 lg:text-xl mb-4 text-gray-700 dark:text-gray-300">Hi, I'm Pam, the owner of Pamela's Pampered Pets, your premier choice for professional pet care in Seattle, Washington! With over 20 years in the pet care industry, I've built a trusted business serving pet owners across Seattle and Washington state. I know your pets are family, so I offer personalized care to meet their unique needs.</p>
//             <p className="font-roboto-mono p-4 m-4 sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300">As a licensed, insured, CPR, and First Aid certified professional, I prioritize your pet's safety above all. From daily walks to overnight stays, I treat each pet with love and care, ensuring they feel comfortable and happy while you're away. For pet sitting, overnight care, or special needs services in Seattle, choose Pamela's Pampered Pets. Book a spot for your furry friend today!</p>
//           </div>
//           <div className="md:mx-auto md:w-2/6 lg:w-1/2 mt-8 lg:mt-0">
//             <img src={headshottwo} alt="Pamela Marbett" className="xs:mx-auto xs:w-full sm:w-3/6 sm:mx-auto w-4/6 h-6/6 sm:rounded-full lg:rounded-lg md:rounded:lg lg:mx-auto" />
//           </div>
//         </div>

//         <div className="flex flex-col mb-8 lg:flex-row md:flex-row">
//           <div className="md:w-1/2 lg:w-1/2 mt-8 lg:mt-4">
//             <img src={Image3} alt="Our Approach" className="xs:w-full sm:w-3/6 sm:mx-auto w-4/6 h-6/6 sm:rounded-full lg:rounded-lg md:rounded-lg lg:mx-auto" />
//           </div>
//           <div className="lg:w-1/2 lg:mt-4 lg:ml-8">
//             <header className="sm:text-4xl sm:text-center md:text-5xl md:font-extrabold lg:font-extrabold p-4 m-4 text-4xl font-bold mb-4 md:text-center text-gray-900 dark:text-gray-100">Our Approach</header>
//             <p className="font-roboto-mono p-4 sm:text-lg m-4 lg:text-xl mb-4 text-gray-700 dark:text-gray-300">We believe in personalized care tailored to your pet's needs. Our experienced team provides a range of services to ensure your pet is happy and healthy, including dog walking, pet sitting, and more. Trust us to take care of your furry family members!</p>
//           </div>
//         </div>
//       </section>

//       <section className="py-8">
//         <div className="text-center mb-8">
//           <header className="sm:text-5xl font-roboto-mono sm:text-center p-4 m-4 text-4xl md:text-5xl md:font-extrabold lg:font-extrabold lg:text-5xl font-bold text-gray-900 dark:text-gray-100">Testimonials</header>
//         </div>
//         <Slider {...sliderSettings}>
//           {testimonials.map(testimonial => (
//             <div key={testimonial.id}>
//               <p className="text-center text-lg font-roboto-mono text-gray-700 dark:text-gray-300">{testimonial.text}</p>
//               <p className="text-center text-lg font-roboto-mono font-bold text-gray-900 dark:text-gray-100 mt-2">{testimonial.author}</p>
//             </div>
//           ))}
//         </Slider>
//       </section>
//       <section className="relative py-8">
//      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center blur-md opacity-50" style={{ backgroundImage: "url('/images/aboutimage.png')" }}></div>
//      <header className="sm:text-4xl md:text-5xl md:font-extrabold lg:font-extrabold relative z-10  text-center mb-8 text-4xl font-bold text-gray-900 dark:text-gray-100">
//        What Others Are Saying About Pamela
//      </header>
//      <Slider {...sliderSettings} className="relative z-10">
//        {testimonials.map(testimonial => (
//         <div key={testimonial.id} className=" mx-auto  w-4/5 sm:w-3/5 lg:w-2/5 bg-black bg-opacity-70 p-8 rounded-lg text-center italic">
//           <img src={testimonial.image} alt={testimonial.author} className="testimonial-image mx-auto mb-4 rounded-full w-24 h-24 object-cover" />
//           <blockquote className=" mb-4 text-gray-100">
//             <p className="lg:text-xl sm:text-lg font-roboto-mono text-lg">"{testimonial.quote}"</p>
//             <footer className="text-lg font-semibold text-gray-200">— {testimonial.author}</footer>
//           </blockquote>
//         </div>
//       ))}
//     </Slider>
//   </section>
//     </div>
//   );
// };

// export default LandingPage;

