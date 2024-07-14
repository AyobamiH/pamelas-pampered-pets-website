import React from "react"


import Slider from 'react-slick';
import aboutimage1 from '/images/aboutimage1.svg'

import Image3 from '../assets/image/Image3.svg'
import Image2 from '../assets/image/Image2.svg'
import Image22 from '/images/Image22.svg'




import headshottwo from '/images/headshottwo.png'
import api from '../services/landingpageservices';

const About = () => {
  const testimonials = [
  {
    "quote": "We adopted our dear Winston in September 2020. We met Pam Marbett in May 2021 and wish we had done so sooner. Pam is a dog parent’s dream. She dog sat, house sat, and walked Winston for much of 2021. Pam also cared for my parent’s 13-year-old dog during our family vacations. She was incredibly attentive, loving, and professional with both dogs. Pam's rapport with the pets was amazing.",
    "author": "Melissa B",
    "image": "/images/aboutimage.png",
    "id": "a0ce1"
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
    "quote":"Pam has cared for our large mixed breed dog on several occasions, and we couldn’t be happier or trust her more. She is very empathetic and fully commits to her role in keeping our pup safe and happy while his humans are away. In fact, on her last visit, I had to ask just what she had been doing daily, because our typically very anxious and reactive dog was the most relaxed we’d ever seen him! Pam is an expert communicator and works hard to ensure our instructions are followed to the letter. You and your pets will be lucky to work with her!",
    "author": "Susan",
    "image": "/images/aboutimage.png",
    "id": "aec01"
  },
  {
    "quote": "Pam recently looked after our 2 dogs (including one very elderly dog) and our blue crowned conure. Communication was excellent at all stages. She sent frequent updates, took our young dog on many outings and spoiled them rotten. Our plants were all alive and thriving when we got home and our house was spotless. Cannot recommend Pam highly enough!",
    "author": "Anonymous",
    "image": "/images/aboutimage.png",
    "id": "a729"
  }
];
        
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
  <section id="about" className="py-8 md:bg-[#f0f8ff]">
    <div className="flex flex-col-reverse lg:flex-col-reverse lg:items-center md:flex-col-reverse mb-8">
      <div className="lg:w-5/6 lg:mt-4 lg:mr-8">
        <header className="sm:text-4xl sm:text-center xs:p-4 xs:mx-auto md:text-5xl md:font-extrabold lg:font-extrabold p-4 m-4 text-4xl font-bold mb-4 md:text-center text-gray-900">Who is Pamela?</header>
        <p className="font-roboto-mono p-4 sm:text-lg m-4 lg:text-xl mb-4 text-gray-700">Hi, I'm Pam, the owner of Pamela's Pampered Pets, your premier choice for professional pet care in Seattle, Washington! With over 20 years in the pet care industry, I've built a trusted business serving pet owners across Seattle and Washington state. I know your pets are family, so I offer personalized care to meet their unique needs.</p>
        <p className="font-roboto-mono p-4 m-4 sm:text-lg lg:text-xl text-gray-700">As a licensed, insured, CPR, and First Aid certified professional, I prioritize your pet's safety above all. From daily walks to overnight stays, I treat each pet with love and care, ensuring they feel comfortable and happy while you're away. For pet sitting, overnight care, or special needs services in Seattle, choose Pamela's Pampered Pets. Book a spot for your furry friend today!</p>
      </div>
      <div className="md:mx-auto md:w-3/6 lg:w-1/2 mt-8 lg:mt-0 sm:bg-[#f0f8ff] xs:bg-[#f0f8ff]">
        <img src={headshottwo} alt="Pamela Marbett" className="xs:mx-auto xs:w-1/2 sm:w-1/2 sm:mx-auto w-4/6 h-6/6 sm:rounded-full lg:rounded-lg md:rounded:lg lg:mx-auto" />
      </div>
    </div>
    <hr />
    <div className="flex flex-col lg:flex-col lg:flex-wrap mt-4 lg:items-center">
      <div className="lg:w-1/2 md:w-full lg:mr-8">
        <img src={Image3} alt="My Approach" className="xs:w-1/2 h-auto rounded-md lg:mb-4 mx-auto lg:mx-auto" />
      </div>
      <div className="lg:w-5/6 md:w-full">
        <header className="sm:text-4xl sm:text-center xs:text-center md:text-5xl md:font-extrabold lg:font-extrabold p-4 m-4 md:text-center md:mt-4 text-4xl font-bold mb-4 text-gray-900">My Approach</header>
        <p className="p-4 m-4 font-roboto-mono sm:text-lg md:text-xl lg:text-xl mb-4 text-gray-700">I believe in meeting each animal with a calm, gentle, and loving demeanor. With years of experience, I connect with pets on their level, ensuring they feel safe and comfortable. My expertise spans from caring for healthy animals to those near the end of their lives, allowing me to handle any situation with excellent troubleshooting skills and keen insight into your pet's well-being.</p>
        <p className="p-4 m-4 font-roboto-mono sm:text-lg md:text-xl lg:text-xl text-gray-700">I am committed to going above and beyond in my care. Whether it's taking dogs to the park or treating them to special ice cream with biscuits, I strive to create unique and enjoyable experiences for each pet. Always thinking of new and creative ways to pamper your pet, I aim to make them feel special and give them a vacation of their own when possible. Your pet's happiness and well-being are my top priorities.</p>
      </div>
    </div>
    <hr />
    <div className="flex flex-col lg:flex-col lg:flex-wrap mt-4 lg:items-center lg:h-auto">
      <div className="lg:w-1/2 md:w-full">
        <img src={Image2} alt="My Process" className="lg:mx-auto xs:w-1/2 h-auto rounded-md lg:mb-4 mx-auto" />
      </div>
      <div className="lg:w-5/6 md:w-full">
        <header className="sm:text-4xl xs:text-center sm:text-center md:text-5xl md:font-extrabold lg:font-extrabold p-4 m-4 text-4xl font-bold mb-4 text-gray-900">My Process</header>
        <p className="font-roboto-mono p-4 m-4 sm:text-lg md:text-xl lg:text-xl mb-4 text-gray-700">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.</p>
        <p className="font-roboto-mono p-4 m-4 sm:text-lg md:text-xl lg:text-xl text-gray-700">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.</p>
      </div>
    </div>
    <hr />
  </section>

<section className="relative py-8">
  <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center blur-md opacity-50" style={{ backgroundImage: "url('/images/aboutimage.png')" }}></div>
  <header className="text-4xl font-bold relative z-10 text-center mb-8 sm:text-5xl md:text-5xl lg:text-6xl text-gray-900 dark:text-gray-100">
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

<section className="blog py-8">
  <div className="section-title text-center mb-8">
    <header className="hero-title about-title text-4xl font-bold text-gray-900 dark:text-gray-100">Pet Care Blog</header>
  </div>
  <div className="blog-posts flex flex-wrap justify-center gap-8 sm:gap-12">
    <div className="image-overlay w-full sm:w-1/2 lg:w-1/3">
      <img src={Image22} alt="Pet Health" className="w-full h-auto rounded-md" />
      <div className="p-4 bg-white">
        <h4 className="blog-title text-lg font-bold mb-2">How to keep your pet healthy and happy</h4>
        <p className="text-sm text-gray-700">Expert advice from pet care</p>
        <button className="discover-more bg-blue-500 text-white py-2 px-4 rounded-lg mt-2 hover:bg-blue-600 transition duration-300">DISCOVER MORE</button>
      </div>
    </div>
    <div className="image-overlay w-full sm:w-1/2 lg:w-1/3">
      <img src={aboutimage1} alt="Budget" className="w-full h-auto rounded-md" />
      <div className="p-4 bg-white">
        <h4 className="blog-title text-lg font-bold mb-2">Tips for managing your pet's budget</h4>
        <p className="text-sm text-gray-700">Budgeting tips for pet owners</p>
        <button className="explore-more bg-blue-500 text-white py-2 px-4 rounded-lg mt-2 hover:bg-blue-600 transition duration-300">EXPLORE MORE</button>
      </div>
    </div>
    <div className="image-overlay w-full sm:w-1/2 lg:w-1/3">
      <img src={aboutimage1} alt="Budget" className="w-full h-auto rounded-md" />
      <div className="p-4 bg-white">
        <h4 className="blog-title text-lg font-bold mb-2">Tips for managing your pet's budget</h4>
        <p className="text-sm text-gray-700">Budgeting tips for pet owners</p>
        <button className="explore-more bg-blue-500 text-white py-2 px-4 rounded-lg mt-2 hover:bg-blue-600 transition duration-300">DISCOVER MORE</button>
      </div>
    </div>
  </div>
</section>

      
      </>

    )
}
export default About







