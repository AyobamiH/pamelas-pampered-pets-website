// components/FormButton.js
import React from 'react';
import PropTypes from 'prop-types';

const FormButton = ({ label, onClick, isDisabled }) => (
  <button
    type="button"
    onClick={onClick}
    className={`py-2 px-4 rounded transition-all duration-300 ${isDisabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-[#40bfe0] text-white'} sm:px-6 md:px-8 lg:px-10`}
    disabled={isDisabled}
  >
    {label}
  </button>
);

FormButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

FormButton.defaultProps = {
  isDisabled: false,
};

export default FormButton;
