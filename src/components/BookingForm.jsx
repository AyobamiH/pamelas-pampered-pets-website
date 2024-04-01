import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FormField from './FormField';
import FormButton from './FormButton';
import complimentarycard from '/images/complimentarycard.gif';
import { Link } from 'react-router-dom';

const BookingForm = ({ step, setStep, formData, onChange, onSubmit, errorMessage }) => {
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const requiredFields = {
    1: ['customerName', 'email', 'homeAddress', 'emergencyContactNumber'],
    2: ['petsName', 'petsAge', 'dailyRoutine', 'petsHealth', 'favoriteThings', 'idioSyncrasies', 'vetPermission'],
    3: ['startDateAndTime', 'endDateAndTime', 'specialRequest', 'alarmInfo', 'miscNotes', 'additionalNotes'],
  };

  useEffect(() => {
    validateForm();
  }, [formData, step]);

  const validateForm = () => {
    const fields = requiredFields[step] || [];
    const isValid = fields.every(field => formData[field]);
    setIsNextDisabled(!isValid);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 4) {
      onSubmit(e);
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = name.includes('Phone') ? value.replace(/\D/g, '') : value;
    onChange({ target: { name, value: sanitizedValue } });
  };

  const renderFields = (fields) => (
    fields.map(({ label, name, type, isRequired }) => (
      <div key={name} className="flex flex-col">
        <label className="font-semibold">
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
        <FormField
          name={name}
          type={type}
          value={formData[name]}
          onChange={handleInputChange}
          isRequired={isRequired}
        />
      </div>
    ))
  );

  const customerFields = [
    { label: 'Customer Name', name: 'customerName', type: 'text', isRequired: true },
    { label: 'Email', name: 'email', type: 'email', isRequired: true },
    { label: 'Cell Phone', name: 'cellPhone', type: 'tel', isRequired: false },
    { label: 'Home Phone', name: 'homePhone', type: 'tel', isRequired: false },
    { label: 'Home Address', name: 'homeAddress', type: 'text', isRequired: true },
    { label: 'Emergency Contact Phone Number', name: 'emergencyContactNumber', type: 'tel', isRequired: true },
    { label: 'Work Phone', name: 'workPhone', type: 'tel', isRequired: false },
  ];

  const petFields = [
    { label: "Pet's Name", name: 'petsName', type: 'text', isRequired: true },
    { label: "Pet's Age", name: 'petsAge', type: 'number', isRequired: true },
    { label: 'Daily Routine', name: 'dailyRoutine', type: 'textarea', isRequired: true },
    { label: 'Health Information', name: 'petsHealth', type: 'textarea', isRequired: true },
    { label: 'Favorite Things', name: 'favoriteThings', type: 'textarea', isRequired: true },
    { label: 'Idiosyncrasies', name: 'idioSyncrasies', type: 'textarea', isRequired: true },
    { label: 'Permission to take to vet?', name: 'vetPermission', type: 'textarea', isRequired: true },
  ];

  const sittingFields = [
    { label: 'Start Date and Time', name: 'startDateAndTime', type: 'datetime-local', isRequired: true },
    { label: 'End Date and Time', name: 'endDateAndTime', type: 'datetime-local', isRequired: true },
    { label: 'Special Requests', name: 'specialRequest', type: 'textarea', isRequired: true },
    { label: 'Alarm Information', name: 'alarmInfo', type: 'textarea', isRequired: true },
    { label: 'Miscellaneous Notes', name: 'miscNotes', type: 'textarea', isRequired: true },
    { label: 'Additional Notes', name: 'additionalNotes', type: 'textarea', isRequired: true },
  ];

  return (
    <div className="max-w-2xl mx-auto my-8 p-4 bg-[#f0f8ff] rounded-lg shadow-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
      <img 
        src={complimentarycard} 
        srcSet={`${complimentarycard} 400w, ${complimentarycard} 800w, ${complimentarycard} 1200w`} 
        sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
        alt="Pampered Pets" 
        className="mt-10 rounded-full w-36 h-36 mx-auto animate-logo-spin-3d" 
      />
      
      <div className="text-center">
        <h1 className='text-2xl font-bold mt-12'>Booking Form</h1>
        <p className="mt-2"></p>
      </div>
       
      <div className="w-full bg-gray-200 rounded-full mt-8 h-2.5 mb-4 relative">
        <div className="absolute flex justify-between w-full -top-2 px-2">
          {['Customer Information', 'Pet Information', 'Sitting Information', 'Review and Confirm', 'Thank You'].map((label, index) => (
            <div key={index} className="flex flex-col items-center w-1/5">
              <div
                className={`h-6 w-6 rounded-full flex items-center justify-center ${
                  step > index ? 'bg-[#40bfe0] text-white' : 'bg-gray-300 text-gray-600'
                }`}
              >
                {step > index ? '✔' : index + 1}
              </div>
              <span className="mt-1 w-16 xs:hidden sm:inline-block text-xs text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {step === 5 ? (
        <div className="flex flex-col items-center justify-center pb-10 bg-white rounded-sm max-md:max-w-full">
          <h2 className="text-2xl font-semibold mb-4">Thank You for Your Booking!</h2>
          <p className="text-lg mb-6">Your pet sitting appointment has been confirmed.</p>
          <p className="text-md mb-4">We'll be in touch shortly with further details.</p>
          <a
            href="/"
            className="px-4 py-2 text-white bg-sky-500 rounded-lg hover:bg-sky-600 transition-colors"
          >
            Return to Home
          </a>
        </div>
      ) : (
        <form onSubmit={handleNext} className="space-y-6 ">
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold mt-20">Customer Information</h2>
              {renderFields(customerFields)}
              <div className="flex justify-end">
                <FormButton label="Next" isDisabled={isNextDisabled} onClick={handleNext} />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold mt-20">Pet Information</h2>
              {renderFields(petFields)}
              <div className="flex justify-between">
                <FormButton label="Back" onClick={handleBack} />
                <FormButton label="Next" isDisabled={isNextDisabled} onClick={handleNext} />
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold mt-20">Sitting Information</h2>
              {renderFields(sittingFields)}
              <div className="flex justify-between">
                <FormButton label="Back" onClick={handleBack} />
                <FormButton label="Next" isDisabled={isNextDisabled} onClick={handleNext} />
              </div>
            </div>
          )}
          
          {step === 4 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold mt-20">Review and Confirm</h2>
              {errorMessage && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <strong className="font-bold">Error: </strong>
                    <span className="block sm:inline">{errorMessage}</span>
                    <footer className="relative bg-[#b2dbff] flex justify-center w-full text-center text-gray-800 py-8">
      
                      <div className="container  text-center px-4">
                        <h2 className="text-2xl font-bold  mb-4">Book A Spot Now!</h2>
                        <p className="mb-4">
                          Send an email or call to book
                        </p>
                        <div className="space-y-2">
                          <p>
                            Email:{" "}
                            <a
                              href="mailto:hellopamela@icloud.com"
                              className="underline hover:text-white"
                            >
                              hellopamela@icloud.com
                            </a>
                          </p>
                          <p>
                            Phone:{" "}
                            <a href="tel:+2063837255" className="hover:text-white">
                              (206) 383-7255
                            </a>
                          </p>
                        </div>
                        <Link to="/booking-form">
                        <button className="mt-4 bg-gray-800 text-gray-200 px-6 py-2 rounded-full hover:bg-[#1e778e] transition duration-300">
                          Book Now!
                        </button>
                        </Link>
                      </div>
                    </footer>
                  </div>
                )}
              <div className="border p-4 rounded-md bg-gray-100">
                <h3 className="text-lg font-semibold mb-4">Customer Information</h3>
                <p><strong>Name:</strong> {formData.customerName}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Cell Phone:</strong> {formData.cellPhone || 'N/A'}</p>
                <p><strong>Home Phone:</strong> {formData.homePhone || 'N/A'}</p>
                <p><strong>Home Address:</strong> {formData.homeAddress}</p>
                <p><strong>Emergency Contact Phone Number:</strong> {formData.emergencyContactNumber}</p>
                <p><strong>Work Phone:</strong> {formData.workPhone || 'N/A'}</p>
                
                <h3 className="text-lg font-semibold mt-6 mb-4">Pet Information</h3>
                <p><strong>Pet's Name:</strong> {formData.petsName}</p>
                <p><strong>Pet's Age:</strong> {formData.petsAge}</p>
                <p><strong>Daily Routine:</strong> {formData.dailyRoutine}</p>
                <p><strong>Health Information:</strong> {formData.petsHealth}</p>
                <p><strong>Favorite Things:</strong> {formData.favoriteThings}</p>
                <p><strong>Idiosyncrasies:</strong> {formData.idioSyncrasies}</p>
                <p><strong>Permission to take to vet:</strong> {formData.vetPermission}</p>
                
                <h3 className="text-lg font-semibold mt-6 mb-4">Sitting Information</h3>
                <p><strong>Start Date and Time:</strong> {formData.startDateAndTime}</p>
                <p><strong>End Date and Time:</strong> {formData.endDateAndTime}</p>
                <p><strong>Special Requests:</strong> {formData.specialRequest}</p>
                <p><strong>Alarm Information:</strong> {formData.alarmInfo}</p>
                <p><strong>Miscellaneous Notes:</strong> {formData.miscNotes}</p>
                <p><strong>Additional Notes:</strong> {formData.additionalNotes}</p>
              </div>
              
              {/* {errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                  <strong className="font-bold">Error: </strong>
                  <span className="block sm:inline">{errorMessage}</span>
                </div>
              )}
               */}
              <div className="flex justify-between mt-6">
                <FormButton label="Back" onClick={handleBack} />
                <FormButton label="Submit" isDisabled={isNextDisabled} onClick={handleNext} />
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

BookingForm.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default BookingForm;



