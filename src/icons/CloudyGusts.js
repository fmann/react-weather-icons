import React from 'react';
import PropTypes from 'prop-types';

const CloudyGusts = ({ color = "#000000", size = "30", ...mProps }) => {
	return (
	

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 30 30" width={size} height={size} fill={color} stroke="auto" strokeWidth="auto" {...mProps} space="preserve">
<path d="M3.62,21.01c0-0.25,0.08-0.46,0.25-0.63c0.17-0.16,0.37-0.24,0.6-0.24h5.42c0.74,0,1.37,0.26,1.89,0.79
	c0.52,0.53,0.78,1.16,0.78,1.9c0,0.74-0.26,1.38-0.78,1.9c-0.52,0.52-1.15,0.78-1.89,0.78s-1.38-0.26-1.9-0.79
	c-0.16-0.16-0.23-0.36-0.23-0.6c0-0.24,0.08-0.45,0.23-0.6c0.15-0.16,0.35-0.24,0.6-0.24c0.23,0,0.43,0.08,0.61,0.24
	c0.2,0.19,0.43,0.29,0.69,0.29s0.49-0.1,0.68-0.29c0.19-0.19,0.29-0.42,0.29-0.7c0-0.26-0.1-0.49-0.29-0.68s-0.42-0.29-0.68-0.29
	H4.47c-0.23,0-0.43-0.08-0.6-0.25S3.62,21.25,3.62,21.01z M3.62,17.97c0-0.24,0.08-0.45,0.25-0.62c0.17-0.16,0.37-0.24,0.6-0.24
	h10.55c0.26,0,0.49-0.1,0.68-0.29c0.19-0.19,0.29-0.43,0.29-0.69s-0.1-0.5-0.29-0.69c-0.19-0.19-0.42-0.29-0.68-0.29
	c-0.28,0-0.5,0.09-0.68,0.28c-0.18,0.15-0.39,0.23-0.64,0.23c-0.24,0-0.44-0.08-0.6-0.23c-0.15-0.15-0.23-0.35-0.23-0.6
	c0-0.25,0.07-0.45,0.23-0.61c0.51-0.51,1.15-0.76,1.92-0.76c0.74,0,1.38,0.26,1.9,0.78c0.52,0.52,0.78,1.15,0.78,1.88
	s-0.26,1.37-0.78,1.89c-0.52,0.52-1.15,0.78-1.9,0.78H4.47c-0.24,0-0.44-0.08-0.6-0.24C3.7,18.4,3.62,18.2,3.62,17.97z M5.77,15.61
	c0,0.08,0.05,0.12,0.16,0.12h1.44c0.08,0,0.15-0.05,0.22-0.15c0.22-0.54,0.58-0.99,1.05-1.35c0.48-0.36,1.01-0.56,1.59-0.6
	l0.53-0.08c0.13,0,0.2-0.06,0.2-0.17l0.07-0.52c0.11-1.08,0.56-1.99,1.37-2.72s1.76-1.1,2.86-1.1c1.11,0,2.07,0.36,2.88,1.09
	c0.81,0.73,1.27,1.64,1.39,2.73l0.07,0.59c0,0.11,0.06,0.17,0.17,0.17h1.62c0.91,0,1.68,0.32,2.33,0.96c0.65,0.64,0.97,1.4,0.97,2.3
	c0,0.89-0.32,1.66-0.97,2.3c-0.65,0.64-1.42,0.96-2.33,0.96h-6.91c-0.12,0-0.19,0.06-0.19,0.17v1.39c0,0.11,0.06,0.17,0.19,0.17
	h6.91c0.91,0,1.74-0.22,2.51-0.67c0.77-0.44,1.37-1.05,1.82-1.81c0.45-0.77,0.67-1.6,0.67-2.5c0-0.91-0.22-1.74-0.67-2.5
	c-0.45-0.76-1.05-1.37-1.82-1.81c-0.77-0.44-1.6-0.67-2.51-0.67h-0.31c-0.31-1.33-1.01-2.42-2.1-3.27
	c-1.08-0.85-2.33-1.27-3.73-1.27c-1.41,0-2.66,0.44-3.75,1.32s-1.78,2-2.07,3.37c-0.86,0.2-1.62,0.61-2.28,1.23
	s-1.12,1.36-1.38,2.21v0.04C5.77,15.56,5.77,15.58,5.77,15.61z"/>
</svg>

);
	};

CloudyGusts.propTypes = {
color: PropTypes.string,
size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};


export default CloudyGusts;