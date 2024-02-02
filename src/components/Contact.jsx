import React from 'react';
import servicestwo from '/images/servicestwo.png';
import headshottwo from '/images/headshottwo.png';
const ContactPage = () => {
  return (<>
  <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 bg-[#f0f8ff]">
  {/* Contact Information Section */}
  <div className="w-full md:w-1/2 mt-20 p-4 flex flex-col items-center">
    <div className="md:mx-auto md:w-3/6 lg:w-1/2 mt-8 lg:mt-0 ">
        <img src={headshottwo} alt="Pamela Marbett" className="xs:mx-auto xs:w-1/2 sm:w-1/2 sm:mx-auto w-4/6 h-6/6 sm:rounded-full lg:rounded-lg md:rounded:lg lg:mx-auto" />
    </div>
    <section className="mt-10 text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">My Contact Details</h2>
      <p className="text-lg md:text-xl mb-2"><strong>Phone:</strong> (206) 383-7255</p>
      <p className="text-lg md:text-xl mb-2"><strong>Email:</strong> hellopamela@icloud.com</p>
      <p className="text-lg md:text-xl mb-4"><strong>Address:</strong> Seattle, WA</p>
      <p className="text-lg md:text-xl mb-2"><strong>Business Hours:</strong></p>
      <p className="text-lg md:text-xl mb-2">Mon-Fri: 9:00 AM - 6:00 PM</p>
      <p className="text-lg md:text-xl mb-2">Sat-Sun: 10:00 AM - 4:00 PM</p>
      <div className="flex justify-center mt-4 space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
          <i className="fab fa-twitter"></i>
        </a>
         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </section>
  </div>

  {/* Contact Form Section */}
  <div className="w-full md:w-1/2 p-4 mt-2">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">Get in Touch</h2>
    <p className="text-center mb-6 text-lg md:text-xl">Feel free to reach out to me with any questions or concerns.</p>
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Your name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Your email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          placeholder="Your message"
          rows="5"
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-[#40bfe0] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</div>

{/* Map Section */}
<div className="w-full p-4 mt-8">
  <iframe
    className="w-full h-64 md:h-96 xl:h-128 rounded-lg shadow-md"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.503913278194!2d-122.33516738436977!3d47.60801397918412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102e9b6c8e0b%3A0x8b9e07c8e4efea5a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1621320123456!5m2!1sen!2sus"
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>


 

  
  </>
    // <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 bg-gray-100">
    //   <div className="md:w-1/2 w-full mt-20 p-4">
    //     <img
    //       src={servicestwo}
    //       alt="Contact"
    //       className="w-2/5 mx-auto rounded-full mt-10 h-auto object-cover animate-spin-3d"
    //     />

    //     <section className="mt-10 text-center">
    //       <h2 className="text-2xl font-bold mb-4">My Contact Details</h2>
    //       <p className="text-lg mb-2"><strong>Phone:</strong> (206) 383-7255</p>
    //       <p className="text-lg mb-2"><strong>Email:</strong> hellopamela@icloud.com</p>
    //       <p className="text-lg"><strong>Address:</strong> Seattle, WA</p>
    //     </section>
    //   </div>
      
    //   <div className="md:w-1/2 w-full p-4 mt-2">
    //     <h2 className="text-2xl font-bold mb-4 text-center">Get in Touch</h2>
    //     <p className="text-center mb-6">Feel free to reach out to me with any questions or concerns.</p>
    //     <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    //       <div className="mb-4">
    //         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
    //           Name
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           id="name"
    //           type="text"
    //           placeholder="Your name"
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
    //           Email
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           id="email"
    //           type="email"
    //           placeholder="Your email"
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
    //           Message
    //         </label>
    //         <textarea
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           id="message"
    //           placeholder="Your message"
    //           rows="5"
    //         ></textarea>
    //       </div>
          
    //       <div className="flex items-center justify-between">
    //         <button
    //         className="bg-[#40bfe0]  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //           type="button"
    //         >
    //           Send
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
};

export default ContactPage;
