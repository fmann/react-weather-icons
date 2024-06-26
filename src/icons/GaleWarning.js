import React from 'react';
import PropTypes from 'prop-types';

const GaleWarning = ({ color = "#000000", size = "30", ...mProps }) => {
	return (
	

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 30 30" width={size} height={size} fill={color} stroke="auto" strokeWidth="auto" {...mProps} space="preserve">
<path d="M10.67,24.6V7.45h1.03V24.6H10.67z M12.4,22.44v-7.41l8.65,3.69L12.4,22.44z M12.4,14.86V7.45l8.65,3.69L12.4,14.86z"/>
</svg>

);
	};

GaleWarning.propTypes = {
color: PropTypes.string,
size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};


export default GaleWarning;