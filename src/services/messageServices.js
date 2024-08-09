import axios from "axios";

// const baseUrl = 'https://pamelas-pampered-pets-website-backend.onrender.com/bookings';
const messageUrl = 'http://localhost:3001/message'
const create = async (newMessageObject) => {
    try {
        const response = await axios.post(messageUrl, newMessageObject);
        console.log("reponse:", response.data);
        console.log('Message Sent successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        console.error('Error in messageServices create method:', error);
        throw error; // Re-throwing the error to handle it in the component
    }
}

const getAll = async () => {
    try {
        const response = await axios.get(messageUrl);
       
        return response.data
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const remove = async (id) => {
    console.log(id)
    try {
        const response = await axios.delete(`${messageUrl}/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default { create, getAll, remove };
