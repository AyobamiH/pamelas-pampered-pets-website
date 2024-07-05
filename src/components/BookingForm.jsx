import React, { useState, useEffect } from 'react';

const BookingForm = ({ src, onChange, formData, onSubmit }) => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    setStep(1);
  }, []);

  const handleNext = () => {
    if (step === 3) {
      onSubmit();
      setStep(4);
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="max-w-2xl mx-auto my-8 p-4 bg-white rounded-lg shadow-md">
      <img src={src} alt="Pampered Pets" className="mt-10 mb-10 animate-spin-3d rounded-full w-36 h-36 mx-auto " />
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 relative">
        <div className="absolute flex justify-between w-full -top-2 px-2">
          {['Customer Information', 'Pet Information', 'Sitting Information', 'Thank You'].map((label, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`h-6 w-6 rounded-full flex items-center justify-center ${
                  step > index ? 'bg-[#40bfe0] text-white' : 'bg-gray-300 text-gray-600'
                }`}
              >
                {step > index ? '✔' : index + 1}
              </div>
              <span className="mt-1 text-xs text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>
      {step === 4 ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Thank You!</h2>
          <p className="mt-2">Your submission has been received.</p>
        </div>
      ) : (
        <form onSubmit={step === 3 ? onSubmit : (e) => e.preventDefault()} className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Customer Information</h2>
              {[
                { label: 'Customer Name', name: 'customerName', type: 'text' },
                { label: 'Email', name: 'email', type: 'email' },
                { label: 'Cell Phone', name: 'cellPhone', type: 'tel' },
                { label: 'Home Phone', name: 'homePhone', type: 'tel' },
                { label: 'Home Address', name: 'homeAddress', type: 'text' },
                { label: 'Emergency Contact Phone Number', name: 'emergencyContactNumber', type: 'tel' },
                { label: 'Work Phone', name: 'workPhone', type: 'tel' },
              ].map(({ label, name, type }) => (
                <div key={name}>
                  <label className="block text-gray-700" htmlFor={name}>{label}</label>
                  <input
                    id={name}
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={onChange}
                    className="w-full mt-1 p-2 border rounded"
                    required
                  />
                </div>
              ))}
              <div className="flex justify-end">
                <button type="button" onClick={handleNext} className="bg-[#40bfe0] text-white py-2 px-4 rounded">
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Pet Information</h2>
              {[
                { label: "Pet's Name", name: 'petsName', type: 'text' },
                { label: "Pet's Age", name: 'petsAge', type: 'number' },
                { label: 'Daily Routine', name: 'dailyRoutine', type: 'textarea' },
                { label: 'Health Information', name: 'petsHealth', type: 'textarea' },
                { label: 'Favorite Things', name: 'favoriteThings', type: 'textarea' },
                { label: 'Idiosyncrasies', name: 'idioSyncrasies', type: 'textarea' },
                { label: 'Permission to take to vet?', name: 'vetPermission', type: 'textarea' },
              ].map(({ label, name, type }) => (
                <div key={name}>
                  <label className="block text-gray-700" htmlFor={name}>{label}</label>
                  {type === 'textarea' ? (
                    <textarea
                      id={name}
                      name={name}
                      value={formData[name]}
                      onChange={onChange}
                      className="w-full mt-1 p-2 border rounded"
                      required
                    ></textarea>
                  ) : (
                    <input
                      id={name}
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={onChange}
                      className="w-full mt-1 p-2 border rounded"
                      required
                    />
                  )}
                </div>
              ))}
              <div className="flex justify-between">
                <button type="button" onClick={handleBack} className="bg-gray-500 text-white py-2 px-4 rounded">
                  Back
                </button>
                <button type="button" onClick={handleNext} className="bg-[#40bfe0] text-white py-2 px-4 rounded">
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Sitting Information</h2>
              {[
                { label: 'Start Date and Time', name: 'startDateAndTime', type: 'datetime-local' },
                { label: 'End Date and Time', name: 'endDateAndTime', type: 'datetime-local' },
                { label: 'Special Requests', name: 'specialRequest', type: 'textarea' },
                { label: 'Alarm Information', name: 'alarmInfo', type: 'textarea' },
                { label: 'Miscellaneous Notes', name: 'miscNotes', type: 'textarea' },
                { label: 'Additional Notes', name: 'additionalNotes', type: 'textarea' },
              ].map(({ label, name, type }) => (
                <div key={name}>
                  <label className="block text-gray-700" htmlFor={name}>{label}</label>
                  {type === 'textarea' ? (
                    <textarea
                      id={name}
                      name={name}
                      value={formData[name]}
                      onChange={onChange}
                      className="w-full mt-1 p-2 border rounded"
                      required
                    ></textarea>
                  ) : (
                    <input
                      id={name}
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={onChange}
                      className="w-full mt-1 p-2 border rounded"
                      required
                    />
                  )}
                </div>
              ))}
              <div className="flex justify-between">
                <button type="button" onClick={handleBack} className="bg-gray-500 text-white py-2 px-4 rounded">
                  Back
                </button>
                <button type="submit" className="bg-[#40bfe0] text-white py-2 px-4 rounded">
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default BookingForm;
