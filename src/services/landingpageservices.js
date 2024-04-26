import axios from 'axios';

const baseUrl = 'https://pamelas-pampered-pets-website-backend.onrender.com/';

const getServices = async () => {
  try {
    const response = await axios.get(`${baseUrl}/services`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getTestimonials = async () => {
  try {
    const response = await axios.get(`${baseUrl}/testimonials`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
  const getStyles = async () => {
  try {
    const response = await axios.get(`${baseUrl}/styles`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};



export default { getServices, getTestimonials, getStyles };
