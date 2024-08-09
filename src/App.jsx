
import React, { useState } from 'react';
import bookingService from './services/bookingService'; // Adjust the import path as necessary
import BookingForm from './components/BookingForm';
import businesscard from '/image/businesscard.jpg';
import BookingList from './components/BookingList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import LandingPages from './components/LandingPage';
import MessagesList from './components/MessagesList';


import ContactPage from './components/TheContactPage/ContactPage'
import Footer from './components/Footer';
import AboutPage from './components/petCareAbout/AboutPage'

import ServicesPage from './components/services/ServicesPage';

const App = () => {
  const [bookingForm, setBookingForm] = useState({
    customerName: '',
    email: '',
    petsName: '',
    petsAge: '',
    dailyRoutine: '',
    cellPhone: '',
    homePhone: '',
    homeAddress: '',
    emergencyContactNumber: '',
    startDateAndTime: '',
    endDateAndTime: '',
    workPhone: '',
    petsHealth: '',
    favoriteThings: '',
    vetPermission: '',
    additionalNotes: '',
    idioSyncrasies: '',
    alarmInfo: '',
    specialRequest: '',

  });

  const [newBookings, setNewBookings] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [step, setStep] = useState(1)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const submitNewBooking = async (event) => {
    event.preventDefault();
    const bookingFormObject = { ...bookingForm };

    try {
      const returnedBooking = await bookingService.create(bookingFormObject)
      setBookingForm({
          customerName: '',
          email: '',
          petsName: '',
          petsAge: '',
          dailyRoutine: '',
          cellPhone: '',
          homePhone: '',
          homeAddress: '',
          emergencyContactNumber: '',
          startDateAndTime: '',
          endDateAndTime: '',
          workPhone: '',
          petsHealth: '',
          favoriteThings: '',
          vetPermission: '',
          additionalNotes: '',
          idioSyncrasies: '',
          alarmInfo: '',
          specialRequest: '',
        });
        setNewBookings((prevNewBookings) => prevNewBookings.concat(returnedBooking));
        setErrorMessage(''); // Clear any previous error messages
        setStep(5); // Advance to confirmation step
    } catch (error) {
      console.error('Error creating booking:', error);
    setErrorMessage('Error creating booking. Please try again.'); // Set error message
    setStep(4); // Stay on the current step
    }
    
  };

  return (


    <Router>
      <div>
        <NavigationMenu />
        <Routes>
       
          <Route path="/" element={<LandingPages />} /> {/*  Landing page route */}
      
         {/*  <Route path="/" element={<HomePage />} /> Landing page route */}
          {/* <Route path="/" element={<LandingPages />} />  Landing page route */}
          <Route
            path="/booking-form"
            element={<>
               <BookingForm
                  step={step}
                  setStep={setStep}
                  src={businesscard}
                  formData={bookingForm}
                  onChange={handleChange}
                  onSubmit={submitNewBooking}
                  errorMessage={errorMessage}
                />
               
            </>}
          />
          <Route
            path="/about"
            element={<AboutPage/>}
     
          />
          <Route
            path='/services'
            element= {<ServicesPage/>} 

          />

        
          <Route path="/bookings" element={<BookingList />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/message" element={<MessagesList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  
  );
};

export default App;

