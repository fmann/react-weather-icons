import React from 'react'
import PropTypes from 'prop-types'

const MoonAltWaningCrescent5 = props => {
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
				d="M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M4.94,14.44
	c0,1.27,0.23,2.49,0.7,3.66s1.09,2.2,1.89,3.08s1.75,1.61,2.85,2.19s2.28,0.94,3.52,1.08c-1.75-1.04-2.98-2.39-3.7-4.07
	s-1.08-3.66-1.08-5.93c0-2.07,0.44-4,1.32-5.78s2.1-3.2,3.66-4.24c-1.26,0.11-2.46,0.45-3.59,1.02s-2.1,1.3-2.92,2.19
	s-1.46,1.92-1.93,3.11S4.94,13.15,4.94,14.44z"
			/>
		</svg>
	)
}

MoonAltWaningCrescent5.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MoonAltWaningCrescent5.defaultProps = {
	color: '#000000',
	size: '30',
}

export default MoonAltWaningCrescent5
