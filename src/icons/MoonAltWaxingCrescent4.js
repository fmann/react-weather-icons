import React from 'react';
import PropTypes from 'prop-types';

const MoonAltWaxingCrescent4 = ({ color = "#000000", size = "30", ...mProps }) => {
	return (
	

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 30 30" width={size} height={size} fill={color} stroke="auto" strokeWidth="auto" {...mProps} space="preserve">
<path d="M3.75,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4S13.48,3.19,15,3.19s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.75,15.97,3.75,14.44z M15.35,4.39
	c1.05,1.27,1.91,2.75,2.57,4.44s0.99,3.56,0.99,5.61c0,4.39-1.14,7.75-3.43,10.06c1.31-0.06,2.55-0.37,3.74-0.92s2.2-1.28,3.05-2.18
	s1.53-1.95,2.04-3.16s0.75-2.48,0.75-3.81c0-1.78-0.43-3.43-1.3-4.94s-2.04-2.73-3.53-3.65S17.12,4.45,15.35,4.39z"/>
</svg>

);
	};

MoonAltWaxingCrescent4.propTypes = {
color: PropTypes.string,
size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};


export default MoonAltWaxingCrescent4;