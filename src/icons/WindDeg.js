import React from 'react'
import PropTypes from 'prop-types'

const WindDeg = props => {
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
				d="M3.74,14.5c0-2.04,0.51-3.93,1.52-5.66s2.38-3.1,4.11-4.11s3.61-1.51,5.64-1.51c1.52,0,2.98,0.3,4.37,0.89
	s2.58,1.4,3.59,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.59s-2.2,1.8-3.59,2.39
	s-2.84,0.89-4.37,0.89c-1.53,0-3-0.3-4.39-0.89s-2.59-1.4-3.6-2.4s-1.8-2.2-2.4-3.58S3.74,16.03,3.74,14.5z M6.22,14.5
	c0,2.37,0.86,4.43,2.59,6.18c1.73,1.73,3.79,2.59,6.2,2.59c1.58,0,3.05-0.39,4.39-1.18s2.42-1.85,3.21-3.2s1.19-2.81,1.19-4.39
	s-0.4-3.05-1.19-4.4s-1.86-2.42-3.21-3.21s-2.81-1.18-4.39-1.18s-3.05,0.39-4.39,1.18S8.2,8.75,7.4,10.1S6.22,12.92,6.22,14.5z
	 M11.11,20.35l3.75-13.11c0.01-0.1,0.06-0.15,0.15-0.15s0.14,0.05,0.15,0.15l3.74,13.11c0.04,0.11,0.03,0.19-0.02,0.25
	s-0.13,0.06-0.24,0l-3.47-1.3c-0.1-0.04-0.2-0.04-0.29,0l-3.5,1.3c-0.1,0.06-0.17,0.06-0.21,0S11.09,20.45,11.11,20.35z"
			/>
		</svg>
	)
}

WindDeg.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

WindDeg.defaultProps = {
	color: '#000000',
	size: '30',
}

export default WindDeg
