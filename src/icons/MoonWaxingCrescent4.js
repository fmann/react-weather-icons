import React from 'react';
import PropTypes from 'prop-types';

const MoonWaxingCrescent4 = ({ color = "#000000", size = "30", ...mProps }) => {
	return (
	

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 30 30" width={size} height={size} fill={color} stroke="auto" strokeWidth="auto" {...mProps} space="preserve">
<path d="M15.01,25.71c2.04,0,3.92-0.5,5.65-1.51s3.09-2.37,4.09-4.1s1.51-3.61,1.51-5.65s-0.5-3.92-1.51-5.65s-2.37-3.09-4.09-4.09
	s-3.61-1.51-5.65-1.51c1.29,1.39,2.24,3.07,2.84,5.05s0.91,4.05,0.91,6.2c0,0.88-0.03,1.69-0.08,2.44s-0.16,1.55-0.32,2.41
	s-0.38,1.65-0.64,2.37s-0.63,1.43-1.09,2.15S15.62,25.15,15.01,25.71z"/>
</svg>

);
	};

MoonWaxingCrescent4.propTypes = {
color: PropTypes.string,
size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};


export default MoonWaxingCrescent4;