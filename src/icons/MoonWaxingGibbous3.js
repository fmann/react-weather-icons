import React from 'react'
import PropTypes from 'prop-types'

const MoonWaxingGibbous3 = props => {
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
				d="M11.8,14.43c0,2.39,0.24,4.52,0.71,6.39s1.31,3.5,2.51,4.89c1.52,0,2.98-0.3,4.37-0.89s2.59-1.4,3.6-2.4s1.81-2.2,2.4-3.6
	s0.89-2.85,0.89-4.39s-0.3-2.99-0.89-4.38s-1.4-2.58-2.4-3.59s-2.2-1.81-3.6-2.4s-2.85-0.89-4.37-0.89
	c-1.02,1.46-1.81,3.16-2.37,5.13S11.8,12.3,11.8,14.43z"
			/>
		</svg>
	)
}

MoonWaxingGibbous3.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MoonWaxingGibbous3.defaultProps = {
	color: '#000000',
	size: '30',
}

export default MoonWaxingGibbous3
