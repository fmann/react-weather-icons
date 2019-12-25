import React from 'react'
import PropTypes from 'prop-types'

const NightCloudyGusts = props => {
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
				d="M3.06,20.98c0,0.24,0.09,0.44,0.27,0.6c0.18,0.18,0.38,0.27,0.61,0.27h5.88c0.26,0,0.49,0.09,0.69,0.28
	c0.2,0.19,0.3,0.42,0.3,0.68c0,0.26-0.1,0.48-0.3,0.68s-0.43,0.3-0.68,0.3c-0.25,0-0.48-0.1-0.68-0.3
	c-0.19-0.17-0.39-0.26-0.62-0.26c-0.23,0-0.43,0.08-0.59,0.25c-0.16,0.17-0.24,0.37-0.24,0.61s0.08,0.44,0.24,0.6
	c0.52,0.52,1.15,0.78,1.88,0.78c0.74,0,1.38-0.26,1.89-0.77c0.52-0.52,0.78-1.14,0.78-1.88c0-0.74-0.26-1.38-0.78-1.9
	c-0.52-0.52-1.15-0.79-1.89-0.79H3.94c-0.24,0-0.44,0.08-0.62,0.25C3.14,20.55,3.06,20.75,3.06,20.98z M3.06,17.97
	c0,0.23,0.09,0.42,0.27,0.58c0.15,0.16,0.35,0.24,0.61,0.24h10.99c0.74,0,1.37-0.26,1.89-0.78c0.52-0.52,0.78-1.15,0.78-1.88
	s-0.26-1.36-0.78-1.88c-0.52-0.52-1.15-0.77-1.89-0.77c-0.76,0-1.39,0.25-1.89,0.75c-0.15,0.17-0.23,0.38-0.23,0.63
	c0,0.24,0.08,0.43,0.23,0.59s0.35,0.23,0.6,0.23c0.25,0,0.45-0.07,0.61-0.23c0.19-0.19,0.42-0.28,0.68-0.28
	c0.26,0,0.48,0.09,0.68,0.28c0.19,0.19,0.29,0.42,0.29,0.68s-0.1,0.5-0.29,0.69c-0.19,0.19-0.42,0.29-0.68,0.29H3.94
	c-0.24,0-0.44,0.08-0.62,0.25C3.14,17.54,3.06,17.74,3.06,17.97z M5.71,15.63c0,0.08,0.06,0.12,0.17,0.12h1.43
	c0.08,0,0.15-0.05,0.22-0.14c0.23-0.54,0.57-0.99,1.05-1.35c0.47-0.36,1-0.56,1.59-0.6l0.52-0.07c0.12,0,0.19-0.06,0.19-0.19
	l0.07-0.5c0.11-1.08,0.57-1.99,1.38-2.71c0.81-0.73,1.77-1.09,2.86-1.09s2.04,0.36,2.85,1.08c0.81,0.72,1.27,1.63,1.39,2.72
	l0.07,0.57c0,0.12,0.06,0.18,0.18,0.18h1.63c0.9,0,1.67,0.32,2.31,0.95c0.64,0.63,0.96,1.39,0.96,2.28c0,0.89-0.32,1.66-0.96,2.29
	c-0.64,0.63-1.41,0.95-2.31,0.95h-6.91c-0.11,0-0.17,0.06-0.17,0.18v1.37c0,0.12,0.06,0.18,0.17,0.18h6.91
	c0.89,0,1.72-0.22,2.48-0.67c0.76-0.44,1.36-1.05,1.8-1.81c0.44-0.76,0.66-1.59,0.66-2.49c0-0.74-0.14-1.42-0.42-2.02
	c0.76-1,1.14-2.11,1.14-3.33c0-0.71-0.14-1.39-0.42-2.04s-0.65-1.2-1.12-1.67c-0.47-0.47-1.03-0.84-1.67-1.11S22.42,6.3,21.71,6.3
	c-1.54,0-2.84,0.58-3.88,1.73c-0.78-0.41-1.67-0.61-2.65-0.61c-1.41,0-2.66,0.44-3.75,1.31s-1.77,1.99-2.07,3.35
	c-0.85,0.2-1.6,0.61-2.26,1.23s-1.11,1.35-1.37,2.18v0.04C5.72,15.58,5.71,15.62,5.71,15.63z M19.24,9
	c0.72-0.68,1.54-1.02,2.48-1.02c0.98,0,1.81,0.35,2.51,1.05s1.05,1.53,1.05,2.5c0,0.61-0.17,1.22-0.51,1.85
	c-0.96-0.96-2.11-1.43-3.47-1.43h-0.33C20.73,10.88,20.16,9.89,19.24,9z"
			/>
		</svg>
	)
}

NightCloudyGusts.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

NightCloudyGusts.defaultProps = {
	color: '#000000',
	size: '30',
}

export default NightCloudyGusts
