import React from 'react';
import PropTypes from 'prop-types';

const WindBeaufort1 = ({ color = "#000000", size = "30", ...mProps }) => {
	return (
	

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 30 30" width={size} height={size} fill={color} stroke="auto" strokeWidth="auto" {...mProps} space="preserve">
<path d="M5.76,13.5c0,0.18,0.06,0.31,0.17,0.4c0.12,0.11,0.26,0.17,0.42,0.17h10.4c0.17,0,0.33,0.06,0.46,0.19
	c0.13,0.12,0.2,0.28,0.2,0.46s-0.07,0.34-0.2,0.47s-0.28,0.2-0.46,0.2c-0.18,0-0.34-0.07-0.47-0.21c-0.12-0.11-0.26-0.16-0.4-0.16
	c-0.16,0-0.3,0.05-0.41,0.16c-0.11,0.11-0.16,0.24-0.16,0.39c0,0.16,0.06,0.3,0.17,0.41c0.36,0.36,0.78,0.53,1.27,0.53
	s0.91-0.17,1.26-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.92-0.52-1.27c-0.35-0.35-0.77-0.53-1.26-0.53H6.35
	c-0.16,0-0.3,0.06-0.42,0.17C5.81,13.21,5.76,13.34,5.76,13.5z M5.76,11.48c0,0.17,0.06,0.3,0.17,0.39
	c0.12,0.11,0.26,0.16,0.42,0.16h13.81c0.49,0,0.92-0.18,1.27-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.91-0.52-1.26
	s-0.77-0.52-1.27-0.52c-0.49,0-0.91,0.17-1.27,0.51c-0.11,0.12-0.16,0.27-0.16,0.42c0,0.16,0.05,0.3,0.16,0.4
	c0.11,0.1,0.24,0.15,0.4,0.15c0.15,0,0.29-0.05,0.41-0.16c0.12-0.12,0.27-0.18,0.45-0.18c0.17,0,0.33,0.06,0.46,0.18
	c0.13,0.12,0.2,0.27,0.2,0.45c0,0.18-0.07,0.34-0.2,0.47c-0.13,0.13-0.28,0.2-0.46,0.2H6.35c-0.16,0-0.3,0.06-0.42,0.17
	C5.81,11.18,5.76,11.32,5.76,11.48z M18.65,21.85h2.47l1.65-7.98H20.3L18.65,21.85z"/>
</svg>

);
	};

WindBeaufort1.propTypes = {
color: PropTypes.string,
size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};


export default WindBeaufort1;