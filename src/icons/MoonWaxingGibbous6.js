import React from 'react';
import PropTypes from 'prop-types';

const MoonWaxingGibbous6 = ({ color = "#000000", size = "30", ...mProps }) => {
	return (
	

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 30 30" width={size} height={size} fill={color} stroke="auto" strokeWidth="auto" {...mProps} space="preserve">
<path d="M8.58,14.43c0,1.03,0.06,1.97,0.18,2.83s0.32,1.73,0.62,2.59s0.69,1.65,1.16,2.34s1.1,1.35,1.85,1.96s1.63,1.12,2.63,1.55
	c1.53,0,2.99-0.3,4.38-0.89s2.58-1.4,3.59-2.4s1.81-2.2,2.4-3.6s0.89-2.85,0.89-4.39c0-2.04-0.5-3.93-1.51-5.65s-2.37-3.1-4.1-4.1
	s-3.61-1.51-5.65-1.51c-1.99,1-3.56,2.51-4.72,4.55S8.58,11.99,8.58,14.43z"/>
</svg>

);
	};

MoonWaxingGibbous6.propTypes = {
color: PropTypes.string,
size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};


export default MoonWaxingGibbous6;