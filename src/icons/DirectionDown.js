import React from 'react'
import PropTypes from 'prop-types'

const DirectionDown = props => {
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
				d="M11.77,16.47c0,0.22,0.08,0.4,0.25,0.55l2.4,2.45c0.16,0.16,0.35,0.23,0.58,0.23c0.24,0,0.43-0.08,0.59-0.23l2.4-2.45
	c0.16-0.14,0.24-0.33,0.24-0.55c0-0.22-0.08-0.41-0.23-0.57s-0.34-0.23-0.56-0.23s-0.42,0.08-0.57,0.23l-1.06,1.05v-6.59
	c0-0.22-0.08-0.41-0.24-0.56C15.42,9.66,15.23,9.58,15,9.58s-0.42,0.07-0.58,0.22c-0.16,0.15-0.24,0.34-0.24,0.56v6.59l-1.06-1.05
	c-0.16-0.16-0.34-0.23-0.55-0.23c-0.22,0-0.42,0.08-0.57,0.23S11.77,16.25,11.77,16.47z"
			/>
		</svg>
	)
}

DirectionDown.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

DirectionDown.defaultProps = {
	color: '#000000',
	size: '30',
}

export default DirectionDown
