import React from 'react';
import PropTypes from 'prop-types';

const MoonWaningGibbous4 = ({ color = "#000000", size = "30", ...mProps }) => {
	return (
	

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 30 30" width={size} height={size} fill={color} stroke="auto" strokeWidth="auto" {...mProps} space="preserve">
<path d="M3.74,14.47c0,1.52,0.3,2.98,0.89,4.37s1.39,2.58,2.4,3.59s2.2,1.8,3.59,2.4s2.84,0.89,4.37,0.89
	c2.89-2.39,4.34-6.14,4.34-11.24c0-2.34-0.41-4.47-1.22-6.36s-1.85-3.52-3.11-4.87c-2.03,0-3.91,0.5-5.64,1.51S6.25,7.12,5.24,8.84
	S3.74,12.44,3.74,14.47z"/>
</svg>

);
	};

MoonWaningGibbous4.propTypes = {
color: PropTypes.string,
size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};


export default MoonWaningGibbous4;