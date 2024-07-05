import React from 'react';
import servicestwo from '/images/servicestwo.png';

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="md:w-1/2 w-full mt-20 p-4">
        <img
          src={servicestwo}
          alt="Contact"
          className="w-2/5 mx-auto rounded-full mt-10 h-auto object-cover animate-spin-3d"
        />

        <section className="mt-10 text-center">
          <h2 className="text-2xl font-bold mb-4">My Contact Details</h2>
          <p className="text-lg mb-2"><strong>Phone:</strong> (206) 383-7255</p>
          <p className="text-lg mb-2"><strong>Email:</strong> hellopamela@icloud.com</p>
          <p className="text-lg"><strong>Address:</strong> Seattle, WA</p>
        </section>
      </div>
      
      <div className="md:w-1/2 w-full p-4 mt-2">
        <h2 className="text-2xl font-bold mb-4 text-center">Get in Touch</h2>
        <p className="text-center mb-6">Feel free to reach out to me with any questions or concerns.</p>
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
            className="bg-[#40bfe0]  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
