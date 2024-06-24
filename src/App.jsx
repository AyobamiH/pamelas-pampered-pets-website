
import React, { useState } from 'react';
import bookingService from './services/bookingService'; // Adjust the import path as necessary
import BookingForm from './components/BookingForm';
import businesscard from './assets/image/businesscard.jpg';
import BookingList from './components/BookingList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import LandingPages from './components/LandingPage';
import ContactPage from './components/Contact'; // Import ContactPage component
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';
import About from './components/About'
// import './styles/App.css'; // Import your CSS file

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
    idioSyncrasies: ''
  });

  const [newBookings, setNewBookings] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const submitNewBooking = (event) => {
    event.preventDefault();
    const bookingFormObject = { ...bookingForm };
    bookingService
      .create(bookingFormObject)
      .then((returnedBooking) => {
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
          idioSyncrasies: ''
        });
        setNewBookings((prevNewBookings) => prevNewBookings.concat(returnedBooking));
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error creating booking:', error);
      });
  };

  return (
    <Router>
      <div>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<LandingPages />} /> {/* Landing page route */}
          <Route
            path="/booking-form"
            element={<>
              {submitted ? <ThankYou setSubmitted={setSubmitted}/> : <BookingForm src={businesscard} formData={bookingForm} onChange={handleChange} onSubmit={submitNewBooking} />}
            </>}
          />
          <Route
            path="/about"
            element={<About/>}
          
          />

        
          <Route path="/bookings" element={<BookingList />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
