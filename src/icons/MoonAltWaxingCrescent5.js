import React from 'react';
import PropTypes from 'prop-types';

const MoonAltWaxingCrescent5 = ({ color = "#000000", size = "30", ...mProps }) => {
	return (
	

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 30 30" width={size} height={size} fill={color} stroke="auto" strokeWidth="auto" {...mProps} space="preserve">
<path d="M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M15.15,4.39
	c1.83,3.22,2.74,6.57,2.74,10.05c0,4.16-0.88,7.51-2.65,10.06c1.34-0.03,2.61-0.32,3.82-0.86s2.25-1.27,3.13-2.16
	s1.57-1.95,2.09-3.18s0.78-2.51,0.78-3.86c0-1.8-0.44-3.46-1.33-5s-2.08-2.75-3.6-3.65S16.95,4.42,15.15,4.39z"/>
</svg>

);
	};

MoonAltWaxingCrescent5.propTypes = {
color: PropTypes.string,
size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};


export default MoonAltWaxingCrescent5;