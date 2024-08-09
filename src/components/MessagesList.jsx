import React, { useState, useEffect } from 'react';
import messageServices from '../services/messageServices';

const MessagesList = () => {

    const [messages, setMessages] = useState([]);
  const [expandedMessageId, setExpandedMessageId] = useState(null);

  useEffect(() => {
    messageServices
      .getAll()
      .then(fetchedMessages => {
        setMessages(fetchedMessages);
        console.log(fetchedMessages)
      })
      .catch(error => {
        console.error('Error Fetching Messages:', error);
      });
  }, []);

  const deleteMessage= (id) => {
    messageServices
      .remove(id)
      .then(() => {
        setMessages(messages.filter(message => message.id !== id));
      })
      .catch(error => {
        console.error('Error deleting message:', error);
      });
  };

  const toggleExpand = (id) => {
    setExpandedMessageId(expandedMessageId === id ? null : id);
  };
  return (
    <div className="overflow-x-auto mt-24">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Messages</th>

            <th scope="col" className="relative px-6 py-3"><span className="sr-only">Expand</span></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {messages.map((message) => (
            <React.Fragment key={message.id}>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{message.customerName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{message.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{message.cellPhone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{message.msg}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => toggleExpand(message.id)} className="text-indigo-600 hover:text-indigo-900">Expand</button>
                </td>
                <td>
                 <button className="delete-button" onClick={(e) => {e.stopPropagation(); bookingService.remove(booking.id)  ;}}>Delete</button>
                </td>
                
              </tr>
              {expandedMessageId === message.id && (
                <tr>
                  <td colSpan="6" className="px-6 py-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p><strong>Customer Name:</strong> {message.customerName}</p>
                      <p><strong>Email:</strong> {message.email}</p>
                      <p><strong>Cell Phone:</strong> {message.cellPhone}</p>
                      <p><strong>Message:</strong> {message.msg}</p>
                     
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

export default MessagesList;
