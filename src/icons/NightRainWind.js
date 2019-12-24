import React from 'react'
import PropTypes from 'prop-types'

const NightRainWind = props => {
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
        d="M4.11,17.02c0,1.13,0.33,2.13,1,3.01c0.67,0.88,1.54,1.48,2.62,1.8c0.1,0.01,0.18-0.01,0.25-0.08l1.13-1.46
	c-0.89,0-1.66-0.32-2.31-0.96s-0.97-1.41-0.97-2.31c0-0.86,0.29-1.61,0.86-2.24s1.29-0.98,2.14-1.05l0.52-0.07
	c0.11,0,0.16-0.05,0.16-0.14l0.07-0.56c0.12-1.1,0.59-2.02,1.41-2.76c0.82-0.74,1.78-1.11,2.88-1.11c1.11,0,2.08,0.37,2.91,1.1
	c0.83,0.73,1.3,1.64,1.4,2.74l0.07,0.59c0.02,0.11,0.09,0.17,0.21,0.17h1.63c0.9,0,1.67,0.33,2.32,0.98
	c0.65,0.66,0.98,1.44,0.98,2.35c0,0.84-0.28,1.58-0.85,2.21c-0.57,0.63-1.27,0.98-2.1,1.06c-0.48,0-0.78,0.09-0.91,0.28l-2.18,2.4
	c-0.16,0.18-0.22,0.39-0.19,0.62c0.03,0.23,0.13,0.45,0.31,0.63c0.13,0.17,0.33,0.25,0.59,0.23s0.46-0.15,0.6-0.38L20.64,22
	c0.82-0.08,1.58-0.35,2.28-0.82c0.69-0.47,1.24-1.07,1.65-1.8s0.6-1.52,0.6-2.36c0-0.63-0.14-1.32-0.43-2.08
	c0.77-0.98,1.15-2.08,1.15-3.32c0-0.98-0.24-1.87-0.71-2.69c-0.48-0.82-1.12-1.46-1.94-1.93S21.53,6.3,20.56,6.3
	c-1.57,0-2.87,0.57-3.9,1.71c-0.87-0.43-1.79-0.65-2.77-0.65c-1.43,0-2.7,0.44-3.79,1.33s-1.8,2.03-2.11,3.43
	c-1.14,0.26-2.07,0.84-2.79,1.75S4.11,15.83,4.11,17.02z M7.91,24.52c0,0.14,0.02,0.25,0.05,0.32c0.08,0.21,0.23,0.36,0.44,0.44
	c0.23,0.1,0.45,0.11,0.68,0.02c0.23-0.08,0.38-0.24,0.45-0.45c0.1-0.22,0.11-0.44,0.02-0.67c-0.09-0.23-0.24-0.38-0.46-0.46
	c-0.23-0.08-0.44-0.08-0.66,0c-0.21,0.08-0.37,0.23-0.47,0.45C7.93,24.25,7.91,24.37,7.91,24.52z M9.75,22.08
	c0,0.23,0.11,0.45,0.32,0.67c0.43,0.36,0.84,0.31,1.26-0.15l2.19-2.44c0.15-0.17,0.21-0.38,0.18-0.61
	c-0.03-0.23-0.13-0.42-0.31-0.57c-0.18-0.14-0.39-0.19-0.63-0.16c-0.24,0.03-0.43,0.13-0.59,0.29l-2.2,2.38
	C9.82,21.7,9.75,21.9,9.75,22.08z M10.39,27.01c0,0.12,0.03,0.23,0.08,0.32c0.09,0.23,0.22,0.38,0.41,0.46
	c0.12,0.05,0.24,0.07,0.37,0.07c0.07,0,0.18-0.02,0.32-0.06c0.21-0.09,0.36-0.24,0.44-0.45c0.1-0.2,0.11-0.41,0.02-0.64
	c-0.08-0.23-0.23-0.38-0.45-0.46c-0.22-0.11-0.44-0.12-0.66-0.03c-0.21,0.09-0.38,0.25-0.49,0.48C10.41,26.8,10.39,26.9,10.39,27.01
	z M12.06,24.62v0.13c0.02,0.24,0.12,0.44,0.32,0.6c0.14,0.18,0.34,0.26,0.6,0.24c0.25-0.02,0.45-0.15,0.6-0.38l4.22-4.91
	c0.16-0.18,0.22-0.39,0.2-0.64c-0.02-0.24-0.14-0.43-0.35-0.57c-0.17-0.14-0.38-0.21-0.6-0.19c-0.23,0.02-0.42,0.12-0.58,0.3
	l-4.22,4.92C12.12,24.25,12.06,24.41,12.06,24.62z M15.69,25.45c-0.07,0.23-0.07,0.43,0,0.62c0.09,0.22,0.24,0.38,0.45,0.49
	c0.11,0.05,0.23,0.07,0.36,0.07c0.06,0,0.16-0.02,0.3-0.06c0.23-0.09,0.38-0.24,0.46-0.46c0.1-0.23,0.11-0.44,0.03-0.66
	c-0.08-0.21-0.23-0.36-0.44-0.44c-0.23-0.11-0.45-0.12-0.66-0.03C15.97,25.07,15.8,25.23,15.69,25.45z M18.09,9.03
	c0.68-0.68,1.51-1.02,2.48-1.02c1.01,0,1.86,0.35,2.56,1.05s1.05,1.56,1.05,2.56c0,0.62-0.17,1.23-0.52,1.82
	c-0.97-0.98-2.16-1.46-3.55-1.46H19.8C19.55,10.84,18.98,9.86,18.09,9.03z"
      />
    </svg>
  )
}

NightRainWind.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

NightRainWind.defaultProps = {
  color: '#000000',
  size: '30',
}

export default NightRainWind
