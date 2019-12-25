import React from 'react'
import PropTypes from 'prop-types'

const MoonAltWaningCrescent2 = props => {
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
	c0,1.36,0.26,2.65,0.79,3.89s1.24,2.3,2.12,3.2s1.95,1.62,3.17,2.15s2.52,0.81,3.87,0.82c-1.16-2.47-1.74-5.83-1.74-10.06
	c0-3.61,0.6-6.96,1.8-10.05c-1.36,0-2.65,0.27-3.89,0.81s-2.3,1.25-3.19,2.15s-1.61,1.97-2.14,3.2S4.94,13.09,4.94,14.44z"
			/>
		</svg>
	)
}

MoonAltWaningCrescent2.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MoonAltWaningCrescent2.defaultProps = {
	color: '#000000',
	size: '30',
}

export default MoonAltWaningCrescent2
