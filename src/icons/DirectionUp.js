import React from 'react';
import PropTypes from 'prop-types';

const DirectionUp = ({ color = "#000000", size = "30", ...mProps }) => {
	return (
	

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 30 30" width={size} height={size} fill={color} stroke="auto" strokeWidth="auto" {...mProps} space="preserve">
<path d="M9.95,10.87c-0.01,0.35,0.1,0.65,0.34,0.9s0.53,0.37,0.89,0.36c0.34,0.02,0.63-0.1,0.88-0.37l1.66-1.64v10.3
	c-0.01,0.35,0.11,0.64,0.36,0.88s0.55,0.35,0.92,0.34c0.34,0.02,0.64-0.09,0.89-0.32s0.39-0.53,0.4-0.88v-10.3l1.64,1.64
	c0.23,0.24,0.53,0.37,0.88,0.37c0.36,0,0.66-0.12,0.9-0.36s0.36-0.53,0.36-0.89c-0.02-0.36-0.15-0.64-0.4-0.85l-3.74-3.84
	c-0.24-0.23-0.55-0.37-0.92-0.4c-0.37,0.02-0.68,0.16-0.92,0.41l-3.75,3.81C10.08,10.25,9.95,10.53,9.95,10.87z"/>
</svg>

);
	};

DirectionUp.propTypes = {
color: PropTypes.string,
size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};


export default DirectionUp;