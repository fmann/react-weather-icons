import React from 'react'
import PropTypes from 'prop-types'

const NightSleetStorm = props => {
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
				d="M4.19,16.88c0,1.12,0.33,2.12,1,3s1.53,1.47,2.58,1.76l-0.66,1.7c-0.05,0.14,0,0.22,0.14,0.22h2.13l-1.43,4.21h0.29
	l4.36-5.66c0.04-0.04,0.04-0.09,0.02-0.14c-0.02-0.05-0.07-0.07-0.14-0.07h-2.19l2.49-4.65c0.07-0.14,0.03-0.22-0.14-0.22H9.68
	c-0.09,0-0.17,0.05-0.23,0.15l-1.07,2.88C7.66,19.88,7.07,19.5,6.6,18.9c-0.47-0.59-0.7-1.26-0.7-2.02c0-0.84,0.28-1.57,0.84-2.18
	C7.3,14.09,8,13.73,8.85,13.63l0.51-0.03c0.12,0,0.19-0.05,0.22-0.14l0.07-0.59c0.11-1.08,0.56-1.99,1.37-2.72s1.76-1.1,2.86-1.1
	c1.09,0,2.04,0.37,2.86,1.1c0.82,0.73,1.29,1.64,1.4,2.72l0.08,0.59c0,0.11,0.06,0.17,0.18,0.17h1.61c0.89,0,1.66,0.32,2.31,0.96
	s0.97,1.4,0.97,2.29c0,0.87-0.3,1.62-0.9,2.26s-1.32,0.98-2.18,1.03c-0.13,0-0.2,0.06-0.2,0.18v1.34c0,0.11,0.07,0.17,0.2,0.17
	c0.88-0.02,1.69-0.26,2.42-0.72c0.73-0.45,1.31-1.06,1.74-1.81s0.64-1.57,0.64-2.45c0-0.73-0.14-1.4-0.43-2.02
	c0.76-0.96,1.14-2.06,1.14-3.29c0-0.95-0.24-1.83-0.71-2.64c-0.47-0.81-1.11-1.45-1.92-1.92c-0.81-0.47-1.69-0.71-2.64-0.71
	c-0.72,0-1.42,0.15-2.1,0.45c-0.68,0.3-1.26,0.72-1.76,1.25c-0.81-0.43-1.71-0.65-2.72-0.65c-1.42,0-2.68,0.44-3.77,1.32
	s-1.8,2-2.1,3.37c-1.11,0.26-2.02,0.84-2.74,1.74C4.55,14.7,4.19,15.73,4.19,16.88z M12.07,27.1c0,0.17,0.05,0.33,0.16,0.49
	c0.11,0.16,0.27,0.27,0.49,0.33c0.09,0.02,0.17,0.03,0.24,0.03c0.43,0,0.7-0.2,0.8-0.61l0.13-0.59c0.06-0.26,0.03-0.48-0.08-0.68
	c-0.12-0.2-0.29-0.32-0.53-0.37c-0.21-0.07-0.42-0.05-0.63,0.07c-0.21,0.12-0.34,0.29-0.41,0.51l-0.13,0.59
	C12.08,26.99,12.07,27.07,12.07,27.1z M12.86,24.2c0,0.23,0.08,0.42,0.24,0.58c0.16,0.16,0.36,0.24,0.58,0.24
	c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.59c0-0.23-0.08-0.42-0.23-0.58c-0.16-0.16-0.35-0.23-0.59-0.23
	c-0.24,0-0.43,0.08-0.59,0.23S12.86,23.97,12.86,24.2z M13.48,21.93c-0.01,0.15,0.03,0.31,0.14,0.47c0.1,0.16,0.25,0.26,0.45,0.3
	c0.23,0.06,0.44,0.04,0.64-0.06s0.33-0.29,0.41-0.56l0.26-0.9c0.07-0.22,0.05-0.43-0.07-0.63c-0.12-0.2-0.29-0.33-0.53-0.4
	c-0.22-0.07-0.43-0.04-0.64,0.08s-0.34,0.3-0.41,0.53l-0.22,0.9C13.49,21.74,13.48,21.83,13.48,21.93z M16.24,24.08
	c0,0.17,0.05,0.33,0.15,0.48c0.1,0.15,0.25,0.26,0.46,0.32c0.03,0,0.08,0.01,0.14,0.02c0.06,0.01,0.11,0.02,0.14,0.02
	c0.41,0,0.66-0.22,0.76-0.66l0.14-0.6c0.07-0.21,0.05-0.42-0.07-0.63c-0.12-0.21-0.29-0.34-0.51-0.41
	c-0.25-0.06-0.48-0.04-0.68,0.08s-0.34,0.29-0.41,0.53l-0.09,0.59c0,0.01,0,0.05-0.01,0.11C16.25,24,16.24,24.04,16.24,24.08z
	 M16.98,21.12c0,0.23,0.08,0.42,0.24,0.57c0.15,0.16,0.34,0.24,0.58,0.24c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.58
	c0-0.24-0.08-0.43-0.23-0.59c-0.16-0.16-0.35-0.23-0.59-0.23c-0.24,0-0.43,0.08-0.59,0.23S16.98,20.88,16.98,21.12z M18.02,9.02
	c0.67-0.64,1.48-0.97,2.45-0.97c0.98,0,1.82,0.34,2.51,1.03c0.69,0.68,1.04,1.52,1.04,2.5c0,0.66-0.16,1.26-0.47,1.81
	c-0.96-0.96-2.13-1.44-3.52-1.44h-0.31C19.42,10.76,18.85,9.78,18.02,9.02z"
			/>
		</svg>
	)
}

NightSleetStorm.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

NightSleetStorm.defaultProps = {
	color: '#000000',
	size: '30',
}

export default NightSleetStorm
