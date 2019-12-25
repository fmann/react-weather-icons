import React from 'react'
import PropTypes from 'prop-types'

const NightAltRainMix = props => {
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
				d="M4.07,16.93c0,1.33,0.47,2.47,1.4,3.43s2.07,1.47,3.4,1.51c0.12,0,0.18-0.06,0.18-0.17v-1.34c0-0.11-0.06-0.17-0.18-0.17
	c-0.85-0.04-1.58-0.39-2.18-1.03s-0.91-1.39-0.91-2.23c0-0.85,0.28-1.59,0.85-2.21c0.57-0.62,1.27-0.97,2.1-1.04l0.53-0.07
	c0.13,0,0.2-0.06,0.2-0.18l0.07-0.51c0.11-1.1,0.56-2.02,1.37-2.75c0.81-0.73,1.76-1.1,2.86-1.1c1.09,0,2.04,0.37,2.86,1.1
	c0.82,0.73,1.29,1.64,1.4,2.72l0.07,0.57c0,0.12,0.06,0.19,0.17,0.19h1.62c0.91,0,1.68,0.32,2.33,0.97
	c0.65,0.64,0.97,1.41,0.97,2.31c0,0.55-0.14,1.07-0.41,1.56s-0.65,0.89-1.13,1.2c-0.48,0.31-1,0.48-1.56,0.51
	c-0.13,0-0.2,0.06-0.2,0.17v1.34c0,0.11,0.07,0.17,0.2,0.17c0.88-0.02,1.69-0.26,2.42-0.71c0.73-0.45,1.31-1.05,1.73-1.8
	c0.42-0.75,0.63-1.56,0.63-2.43c0-0.88-0.23-1.72-0.68-2.51c0.83-0.74,1.36-1.62,1.58-2.62l0.14-0.68c0.02-0.02,0.03-0.04,0.03-0.07
	c0-0.06-0.06-0.11-0.17-0.16l-0.55-0.18c-0.57-0.17-1.07-0.45-1.47-0.85c-0.41-0.4-0.7-0.81-0.87-1.25
	c-0.17-0.43-0.26-0.86-0.26-1.29c-0.02-0.21,0.01-0.49,0.09-0.82l0.13-0.58c0.04-0.1,0-0.18-0.13-0.23l-0.8-0.24
	c-0.41-0.11-0.84-0.17-1.29-0.17c-0.36,0-0.74,0.04-1.12,0.13c-0.38,0.09-0.78,0.22-1.19,0.41s-0.81,0.46-1.2,0.81
	c-0.39,0.35-0.72,0.76-1,1.23c-0.81-0.31-1.6-0.46-2.35-0.46c-1.41,0-2.67,0.44-3.76,1.32s-1.8,2-2.11,3.37
	c-1.12,0.29-2.04,0.88-2.75,1.77C4.42,14.74,4.07,15.77,4.07,16.93z M9.48,23.98c0,0.17,0.05,0.34,0.16,0.51
	c0.11,0.17,0.27,0.28,0.47,0.35c0.23,0.07,0.44,0.06,0.64-0.04s0.32-0.28,0.39-0.56l0.14-0.61c0.05-0.23,0.02-0.44-0.09-0.63
	c-0.11-0.2-0.28-0.33-0.52-0.4c-0.23-0.07-0.44-0.04-0.64,0.08s-0.34,0.3-0.4,0.53L9.5,23.79C9.48,23.83,9.48,23.89,9.48,23.98z
	 M10.24,21.08c0,0.21,0.08,0.4,0.25,0.57c0.16,0.17,0.34,0.25,0.56,0.25c0.24,0,0.44-0.08,0.6-0.24c0.16-0.16,0.24-0.35,0.24-0.59
	c0-0.23-0.08-0.43-0.24-0.59c-0.16-0.16-0.36-0.24-0.6-0.24c-0.23,0-0.43,0.08-0.58,0.23S10.24,20.85,10.24,21.08z M10.85,18.81
	c-0.01,0.16,0.03,0.31,0.14,0.45c0.1,0.15,0.26,0.25,0.48,0.32c0.21,0.06,0.41,0.04,0.62-0.07c0.21-0.11,0.34-0.28,0.41-0.51
	l0.28-0.9c0.07-0.24,0.05-0.46-0.07-0.65c-0.12-0.19-0.3-0.32-0.54-0.39c-0.22-0.07-0.43-0.05-0.63,0.07
	c-0.2,0.11-0.34,0.28-0.41,0.5l-0.24,0.92c0,0.02-0.01,0.06-0.02,0.12C10.85,18.72,10.85,18.77,10.85,18.81z M12.01,27.1
	c0,0.18,0.05,0.34,0.15,0.5c0.1,0.16,0.26,0.27,0.48,0.33c0.08,0.02,0.17,0.03,0.25,0.03c0.43,0,0.69-0.2,0.79-0.61l0.14-0.59
	c0.06-0.26,0.03-0.48-0.08-0.68s-0.29-0.32-0.52-0.37c-0.21-0.07-0.42-0.05-0.63,0.07c-0.21,0.12-0.34,0.29-0.41,0.51l-0.14,0.59
	C12.02,26.97,12.01,27.04,12.01,27.1z M12.79,24.2c0,0.22,0.08,0.41,0.25,0.58c0.16,0.16,0.35,0.24,0.57,0.24
	c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.59c0-0.23-0.08-0.42-0.23-0.58s-0.35-0.23-0.59-0.23s-0.43,0.08-0.59,0.23
	C12.87,23.77,12.79,23.97,12.79,24.2z M13.42,21.93c-0.01,0.15,0.03,0.31,0.13,0.47s0.25,0.26,0.45,0.3
	c0.23,0.06,0.44,0.04,0.64-0.06c0.19-0.1,0.33-0.29,0.41-0.56l0.27-0.9c0.07-0.22,0.05-0.43-0.07-0.63c-0.12-0.2-0.29-0.33-0.53-0.4
	c-0.22-0.07-0.43-0.04-0.64,0.08s-0.34,0.3-0.41,0.53l-0.22,0.9C13.43,21.74,13.42,21.83,13.42,21.93z M16.17,24.08
	c0,0.16,0.05,0.32,0.15,0.48s0.26,0.27,0.46,0.33c0.03,0,0.08,0.01,0.14,0.02c0.06,0.01,0.1,0.02,0.14,0.02
	c0.41,0,0.66-0.22,0.76-0.66l0.14-0.6c0.07-0.21,0.05-0.42-0.07-0.63c-0.11-0.21-0.28-0.34-0.51-0.41
	c-0.25-0.06-0.48-0.04-0.68,0.08s-0.34,0.29-0.41,0.53l-0.09,0.59c0,0.02-0.01,0.07-0.02,0.12C16.18,24,16.17,24.04,16.17,24.08z
	 M16.91,21.12c0,0.22,0.08,0.42,0.25,0.57c0.15,0.16,0.34,0.24,0.57,0.24c0.24,0,0.43-0.08,0.59-0.23s0.23-0.35,0.23-0.58
	c0-0.24-0.08-0.43-0.23-0.59s-0.35-0.23-0.59-0.23c-0.24,0-0.43,0.08-0.59,0.23S16.91,20.88,16.91,21.12z M17.52,18.81
	c0,0.17,0.05,0.33,0.16,0.48s0.27,0.26,0.49,0.32c0.02,0,0.06,0.01,0.12,0.02c0.06,0.01,0.11,0.02,0.14,0.02
	c0.1,0,0.22-0.03,0.36-0.09c0.21-0.11,0.35-0.29,0.41-0.52l0.24-0.9c0.06-0.23,0.04-0.44-0.08-0.63c-0.11-0.2-0.28-0.33-0.51-0.4
	c-0.23-0.07-0.44-0.05-0.64,0.06s-0.32,0.27-0.39,0.51l-0.28,0.91c0,0.02-0.01,0.06-0.02,0.12C17.53,18.74,17.52,18.78,17.52,18.81z
	 M17.59,8.76c0.32-0.58,0.76-1.02,1.31-1.34c0.56-0.32,1.13-0.47,1.73-0.46c0.09,0,0.19,0.01,0.3,0.03V7.3
	c-0.01,0.98,0.25,1.9,0.77,2.76c0.53,0.86,1.27,1.5,2.22,1.94c-0.19,0.41-0.46,0.78-0.8,1.11c-0.92-0.76-2-1.14-3.23-1.14h-0.31
	C19.27,10.66,18.61,9.59,17.59,8.76z"
			/>
		</svg>
	)
}

NightAltRainMix.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

NightAltRainMix.defaultProps = {
	color: '#000000',
	size: '30',
}

export default NightAltRainMix
