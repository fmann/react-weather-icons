import React from 'react';
import PropTypes from 'prop-types';

const MoonAltWaxingGibbous5 = ({ color = "#000000", size = "30", ...mProps }) => {
	return (
	

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 30 30" width={size} height={size} fill={color} stroke="auto" strokeWidth="auto" {...mProps} space="preserve">
<path d="M3.74,14.44c0-1.53,0.3-3,0.89-4.39s1.4-2.59,2.4-3.6s2.2-1.81,3.6-2.4s2.85-0.89,4.37-0.89c1.53,0,3,0.3,4.39,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.39,0.89c-1.52,0-2.98-0.3-4.37-0.89s-2.59-1.4-3.6-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M7.71,14.44
	c0,4.76,1.66,8.02,4.97,9.79c0.73,0.19,1.51,0.28,2.33,0.28c1.37,0,2.67-0.27,3.91-0.8s2.31-1.25,3.22-2.15s1.62-1.97,2.15-3.22
	s0.8-2.55,0.8-3.9c0-1.82-0.45-3.5-1.35-5.05s-2.13-2.77-3.68-3.68s-3.23-1.35-5.05-1.35c-0.68,0-1.3,0.05-1.85,0.16
	c-1.63,0.94-2.95,2.27-3.95,3.99S7.71,12.22,7.71,14.44z"/>
</svg>

);
	};

MoonAltWaxingGibbous5.propTypes = {
color: PropTypes.string,
size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};


export default MoonAltWaxingGibbous5;