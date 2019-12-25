import React from 'react'
import PropTypes from 'prop-types'

const MoonWaxingGibbous4 = props => {
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
				d="M10.73,14.43c0,1.19,0.07,2.29,0.2,3.3s0.35,2,0.67,2.99s0.76,1.9,1.33,2.75s1.27,1.59,2.09,2.25c1.53,0,2.99-0.3,4.38-0.89
	s2.58-1.4,3.59-2.4s1.81-2.2,2.4-3.6s0.89-2.85,0.89-4.39c0-2.04-0.5-3.93-1.51-5.65s-2.37-3.1-4.1-4.1s-3.61-1.51-5.65-1.51
	c-1.35,1.3-2.4,2.94-3.16,4.93S10.73,12.19,10.73,14.43z"
			/>
		</svg>
	)
}

MoonWaxingGibbous4.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MoonWaxingGibbous4.defaultProps = {
	color: '#000000',
	size: '30',
}

export default MoonWaxingGibbous4
