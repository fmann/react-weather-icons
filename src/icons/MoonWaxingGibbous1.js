import React from 'react'
import PropTypes from 'prop-types'

const MoonWaxingGibbous1 = props => {
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
				d="M13.93,14.44c-0.02,4.53,0.33,8.29,1.04,11.27c2.04,0.01,3.93-0.49,5.65-1.49s3.1-2.36,4.11-4.08s1.52-3.61,1.53-5.65
	c0.01-2.04-0.49-3.93-1.49-5.65c-1-1.73-2.36-3.1-4.08-4.11s-3.6-1.52-5.64-1.53C14.32,6.91,13.94,10.66,13.93,14.44z"
			/>
		</svg>
	)
}

MoonWaxingGibbous1.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MoonWaxingGibbous1.defaultProps = {
	color: '#000000',
	size: '30',
}

export default MoonWaxingGibbous1
