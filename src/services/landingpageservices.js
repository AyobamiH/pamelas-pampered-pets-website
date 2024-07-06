// import axios from 'axios';

// const baseUrl = 'https://pamelas-pampered-pets-website-backend.onrender.com/';

// const getServices = async () => {
//   try {
//     const response = await axios.get(`${baseUrl}/services`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// const getTestimonials = async () => {
//   try {
//     const response = await axios.get(`${baseUrl}/testimonials`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }
//   const getStyles = async () => {
//   try {
//     const response = await axios.get(`${baseUrl}/styles`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };



// export default { getServices, getTestimonials, getStyles };


import axios from 'axios';

const primaryBaseUrl = 'https://pamelas-pampered-pets-website-1.onrender.com';
const secondaryBaseUrl = 'https://pamelas-pampered-pets-website-backend.onrender.com'; // Replace with your actual secondary URL

const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${primaryBaseUrl}${endpoint}`);
    return response.data;
  } catch (primaryError) {
    console.error(`Primary URL failed: ${primaryError.message}`);
    console.log(`Switching to secondary URL...`);
    try {
      const response = await axios.get(`${secondaryBaseUrl}${endpoint}`);
      return response.data;
    } catch (secondaryError) {
      console.error(`Secondary URL also failed: ${secondaryError.message}`);
      throw secondaryError; // Re-throw the error to propagate it
    }
  }
};

const getServices = () => fetchData('/services');
const getTestimonials = () => fetchData('/testimonials');
const getStyles = () => fetchData('/styles');

export default { getServices, getTestimonials, getStyles };
