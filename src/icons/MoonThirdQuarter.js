import React from 'react';
import PropTypes from 'prop-types';

const MoonThirdQuarter = ({ color = "#000000", size = "30", ...mProps }) => {
	return (
	

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 30 30" width={size} height={size} fill={color} stroke="auto" strokeWidth="auto" {...mProps} space="preserve">
<path d="M3.74,14.44c0,2.04,0.5,3.93,1.51,5.65s2.37,3.1,4.09,4.1s3.61,1.51,5.65,1.51V3.19c-2.04,0-3.92,0.5-5.65,1.51
	S6.26,7.07,5.25,8.8S3.74,12.4,3.74,14.44z"/>
</svg>

);
	};

MoonThirdQuarter.propTypes = {
color: PropTypes.string,
size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};


export default MoonThirdQuarter;