// import React, { useState, useEffect } from 'react';

// const BookingForm = ({ src, onChange, formData, onSubmit }) => {
//   const [step, setStep] = useState(1);

//   useEffect(() => {
//     // Ensure the blue indicator is shown at the beginning
//     setStep(1);
//   }, []);

//   const handleNext = () => {
//     console.log('clicked next');
//     if (step === 3) {
//       // Submit the form
//       onSubmit();
//       // Move to thank you step
//       setStep(4);
//     } else {
//       setStep((prevStep) => prevStep + 1);
//     }
//   };

//   const handleBack = () => {
//     console.log('clicked back');
//     setStep((prevStep) => prevStep - 1);
//   };

//   return (
//     <div>
//       <img src={src} alt="Pampered Pets" className="rounded-full w-96 h-96 mx-auto" />
//       <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 relative">
//         {/* Progress bar */}
//         <div
//           className="bg-[#40bfe0] h-2.5 rounded-full"
//           style={{ width: `${(step / 4) * 100}%` }}
//         ></div>
//         {/* Indicator dots */}
//         <div className="absolute flex justify-between w-full -top-3.5 px-2">
//           {['Customer Information', 'Pet Information', 'Sitting Information', 'Thank You'].map((label, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <div
//                 className={`h-6 w-6 rounded-full flex items-center justify-center ${
//                   step > index ? 'bg-[#40bfe0] text-white' : 'bg-gray-300 text-gray-600'
//                 }`}
//               >
//                 {step > index ? '✔' : index + 1}
//               </div>
//               <span className="mt-1 text-xs text-center">{label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       {step === 4 ? (
//         <div className="text-center">
//           <h2>Thank You!</h2>
//           <p>Your submission has been received.</p>
//         </div>
//       ) : (
//         <form onSubmit={step === 3 ? onSubmit : (e) => e.preventDefault()} className="space-y-6">
//           {step === 1 && (
//             <div className="space-y-4">
//               <h2>Customer Information</h2>
//               <div>
//                 <label className="block text-gray-700" htmlFor='customerName'>Customer Name</label>
//                 <input
//                   id='customerName'
//                   type="text"
//                   name="customerName"
//                   value={formData.customerName}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='email'>Email</label>
//                 <input
//                   autoComplete='on'
//                   id='email'
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='cellPhone'>Cell Phone</label>
//                 <input
//                   id='cellPhone'
//                   type="tel"
//                   name="cellPhone"
//                   value={formData.cellPhone}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='homePhone'>Home Phone</label>
//                 <input
//                   id='homePhone'
//                   type="tel"
//                   name="homePhone"
//                   value={formData.homePhone}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='homeAddress'>Home Address</label>
//                 <input
//                   id='homeAddress'
//                   type="text"
//                   name="homeAddress"
//                   value={formData.homeAddress}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='emergencyContactNumber'>Emergency Contact Phone Number</label>
//                 <input
//                   id='emergencyContactNumber'
//                   type="tel"
//                   name="emergencyContactNumber"
//                   value={formData.emergencyContactNumber}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex justify-end">
//                 <button type="button" onClick={handleNext} className="bg-[#40bfe0] text-white py-2 px-4 rounded">
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}
//           {step === 2 && (
//             <div className="space-y-4">
//               <h2>Pet Information</h2>
//               <div>
//                 <label className="block text-gray-700" htmlFor='petsName'>Pet's Name</label>
//                 <input
//                   id='petsName'
//                   type="text"
//                   name="petsName"
//                   value={formData.petsName}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='petsAge'>Pet's Age</label>
//                 <input
//                   id='petsAge'
//                   type="number"
//                   name="petsAge"
//                   value={formData.petsAge}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='dailyRoutine'>Daily Routine Including Feeding and Treats</label>
//                 <textarea
//                   id='dailyRoutine'
//                   name="dailyRoutine"
//                   value={formData.dailyRoutine}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='petsHealth'>Pet's Health Medicines/Allergies</label>
//                 <textarea
//                   id='petsHealth'
//                   name="petsHealth"
//                   value={formData.petsHealth}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='favoriteThings'>Favorite Things/Likes/Dislikes Petting Spots</label>
//                 <textarea
//                   id='favoriteThings'
//                   name="favoriteThings"
//                   value={formData.favoriteThings}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='idioSyncrasies'>Idiosyncrasies</label>
//                 <textarea
//                   id='idioSyncrasies'
//                   name="idioSyncrasies"
//                   value={formData.idioSyncrasies}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor="vetPermission">
//                   Permission to take to vet and perform necessary tests
//                 </label>
//                 <select
//                   id="vetPermission"
//                   name="vetPermission"
//                   value={formData.vetPermission}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option value="Yes">Yes</option>
//                   <option value="No">No</option>
//                 </select>
//               </div>
//               <div className="flex justify-between">
//                 <button type="button" onClick={handleBack} className="bg-gray-500 text-white py-2 px-4 rounded">
//                   Back
//                 </button>
//                 <button type="button" onClick={handleNext} className="bg-[#40bfe0] text-white py-2 px-4 rounded">
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}
//           {step === 3 && (
//             <div className="space-y-4">
//               <h2>Sitting Details</h2>
//               <div>
//                 <label className="block text-gray-700" htmlFor='startDateAndTime'>Start Date and Time</label>
//                 <input
//                   id='startDateAndTime'
//                   type="datetime-local"
//                   name="startDateAndTime"
//                   value={formData.startDateAndTime}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='endDateAndTime'>End Date and Time</label>
//                 <input
//                   id='endDateAndTime'
//                   type="datetime-local"
//                   name="endDateAndTime"
//                   value={formData.endDateAndTime}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='specialRequest'>Special Requests</label>
//                 <textarea
//                   id='specialRequest'
//                   name="specialRequest"
//                   value={formData.specialRequest}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='alarmInfo'>Alarm Information</label>
//                 <textarea
//                   id='alarmInfo'
//                   name="alarmInfo"
//                   value={formData.alarmInfo}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='miscNotes'>Miscellaneous Notes</label>
//                 <textarea
//                   id='miscNotes'
//                   name="miscNotes"
//                   value={formData.miscNotes}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div className="flex justify-between">
//                 <button type="button" onClick={handleBack} className="bg-gray-500 text-white py-2 px-4 rounded">
//                   Back
//                 </button>
//                 <button type="submit" className="bg-[#40bfe0] text-white py-2 px-4 rounded">
//                   Submit
//                 </button>
//               </div>
//             </div>
//           )}
//         </form>
//       )}
//     </div>
//   );
// };

// export default BookingForm;

// The alternative jsx  below

// import React, { useState, useEffect } from 'react';

// const BookingForm = ({ src, onChange, formData, onSubmit }) => {
//   const [step, setStep] = useState(1);

//   useEffect(() => {
//     setStep(1);
//   }, []);

//   const handleNext = () => {
//     if (step === 3) {
//       onSubmit();
//       setStep(4);
//     } else {
//       setStep((prevStep) => prevStep + 1);
//     }
//   };

//   const handleBack = () => {
//     setStep((prevStep) => prevStep - 1);
//   };

//   return (
//     <div>
//       <img src={src} alt="Pampered Pets" className="rounded-full w-96 h-96 mx-auto" />
//       <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 relative">
//         <div
//           className="bg-[#40bfe0] h-2.5 rounded-full"
//           style={{ width: `${(step / 4) * 100}%` }}
//         ></div>
//         <div className="absolute flex justify-between w-full -top-3.5 px-2">
//           {['Customer Information', 'Pet Information', 'Sitting Information', 'Thank You'].map((label, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <div
//                 className={`h-6 w-6 rounded-full flex items-center justify-center ${
//                   step > index ? 'bg-[#40bfe0] text-white' : 'bg-gray-300 text-gray-600'
//                 }`}
//               >
//                 {step > index ? '✔' : index + 1}
//               </div>
//               <span className="mt-1 text-xs text-center">{label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       {step === 4 ? (
//         <div className="text-center">
//           <h2>Thank You!</h2>
//           <p>Your submission has been received.</p>
//         </div>
//       ) : (
//         <form onSubmit={step === 3 ? onSubmit : (e) => e.preventDefault()} className="space-y-6">
//           {step === 1 && (
//             <div className="space-y-4">
//               <h2 className=''>Customer Information</h2>
//               <div>
//                 <label className="block text-gray-700" htmlFor='customerName'>Customer Name</label>
//                 <input
//                   id='customerName'
//                   type="text"
//                   name="customerName"
//                   value={formData.customerName}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='email'>Email</label>
//                 <input
//                   autoComplete='on'
//                   id='email'
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='cellPhone'>Cell Phone</label>
//                 <input
//                   id='cellPhone'
//                   type="tel"
//                   name="cellPhone"
//                   value={formData.cellPhone}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='homePhone'>Home Phone</label>
//                 <input
//                   id='homePhone'
//                   type="tel"
//                   name="homePhone"
//                   value={formData.homePhone}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='homeAddress'>Home Address</label>
//                 <input
//                   id='homeAddress'
//                   type="text"
//                   name="homeAddress"
//                   value={formData.homeAddress}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='emergencyContactNumber'>Emergency Contact Phone Number</label>
//                 <input
//                   id='emergencyContactNumber'
//                   type="tel"
//                   name="emergencyContactNumber"
//                   value={formData.emergencyContactNumber}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex justify-end">
//                 <button type="button" onClick={handleNext} className="bg-[#40bfe0] text-white py-2 px-4 rounded">
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}
//           {step === 2 && (
//             <div className="space-y-4">
//               <h2>Pet Information</h2>
//               <div>
//                 <label className="block text-gray-700" htmlFor='petsName'>Pet's Name</label>
//                 <input
//                   id='petsName'
//                   type="text"
//                   name="petsName"
//                   value={formData.petsName}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='petsAge'>Pet's Age</label>
//                 <input
//                   id='petsAge'
//                   type="number"
//                   name="petsAge"
//                   value={formData.petsAge}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='dailyRoutine'>Daily Routine</label>
//                 <textarea
//                   id='dailyRoutine'
//                   name="dailyRoutine"
//                   value={formData.dailyRoutine}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='petsHealth'>Health Information</label>
//                 <textarea
//                   id='petsHealth'
//                   name="petsHealth"
//                   value={formData.petsHealth}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='favoriteThings'>Favorite Things</label>
//                 <textarea
//                   id='favoriteThings'
//                   name="favoriteThings"
//                   value={formData.favoriteThings}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='idioSyncrasies'>Idiosyncrasies</label>
//                 <textarea
//                   id='idioSyncrasies'
//                   name="idioSyncrasies"
//                   value={formData.idioSyncrasies}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='vetPermission'>Permission to take to vet?</label>
//                 <textarea
//                   id='vetPermission'
//                   name="vetPermission"
//                   value={formData.vetPermission}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div className="flex justify-between">
//                 <button type="button" onClick={handleBack} className="bg-gray-500 text-white py-2 px-4 rounded">
//                   Back
//                 </button>
//                 <button type="button" onClick={handleNext} className="bg-[#40bfe0] text-white py-2 px-4 rounded">
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}
//           {step === 3 && (
//             <div className="space-y-4">
//               <h2>Sitting Information</h2>
//               <div>
//                 <label className="block text-gray-700" htmlFor='startDateAndTime'>Start Date and Time</label>
//                 <input
//                   id='startDateAndTime'
//                   type="datetime-local"
//                   name="startDateAndTime"
//                   value={formData.startDateAndTime}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='endDateAndTime'>End Date and Time</label>
//                 <input
//                   id='endDateAndTime'
//                   type="datetime-local"
//                   name="endDateAndTime"
//                   value={formData.endDateAndTime}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='specialRequest'>Special Requests</label>
//                 <textarea
//                   id='specialRequest'
//                   name="specialRequest"
//                   value={formData.specialRequest}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='alarmInfo'>Alarm Information</label>
//                 <textarea
//                   id='alarmInfo'
//                   name="alarmInfo"
//                   value={formData.alarmInfo}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='miscNotes'>Miscellaneous Notes</label>
//                 <textarea
//                   id='miscNotes'
//                   name="miscNotes"
//                   value={formData.miscNotes}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div className="flex justify-between">
//                 <button type="button" onClick={handleBack} className="bg-gray-500 text-white py-2 px-4 rounded">
//                   Back
//                 </button>
//                 <button type="submit" className="bg-[#40bfe0] text-white py-2 px-4 rounded">
//                   Submit
//                 </button>
//               </div>
//             </div>
//           )}
//         </form>
//       )}
//     </div>
//   );
// };

// export default BookingForm;


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
    <div>
      <img src={src} alt="Pampered Pets" className="rounded-full w-96 h-96 mx-auto" />
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 relative">
        
        <div className="absolute flex justify-between w-full -top-3.5 px-2">
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
          <h2>Thank You!</h2>
          <p>Your submission has been received.</p>
        </div>
      ) : (
        <form onSubmit={step === 3 ? onSubmit : (e) => e.preventDefault()} className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <h2>Customer Information</h2>
              <div>
                <label className="block text-gray-700" htmlFor='customerName'>Customer Name</label>
                <input
                  id='customerName'
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={onChange}
                  className="w-full mt-1 p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor='email'>Email</label>
                <input
                  autoComplete='on'
                  id='email'
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  className="w-full mt-1 p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor='cellPhone'>Cell Phone</label>
                <input
                  id='cellPhone'
                  type="tel"
                  name="cellPhone"
                  value={formData.cellPhone}
                  onChange={onChange}
                  className="w-full mt-1 p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor='homePhone'>Home Phone</label>
                <input
                  id='homePhone'
                  type="tel"
                  name="homePhone"
                  value={formData.homePhone}
                  onChange={onChange}
                  className="w-full mt-1 p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor='homeAddress'>Home Address</label>
                <input
                  id='homeAddress'
                  type="text"
                  name="homeAddress"
                  value={formData.homeAddress}
                  onChange={onChange}
                  className="w-full mt-1 p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor='emergencyContactNumber'>Emergency Contact Phone Number</label>
                <input
                  id='emergencyContactNumber'
                  type="tel"
                  name="emergencyContactNumber"
                  value={formData.emergencyContactNumber}
                  onChange={onChange}
                  className="w-full mt-1 p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor='workPhone'>Work Phone</label>
                <input
                  id='workPhone'
                  type="tel"
                  name="workPhone"
                  value={formData.workPhone}
                  onChange={onChange}
                  className="w-full mt-1 p-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={handleNext} className="bg-[#40bfe0] text-white py-2 px-4 rounded">
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <h2>Pet Information</h2>
              <div>
                <label className="block text-gray-700" htmlFor='petsName'>Pet's Name</label>
                <input
                  id='petsName'
                  type="text"
                  name="petsName"
                  value={formData.petsName}
                  onChange={onChange}
                  className="w-full mt-1 p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor='petsAge'>Pet's Age</label>
                <input
                  id='petsAge'
                  type="number"
                  name="petsAge"
                  value={formData.petsAge}
                  onChange={onChange}
                  className="w-full mt-1 p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor='dailyRoutine'>Daily Routine</label>
                <textarea
                  id='dailyRoutine'
                  name="dailyRoutine"
                  value={formData.dailyRoutine}
                  onChange={onChange}
                  className="w-full mt-1 p-2 border rounded"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700" htmlFor='petsHealth'>Health Information</label>
                <textarea
                  id='petsHealth'
                  name="petsHealth"
                  value={formData.petsHealth}
                  onChange={onChange}
                  className="w-full mt-1 p-2 border rounded"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700" htmlFor='favoriteThings'>Favorite Things</label>
                <textarea
                  id='favoriteThings'
                  name="favoriteThings"
                  value={formData.favoriteThings}
                  onChange={onChange}
                  className="w-full mt-1 p-2 border rounded"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700" htmlFor='idioSyncrasies'>Idiosyncrasies</label>
                <textarea
                  id='idioSyncrasies'
                  name="idioSyncrasies"
                  value={formData.idioSyncrasies}
                  onChange={onChange}
                  className="w-full mt-1 p-2 border rounded"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700" htmlFor='vetPermission'>Permission to take to vet?</label>
                <textarea
                  id='vetPermission'
                  name="vetPermission"
                  value={formData.vetPermission}
                  onChange={onChange}
                  className="w-full mt-1 p-2 border rounded"
                  required
                ></textarea>
              </div>
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
              <h2>Sitting Information</h2>
              <div>
                <label className="block text-gray-700" htmlFor='startDateAndTime'>Start Date and Time</label>
                <input
                  id='startDateAndTime'
                  type="datetime-local"
                  name="startDateAndTime"
                  value={formData.startDateAndTime}
                  onChange={onChange}
                  className="w-full mt-1 p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor='endDateAndTime'>End Date and Time</label>
                <input
                  id='endDateAndTime'
                  type="datetime-local"
                  name="endDateAndTime"
                  value={formData.endDateAndTime}
                  onChange={onChange}
                  className="w-full mt-1 p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor='specialRequest'>Special Requests</label>
                <textarea
                  id='specialRequest'
                  name="specialRequest"
                  value={formData.specialRequest}
                  onChange={onChange}
                  className="w-full mt-1 p-2 border rounded"
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700" htmlFor='alarmInfo'>Alarm Information</label>
                <textarea
                  id='alarmInfo'
                  name="alarmInfo"
                  value={formData.alarmInfo}
                  onChange={onChange}
                  className="w-full mt-1 p-2 border rounded"
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700" htmlFor='miscNotes'>Miscellaneous Notes</label>
                <textarea
                  id='miscNotes'
                  name="miscNotes"
                  value={formData.miscNotes}
                  onChange={onChange}
                  className="w-full mt-1 p-2 border rounded"
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700" htmlFor='additionalNotes'>Additional Notes</label>
                <textarea
                  id='additionalNotes'
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={onChange}
                  className="w-full mt-1 p-2 border rounded"
                  required
                ></textarea>
              </div>
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

// 
// 
// 
// 
// import React, { useState, useEffect } from 'react';

// const BookingForm = ({ src, onChange, formData, onSubmit }) => {
//   const [step, setStep] = useState(0);

//   useEffect(() => {
//     setStep(1);
//   }, []);

//   const handleNext = () => {
//     if (step === 3) {
//       onSubmit();
//       setStep(4);
//     } else {
//       setStep((prevStep) => prevStep + 1);
//     }
//   };

//   const handleBack = () => {
//     setStep((prevStep) => prevStep - 1);
//   };

//   return (
//     <div>
//       <img src={src} alt="Pampered Pets" className="rounded-full w-96 h-96 mx-auto" />
//       <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 relative">
//         <div
//           className="bg-[#9cb6bc] h-2.5 rounded-full"
          
//         ></div>
//         <div className="absolute flex justify-between w-full -top-3.5 px-2">
//           {['Customer Information', 'Pet Information', 'Sitting Information','Thank You'].map((label, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <div
//                 className={`h-6 w-6 rounded-full flex items-center justify-center ${
//                   step === index + 1 ? 'bg-pink-200 text-black' : step > index ? 'bg-pink-500 text-white' : 'bg-gray-300 text-gray-600'
//                 }`}
//               >
//                 {step > index ? '✔' : index + 1}
//               </div>
//               <span className="mt-1 text-xs text-center">{label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       {step === 6 ? (
//         <div className="text-center">
//           <h2>Thank You!</h2>
//           <p>Your submission has been received.</p>
//         </div>
//       ) : (
//         <form onSubmit={step === 5 ? onSubmit : (e) => e.preventDefault()} className="space-y-6">
//           {step === 1 && (
//             <div className="space-y-4">
//               <h2>Customer Information</h2>
//               <div>
//                 <label className="block text-gray-700" htmlFor='customerName'>Customer Name</label>
//                 <input
//                   id='customerName'
//                   type="text"
//                   name="customerName"
//                   value={formData.customerName}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='email'>Email</label>
//                 <input
//                   autoComplete='on'
//                   id='email'
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='cellPhone'>Cell Phone</label>
//                 <input
//                   id='cellPhone'
//                   type="tel"
//                   name="cellPhone"
//                   value={formData.cellPhone}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='homePhone'>Home Phone</label>
//                 <input
//                   id='homePhone'
//                   type="tel"
//                   name="homePhone"
//                   value={formData.homePhone}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='homeAddress'>Home Address</label>
//                 <input
//                   id='homeAddress'
//                   type="text"
//                   name="homeAddress"
//                   value={formData.homeAddress}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='emergencyContactNumber'>Emergency Contact Phone Number</label>
//                 <input
//                   id='emergencyContactNumber'
//                   type="tel"
//                   name="emergencyContactNumber"
//                   value={formData.emergencyContactNumber}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='workPhone'>Work Phone</label>
//                 <input
//                   id='workPhone'
//                   type="tel"
//                   name="workPhone"
//                   value={formData.workPhone}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex justify-end">
//                 <button type="button" onClick={handleNext} className="bg-[#40bfe0] text-white py-2 px-4 rounded">
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}
//           {step === 2 && (
//             <div className="space-y-4">
//               <h2>Pet Information</h2>
//               <div>
//                 <label className="block text-gray-700" htmlFor='petsName'>Pet's Name</label>
//                 <input
//                   id='petsName'
//                   type="text"
//                   name="petsName"
//                   value={formData.petsName}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='petsAge'>Pet's Age</label>
//                 <input
//                   id='petsAge'
//                   type="number"
//                   name="petsAge"
//                   value={formData.petsAge}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='dailyRoutine'>Daily Routine</label>
//                 <textarea
//                   id='dailyRoutine'
//                   name="dailyRoutine"
//                   value={formData.dailyRoutine}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='petsHealth'>Health Information</label>
//                 <textarea
//                   id='petsHealth'
//                   name="petsHealth"
//                   value={formData.petsHealth}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='favoriteThings'>Favorite Things</label>
//                 <textarea
//                   id='favoriteThings'
//                   name="favoriteThings"
//                   value={formData.favoriteThings}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='idioSyncrasies'>Idiosyncrasies</label>
//                 <textarea
//                   id='idioSyncrasies'
//                   name="idioSyncrasies"
//                   value={formData.idioSyncrasies}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='vetPermission'>Permission to take to vet?</label>
//                 <textarea
//                   id='vetPermission'
//                   name="vetPermission"
//                   value={formData.vetPermission}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div className="flex justify-between">
//                 <button type="button" onClick={handleBack} className="bg-gray-500 text-white py-2 px-4 rounded">
//                   Back
//                 </button>
//                 <button type="button" onClick={handleNext} className="bg-[#40bfe0] text-white py-2 px-4 rounded">
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}
//           {step === 3 && (
//             <div className="space-y-4">
//               <h2>Sitting Information</h2>
//               <div>
//                 <label className="block text-gray-700" htmlFor='startDateAndTime'>Start Date and Time</label>
//                 <input
//                   id='startDateAndTime'
//                   type="datetime-local"
//                   name="startDateAndTime"
//                   value={formData.startDateAndTime}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='endDateAndTime'>End Date and Time</label>
//                 <input
//                   id='endDateAndTime'
//                   type="datetime-local"
//                   name="endDateAndTime"
//                   value={formData.endDateAndTime}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='specialRequest'>Special Requests</label>
//                 <textarea
//                   id='specialRequest'
//                   name="specialRequest"
//                   value={formData.specialRequest}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='alarmInfo'>Alarm Information</label>
//                 <textarea
//                   id='alarmInfo'
//                   name="alarmInfo"
//                   value={formData.alarmInfo}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='miscNotes'>Miscellaneous Notes</label>
//                 <textarea
//                   id='miscNotes'
//                   name="miscNotes"
//                   value={formData.miscNotes}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block text-gray-700" htmlFor='additionalNotes'>Additional Notes</label>
//                 <textarea
//                   id='additionalNotes'
//                   name="additionalNotes"
//                   value={formData.additionalNotes}
//                   onChange={onChange}
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div className="flex justify-between">
//                 <button type="button" onClick={handleBack} className="bg-gray-500 text-white py-2 px-4 rounded">
//                   Back
//                 </button>
//                 <button type="submit" className="bg-[#40bfe0] text-white py-2 px-4 rounded">
//                   Submit
//                 </button>
//               </div>
//             </div>
//           )}
//         </form>
//       )}
//     </div>
//   );
// };

// export default BookingForm;

