import React from 'react';
import PropTypes from 'prop-types';

const DirectionDownLeft = ({ color = "#000000", size = "30", ...mProps }) => {
	return (
	

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 30 30" width={size} height={size} fill={color} stroke="auto" strokeWidth="auto" {...mProps} space="preserve">
<path d="M11.83,16.77c0,0.19,0.06,0.35,0.19,0.48c0.13,0.13,0.29,0.19,0.47,0.19h2.87c0.19,0,0.35-0.06,0.47-0.19
	c0.13-0.13,0.19-0.29,0.19-0.48c0-0.19-0.06-0.34-0.19-0.46c-0.13-0.12-0.29-0.18-0.47-0.18h-1.24L18,12.24
	c0.12-0.14,0.18-0.3,0.18-0.5c0-0.18-0.06-0.33-0.18-0.46c-0.12-0.12-0.29-0.18-0.5-0.18c-0.2,0-0.36,0.06-0.48,0.18l-3.86,3.87
	v-1.25c0-0.19-0.06-0.35-0.19-0.48c-0.13-0.13-0.29-0.19-0.48-0.19c-0.19,0-0.35,0.07-0.47,0.2c-0.13,0.13-0.19,0.29-0.19,0.48
	V16.77z"/>
</svg>

);
	};

DirectionDownLeft.propTypes = {
color: PropTypes.string,
size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};


export default DirectionDownLeft;