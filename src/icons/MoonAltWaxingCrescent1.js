import React from 'react';
import PropTypes from 'prop-types';

const MoonAltWaxingCrescent1 = ({ color = "#000000", size = "30", ...mProps }) => {
	return (
	

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 30 30" width={size} height={size} fill={color} stroke="auto" strokeWidth="auto" {...mProps} space="preserve">
<path d="M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M16.38,4.48
	c1.64,0.9,2.99,2.2,4.04,3.9s1.57,3.72,1.57,6.06c0,4.9-1.72,8.2-5.16,9.89c2.35-0.44,4.31-1.59,5.87-3.44s2.34-4,2.34-6.45
	c0-1.66-0.38-3.21-1.14-4.66s-1.8-2.63-3.13-3.57S18,4.71,16.38,4.48z"/>
</svg>

);
	};

MoonAltWaxingCrescent1.propTypes = {
color: PropTypes.string,
size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};


export default MoonAltWaxingCrescent1;