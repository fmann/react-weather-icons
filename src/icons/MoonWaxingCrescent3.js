import React from 'react';
import PropTypes from 'prop-types';

const MoonWaxingCrescent3 = ({ color = "#000000", size = "30", ...mProps }) => {
	return (
	

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 30 30" width={size} height={size} fill={color} stroke="auto" strokeWidth="auto" {...mProps} space="preserve">
<path d="M15.01,25.71c2.04,0,3.92-0.5,5.65-1.51s3.09-2.37,4.09-4.1s1.51-3.61,1.51-5.65s-0.5-3.92-1.51-5.65s-2.37-3.09-4.09-4.09
	s-3.61-1.51-5.65-1.51c1.71,1.26,2.97,2.9,3.78,4.91S20,12.24,20,14.44c0,0.9-0.03,1.73-0.1,2.5s-0.21,1.59-0.43,2.47
	s-0.51,1.68-0.86,2.4s-0.83,1.42-1.45,2.12S15.83,25.21,15.01,25.71z"/>
</svg>

);
	};

MoonWaxingCrescent3.propTypes = {
color: PropTypes.string,
size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};


export default MoonWaxingCrescent3;