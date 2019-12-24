import React from 'react'
import PropTypes from 'prop-types'

const WindBeaufort9 = props => {
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
        d="M5.09,13.5c0,0.18,0.06,0.31,0.17,0.4c0.12,0.11,0.26,0.17,0.42,0.17h10.4c0.18,0,0.33,0.06,0.46,0.19
	c0.13,0.12,0.2,0.28,0.2,0.46s-0.07,0.34-0.2,0.47s-0.28,0.2-0.46,0.2c-0.18,0-0.34-0.07-0.47-0.21c-0.13-0.11-0.26-0.16-0.4-0.16
	c-0.16,0-0.3,0.05-0.41,0.16c-0.11,0.11-0.16,0.24-0.16,0.39c0,0.16,0.06,0.3,0.17,0.41c0.36,0.36,0.78,0.53,1.27,0.53
	c0.49,0,0.91-0.17,1.26-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.92-0.52-1.27c-0.35-0.35-0.77-0.53-1.26-0.53H5.68
	c-0.16,0-0.3,0.06-0.42,0.17C5.14,13.21,5.09,13.34,5.09,13.5z M5.09,11.48c0,0.17,0.06,0.3,0.17,0.39
	c0.12,0.11,0.26,0.16,0.42,0.16h13.81c0.49,0,0.92-0.18,1.27-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.91-0.52-1.26
	s-0.77-0.52-1.27-0.52c-0.49,0-0.91,0.17-1.27,0.51c-0.11,0.12-0.16,0.27-0.16,0.42c0,0.16,0.05,0.3,0.16,0.4
	c0.11,0.1,0.24,0.15,0.4,0.15c0.15,0,0.29-0.05,0.41-0.16c0.12-0.12,0.27-0.18,0.45-0.18c0.17,0,0.33,0.06,0.46,0.18
	c0.13,0.12,0.2,0.27,0.2,0.45c0,0.18-0.07,0.34-0.2,0.47c-0.13,0.13-0.28,0.2-0.46,0.2H5.68c-0.16,0-0.3,0.06-0.42,0.17
	C5.14,11.18,5.09,11.32,5.09,11.48z M18.18,19.76c0.02,0.39,0.11,0.73,0.28,1.02c0.17,0.29,0.39,0.51,0.67,0.67
	c0.28,0.16,0.58,0.27,0.9,0.34s0.67,0.11,1.04,0.11c0.57,0,1.09-0.11,1.55-0.32c0.47-0.21,0.84-0.48,1.13-0.81
	c0.29-0.33,0.53-0.7,0.73-1.13s0.33-0.84,0.41-1.23s0.12-0.78,0.12-1.15c0-1.06-0.27-1.87-0.81-2.43c-0.54-0.57-1.26-0.85-2.17-0.85
	c-0.93,0-1.72,0.28-2.36,0.85c-0.64,0.57-0.97,1.32-0.97,2.24c0,0.66,0.21,1.2,0.63,1.62c0.42,0.42,0.96,0.63,1.63,0.63
	c0.36,0,0.7-0.07,1.05-0.22c0.34-0.14,0.58-0.33,0.72-0.54h0.03c-0.12,0.48-0.31,0.88-0.58,1.22c-0.27,0.34-0.62,0.51-1.06,0.51
	c-0.29,0-0.48-0.03-0.59-0.1c-0.12-0.11-0.21-0.25-0.24-0.42H18.18z M20.75,16.88c0-0.31,0.1-0.58,0.29-0.81
	c0.19-0.23,0.48-0.34,0.86-0.34c0.34,0,0.6,0.09,0.77,0.26c0.18,0.17,0.27,0.43,0.27,0.76c0,0.09-0.02,0.2-0.06,0.31
	s-0.1,0.23-0.18,0.36c-0.08,0.12-0.2,0.23-0.37,0.31s-0.35,0.12-0.56,0.12s-0.39-0.04-0.54-0.11c-0.15-0.07-0.25-0.17-0.32-0.29
	c-0.07-0.12-0.11-0.22-0.14-0.31S20.75,16.96,20.75,16.88z"
      />
    </svg>
  )
}

WindBeaufort9.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

WindBeaufort9.defaultProps = {
  color: '#000000',
  size: '30',
}

export default WindBeaufort9
