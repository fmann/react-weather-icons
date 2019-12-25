import React from 'react'
import PropTypes from 'prop-types'

const ThermometerInternal = props => {
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
				d="M12.48,19.56c0,0.71,0.24,1.32,0.73,1.82c0.49,0.5,1.07,0.75,1.76,0.75s1.28-0.25,1.79-0.75c0.51-0.5,0.76-1.11,0.76-1.81
	c0-0.63-0.22-1.19-0.65-1.67c-0.43-0.48-0.96-0.77-1.57-0.85V9.69c0-0.06-0.03-0.13-0.1-0.19c-0.07-0.07-0.14-0.1-0.22-0.1
	c-0.09,0-0.16,0.03-0.21,0.08c-0.05,0.06-0.08,0.12-0.08,0.21v7.34c-0.61,0.09-1.13,0.37-1.56,0.85
	C12.69,18.37,12.48,18.92,12.48,19.56z"
			/>
		</svg>
	)
}

ThermometerInternal.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

ThermometerInternal.defaultProps = {
	color: '#000000',
	size: '30',
}

export default ThermometerInternal
