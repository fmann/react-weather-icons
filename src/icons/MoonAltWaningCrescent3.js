import React from 'react'
import PropTypes from 'prop-types'

const MoonAltWaningCrescent3 = props => {
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
	c0,1.34,0.26,2.62,0.77,3.85s1.21,2.29,2.08,3.19s1.92,1.62,3.13,2.16s2.48,0.83,3.81,0.87c-1.71-2.32-2.56-5.68-2.56-10.06
	c0-1.87,0.23-3.67,0.69-5.41s1.11-3.29,1.95-4.64c-1.8,0.03-3.45,0.5-4.96,1.41s-2.7,2.13-3.58,3.65S4.94,12.65,4.94,14.44z"
			/>
		</svg>
	)
}

MoonAltWaningCrescent3.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MoonAltWaningCrescent3.defaultProps = {
	color: '#000000',
	size: '30',
}

export default MoonAltWaningCrescent3
