import api from '../services/landingpageservices';
import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const MyServices = () => {
    const services = [
  {
    "title": "Pet Sitting & Overnight Care",
    "description": "Whether you're away for the day or the week, you can trust that your furry friend will receive the best care possible.",
    "image": "/images/aboutimage.png",
    "id": "9d19"
  },
  {
    "title": "Special Needs Pet Care",
    "description": "I have extensive experience in caring for pets with special needs, including senior animals, reactive dogs, and those with separation anxiety.",
    "image": "/images/Image24.svg",
    "id": "023b"
  },
  {
    "title": "Intensive Care for Sick or Injured Pets in Seattle",
    "description": "I provide attentive and compassionate care for pets requiring medications, fluids, or intensive monitoring.",
    "image": "/images/Image20.svg",
    "id": "7a46"
  },
  {
    "title": "Dog Walking and Exercise",
    "description": "Ensuring your pet gets the physical activity and stimulation they need to stay healthy and happy.",
    "image": "/images/Image11.svg",
    "id": "3b50"
  },
  {
    "title": "Unlimited Love & Attention",
    "description": "Above all, I ensure that every pet I care for receives abundant love and attention.",
    "image": "/images/Image7.svg",
    "id": "d502"
  }
];

const testimonials = [
  {
    "quote": "We adopted our dear Winston in September 2020. We met Pam Marbett in May 2021 and wish we had done so sooner. Pam is a dog parent’s dream. She dog sat, house sat, and walked Winston for much of 2021. Pam also cared for my parent’s 13-year-old dog during our family vacations. She was incredibly attentive, loving, and professional with both dogs. Pam's rapport with the pets was amazing.",
    "author": "Melissa B",
    "image": "/images/aboutimage.png",
    "id": "a0ce1"
  },
  {
    "quote":"Pam has cared for our large mixed breed dog on several occasions, and we couldn’t be happier or trust her more. She is very empathetic and fully commits to her role in keeping our pup safe and happy while his humans are away. In fact, on her last visit, I had to ask just what she had been doing daily, because our typically very anxious and reactive dog was the most relaxed we’d ever seen him! Pam is an expert communicator and works hard to ensure our instructions are followed to the letter. You and your pets will be lucky to work with her!",
    "author": "Susan",
    "image": "/images/aboutimage.png",
    "id": "aec01"
  },
  {
    "quote": "Pam was punctual, flexible, reliable, communicative, and fully focused on our dogs. Since moving abroad, we dearly miss Pam’s expert care and highly recommend her. We often talk about how much we miss her and her care for Winston. Pam frequently drove Winston from West Seattle to his favorite off-leash park in Marymoor, spoiling him with specialty treats. She also helped with vet appointments as part of moving Winston internationally. Pam went above and beyond, and we cannot recommend her highly enough!",
    "author": "Melissa B",
    "image": "/images/aboutimage.png",
    "id": "a0ce2"
  },
  {
    "quote": "Pam is the Mary Poppins of dog sitting! She loves on what she does and takes caring for my dogs very seriously. I don’t think they miss me at all when I’m gone. It is so comforting to know they are being cared for by Pam and I can’t say how much I appreciate her!",
    "author": "Anonymous",
    "image": "/images/aboutimage.png",
    "id": "e9cf"
  },
  {
    "quote": "Pam recently looked after our 2 dogs (including one very elderly dog) and our blue crowned conure. Communication was excellent at all stages. She sent frequent updates, took our young dog on many outings and spoiled them rotten. Our plants were all alive and thriving when we got home and our house was spotless. Cannot recommend Pam highly enough!",
    "author": "Anonymous",
    "image": "/images/aboutimage.png",
    "id": "a729"
  }
];

  //   useEffect(() => {
  //   api.getServices()
  //     .then(fetchedServices => {
  //       setServices(fetchedServices);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching services:', error);
  //     });

  //   api.getTestimonials()
  //     .then(fetchedTestimonials => {
  //       setTestimonials(fetchedTestimonials);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching testimonials:', error);
  //     });
  // }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const  truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
}
  return (
    <>
   


  <section className="hero bg-cover bg-center h-96" style={{ backgroundImage: "url('src/assets/image/servicesheader.png')" }}>
  <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold sm:text-5xl">My Services</h1>
      <p className="mt-4 text-lg">Providing the best care for your furry friends</p>
    </div>
  </div>
</section>



<section className="py-16 lg:bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center md:text-5xl sm:text-5xl lg:text-6xl">Services</h2>
    
    <div className="space-y-8">
      <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div className="service-category sm:bg-[#f0f8ff] shadow-lg p-8 bg-gray-100 dark:bg-gray-700  rounded" key={service.id}>
            <img
              src={service.image}
              alt={service.title}
              className="sm:w-[40%] sm:rounded-full sm:mx-auto w-full mb-4"
            />
            <h3 className="sm:text-3xl font-roboto-mono text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {service.title}
            </h3>
            <p className="font-roboto-mono sm:text-lg lg:text-xl mb-4 text-gray-700 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>

    
  </div>
</section>



<section className="relative py-8">
  <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center blur-md opacity-50" style={{ backgroundImage: "url('/images/aboutimage.png')" }}></div>
  <header className="text-3xl font-bold relative z-10 text-center mb-8 sm:text-5xl md:text-5xl lg:text-6xl text-gray-900 dark:text-gray-100">
    What Others Are Saying About Pamela
  </header>
  <Slider {...sliderSettings} className="relative z-10 mx-auto max-w-7xl">
    {testimonials.map(testimonial => (
      <div key={testimonial.id} className="mx-auto w-full sm:w-4/5 lg:w-3/5 bg-black bg-opacity-70 p-8 rounded-lg text-center italic">
        <img src={testimonial.image} alt={testimonial.author} className="mx-auto mb-4 rounded-full w-24 h-24 object-cover" />
        <blockquote className="mb-4 text-gray-100">
          <p className="lg:text-xl sm:text-lg font-roboto-mono text-lg">{testimonial.quote}</p>
          <footer className="text-lg font-semibold text-gray-200">— {testimonial.author}</footer>
        </blockquote>
      </div>
    ))}
  </Slider>
</section>

<section className="py-16 bg-white lg:bg-[#f0f8ff] sm:bg-white ">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center md:text-5xl sm:text-5xl lg:text-6xl">Why Choose Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-[#f0f8ff] lg:bg-white sm:bg-[#f0f8ff]  p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Experienced Professionals</h3>
        <p className="text-gray-700">With over 20 years of experience, our team is equipped to handle any situation with your pet.</p>
      </div>
      <div className="bg-[#f0f8ff] lg:bg-white sm:bg-[#f0f8ff]  p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Personalized Care</h3>
        <p className="text-gray-700">We offer tailored services to meet the unique needs of your pet, ensuring they receive the best care possible.</p>
      </div>
    </div>
  </div>
</section>

{/* <section className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Packages and Pricing</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="package p-8 bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Basic Package</h3>
        <p className="text-gray-700 mb-4">Includes daily walks and pet sitting for one week.</p>
        <p className="text-gray-700 font-semibold">Price: $150</p>
      </div>
      <div className="package p-8 bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Premium Package</h3>
        <p className="text-gray-700 mb-4">Includes daily walks, grooming, and overnight pet sitting for one week.</p>
        <p className="text-gray-700 font-semibold">Price: $300</p>
      </div>
    </div>
  </div>
</section> */}

<section className="py-16  bg-[#f0f8ff] lg:bg-white sm:bg-[#f0f8ff] ">
  <div className="container mx-auto px-4 bg-[#f0f8ff] lg:bg-white sm:bg-[#f0f8ff] ">
    <h2 className="text-3xl font-bold mb-8 text-center md:text-5xl sm:text-5xl lg:text-6xl">Frequently Asked Questions</h2>
    <div className="space-y-8 ">
      <div className="faq p-8 bg-white  sm:bg-white lg:bg-[#f0f8ff]  rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">How do I book a service?</h3>
        <p className="text-gray-700">You can book a service by contacting us directly through our website or by phone. We also offer online booking forms for your convenience.</p>
      </div>
      <div className="faq p-8 bg-white  sm:bg-white lg:bg-[#f0f8ff] rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">What is your cancellation policy?</h3>
        <p className="text-gray-700">We require a 24-hour notice for cancellations. If you cancel within 24 hours of the scheduled service, a cancellation fee may apply.</p>
      </div>
    </div>
  </div>
</section>

<section className="py-16 bg-white  sm:bg-white lg:bg-[#f0f8ff]">
  <div className="container mx-auto px-4 text-center lg:bg-white sm:bg-[#f0f8ff]">
    <h2 className="text-3xl font-bold mb-8 md:text-5xl sm:text-5xl lg:text-6xl">Contact Us</h2>
    <p className="text-gray-700 mb-4">Have questions or ready to book? Get in touch with us!</p>
    <button className="btn btn-primary bg-[#40bfe0] lg:text-lg lg:py-3 lg:px-6 xl:text-xl xl:py-4 xl:px-8 2xl:text-2xl 2xl:py-5 2xl:px-10 dark:bg-white text-gray-900  px-4 font-[600] py-2 lg:rounded-lg md:rounded-md sm:rounded-sm xl:rounded-xl xs:rounded-xs">Contact Us</button>
  </div>
</section>

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