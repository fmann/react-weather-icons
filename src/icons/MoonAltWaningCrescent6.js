import React from 'react'
import PropTypes from 'prop-types'

const MoonAltWaningCrescent6 = props => {
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
	c0,2.48,0.8,4.66,2.41,6.53s3.62,3.01,6.03,3.41c-1.01-0.5-1.86-1.1-2.56-1.82s-1.25-1.5-1.63-2.37s-0.66-1.77-0.83-2.7
	s-0.26-1.95-0.26-3.06c0-2.11,0.5-4.06,1.49-5.84s2.37-3.16,4.12-4.12c-1.63,0.21-3.11,0.77-4.45,1.7S6.87,8.3,6.1,9.76
	S4.94,12.77,4.94,14.44z"
			/>
		</svg>
	)
}

MoonAltWaningCrescent6.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MoonAltWaningCrescent6.defaultProps = {
	color: '#000000',
	size: '30',
}

export default MoonAltWaningCrescent6
