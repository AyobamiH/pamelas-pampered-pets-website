import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = ({setSubmitted}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
        setSubmitted(false)
      navigate('/');
    }, 5000); // 5000 milliseconds = 20 seconds

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, [navigate, setSubmitted]);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-center">
        <h2>Thank You!</h2>
        <p>Your submission has been received.</p>
      </div>
    </div>
  );
};

export default ThankYou;
