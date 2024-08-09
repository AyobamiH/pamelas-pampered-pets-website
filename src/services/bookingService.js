import axios from "axios";

const baseUrl = 'https://pamelas-pampered-pets-website-backend.onrender.com/bookings';

const create = async (newObject) => {
    try {
        const response = await axios.post(baseUrl, newObject);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; // Re-throwing the error to handle it in the component
    }
}

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl);
        const nonExisting = {
            customerName: '',
            email: '',
            petName: '',
            petsAge: '',
            dailyRoutine: '',
            cellPhone: '',
            homePhone: '',
            homeAddress: '',
            emergencyContactNumber: '',
            startDateandTime: '',
            endDateandTime: '',
            workPhone: '',
            petsHealth: '',
            favoriteThings: '',
            vetPermission: '',
            additionalNotes: '',
            idioSyncrasies: ''
        };
        return response.data.concat(nonExisting);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const remove = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default { create, getAll, remove };
