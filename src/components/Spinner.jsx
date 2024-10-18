import React from 'react';
import '../styles/spinner.scss';

const Spinner = ({ size = 'medium'}) => {
  return (
    <div className={`spinner ${size}`}>
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );
};

export default Spinner;