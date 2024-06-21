import React from 'react';
import { useNavigate } from 'react-router-dom';

const BtnGreen = ({title, route}) => {
  const navigate = useNavigate();

  return (
    <button className="btn" 
      style={{ backgroundColor: "#83A93A", color: "#ffffff"}} 
      onClick={e => navigate(route)}>
      {title}
    </button>
  );
};

export default BtnGreen;
