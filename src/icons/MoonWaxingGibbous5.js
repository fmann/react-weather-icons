import React from 'react'
import PropTypes from 'prop-types'

const MoonWaxingGibbous5 = props => {
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
				d="M9.65,14.43c0,1.24,0.08,2.38,0.25,3.41s0.44,2.05,0.83,3.04s0.95,1.89,1.67,2.71s1.6,1.52,2.62,2.12
	c1.52,0,2.98-0.3,4.37-0.89s2.59-1.4,3.6-2.4s1.81-2.2,2.4-3.6s0.89-2.85,0.89-4.39s-0.3-2.99-0.89-4.38s-1.4-2.58-2.4-3.59
	s-2.2-1.81-3.6-2.4s-2.85-0.89-4.37-0.89c-1.67,1.14-2.98,2.72-3.94,4.74S9.65,12.09,9.65,14.43z"
			/>
		</svg>
	)
}

MoonWaxingGibbous5.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MoonWaxingGibbous5.defaultProps = {
	color: '#000000',
	size: '30',
}

export default MoonWaxingGibbous5
