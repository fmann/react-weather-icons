import React from 'react'
import PropTypes from 'prop-types'

const MoonAltWaningGibbous1 = props => {
	const { color, size, ...mProps } = props
	return (
		<svg
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 30 30"
			width={size}
			height={size}
			fill={color}
			stroke="auto"
			strokeWidth="auto"
			{...mProps}
			space="preserve"
		>
			<path
				d="M3.74,14.43c0-2.04,0.51-3.92,1.52-5.65S7.64,5.7,9.37,4.69s3.61-1.5,5.65-1.5s3.92,0.5,5.65,1.5s3.09,2.36,4.09,4.09
	s1.5,3.61,1.5,5.65s-0.5,3.93-1.5,5.65s-2.36,3.1-4.09,4.11s-3.61,1.52-5.65,1.52s-3.93-0.51-5.65-1.52s-3.1-2.38-4.11-4.11
	S3.74,16.47,3.74,14.43z M4.94,14.43c0,1.36,0.27,2.66,0.81,3.9S7,20.65,7.9,21.55s1.97,1.62,3.22,2.15s2.55,0.81,3.9,0.81
	c0.86,0,1.62-0.09,2.29-0.28c0.83-0.44,1.55-0.96,2.17-1.57s1.1-1.22,1.46-1.85s0.64-1.33,0.86-2.09s0.36-1.48,0.43-2.14
	s0.1-1.37,0.1-2.15c0-0.93-0.1-1.84-0.3-2.74S21.52,9.9,21.1,9.02s-0.99-1.72-1.72-2.5s-1.57-1.45-2.54-1.99
	c-0.4-0.09-1.01-0.13-1.82-0.13c-1.36,0-2.66,0.26-3.9,0.79S8.8,6.43,7.9,7.32s-1.62,1.97-2.15,3.2S4.94,13.06,4.94,14.43z"
			/>
		</svg>
	)
}

MoonAltWaningGibbous1.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MoonAltWaningGibbous1.defaultProps = {
	color: '#000000',
	size: '30',
}

export default MoonAltWaningGibbous1
