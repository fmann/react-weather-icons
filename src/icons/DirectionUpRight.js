import React from 'react'
import PropTypes from 'prop-types'

const DirectionUpRight = props => {
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
				d="M10.05,17.55c0,0.3,0.09,0.55,0.26,0.73c0.2,0.19,0.46,0.28,0.79,0.28c0.3,0,0.55-0.09,0.73-0.28l6.04-6.05v1.95
	c0,0.3,0.1,0.55,0.3,0.75c0.2,0.2,0.45,0.3,0.75,0.3c0.29,0,0.54-0.1,0.74-0.31s0.3-0.45,0.3-0.75V9.7c0-0.3-0.1-0.55-0.3-0.75
	s-0.45-0.3-0.74-0.3h-4.5c-0.29,0-0.54,0.1-0.73,0.3S13.4,9.39,13.4,9.7c0,0.29,0.1,0.54,0.29,0.73s0.44,0.29,0.73,0.29h1.95
	l-6.06,6.06C10.14,16.99,10.05,17.25,10.05,17.55z"
			/>
		</svg>
	)
}

DirectionUpRight.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

DirectionUpRight.defaultProps = {
	color: '#000000',
	size: '30',
}

export default DirectionUpRight
