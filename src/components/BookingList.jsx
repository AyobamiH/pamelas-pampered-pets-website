import React, { useState, useEffect } from 'react';
import bookingService from '../services/bookingService';
import './BookingList.css';




const BookingList = () => {

    const [bookings, setBookings] = useState([]);
  const [expandedBookingId, setExpandedBookingId] = useState(null);

  useEffect(() => {
    bookingService
      .getAll()
      .then(fetchedBookings => {
        setBookings(fetchedBookings);
        console.log(fetchedBookings)
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

  const handleDelete = (id) => {
    bookingService
      .remove(id)
      .then(() => {
        setBookings(bookings.filter(booking => booking.id !== id));
      })
      .catch(error => {
        console.error('Error deleting booking:', error);
      });
  };

  const toggleExpand = (id) => {
    setExpandedBookingId(expandedBookingId === id ? null : id);
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pet's Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date and Time</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date and Time</th>
            <th scope="col" className="relative px-6 py-3"><span className="sr-only">Expand</span></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {bookings.map((booking) => (
            <React.Fragment key={booking.id}>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.customerName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.petsName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.startDateAndTime}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.endDateAndTime}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => toggleExpand(booking.id)} className="text-indigo-600 hover:text-indigo-900">Expand</button>
                </td>
                <td>
                 <button className="delete-button" onClick={(e) => {e.stopPropagation(); handleDelete(booking.id);}}>Delete</button>
                </td>
                
              </tr>
              {expandedBookingId === booking.id && (
                <tr>
                  <td colSpan="6" className="px-6 py-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p><strong>Customer Name:</strong> {booking.customerName}</p>
                      <p><strong>Email:</strong> {booking.email}</p>
                      <p><strong>Cell Phone:</strong> {booking.cellPhone}</p>
                      <p><strong>Home Phone:</strong> {booking.homePhone}</p>
                      <p><strong>Home Address:</strong> {booking.homeAddress}</p>
                      <p><strong>Emergency Contact Number:</strong> {booking.emergencyContactNumber}</p>
                      <p><strong>Work Phone:</strong> {booking.workPhone}</p>
                      <p><strong>Pet's Name:</strong> {booking.petsName}</p>
                      <p><strong>Pet's Age:</strong> {booking.petsAge}</p>
                      <p><strong>Daily Routine:</strong> {booking.dailyRoutine}</p>
                      <p><strong>Health Information:</strong> {booking.petsHealth}</p>
                      <p><strong>Favorite Things:</strong> {booking.favoriteThings}</p>
                      <p><strong>Idiosyncrasies:</strong> {booking.idioSyncrasies}</p>
                      <p><strong>Permission to take to vet:</strong> {booking.vetPermission}</p>
                      <p><strong>Special Requests:</strong> {booking.specialRequest}</p>
                      <p><strong>Alarm Information:</strong> {booking.alarmInfo}</p>
                      <p><strong>Miscellaneous Notes:</strong> {booking.miscNotes}</p>
                      <p><strong>Additional Notes:</strong> {booking.additionalNotes}</p>
                      <p><strong>Start Date and Time:</strong> {booking.startDateAndTime}</p>
                      <p><strong>End Date and Time:</strong> {booking.endDateAndTime}</p>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
