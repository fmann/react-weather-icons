import React from 'react'
import PropTypes from 'prop-types'

const Tsunami = props => {
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
        d="M5.07,21.24c0-0.16,0.06-0.3,0.17-0.42c0.12-0.12,0.25-0.18,0.41-0.18h0.4c-0.21-0.66-0.39-1.35-0.53-2.07
	c-0.21-1.1-0.32-2.1-0.32-2.99c0-1.71,0.3-3.32,0.91-4.81C6.73,9.31,7.59,8.06,8.7,7.01c1.12-1.06,2.42-1.87,3.9-2.42
	c1.51-0.57,3.14-0.86,4.91-0.86c1.06,0,2.06,0.09,3,0.28c0.94,0.22,1.85,0.56,2.73,1.03l1.7,0.91l-1.88,0.39
	c-0.58,0.13-0.98,0.39-1.2,0.78c-0.16,0.32-0.15,0.69,0.03,1.11l0.41,0.95l-1.02,0.05c-0.43,0.03-0.83,0.12-1.18,0.27
	c-0.33,0.16-0.52,0.32-0.58,0.5c-0.11,0.23,0.01,0.56,0.36,1l0.81,0.96l-1.26,0.18c-1.55,0.23-2.82,0.55-3.81,0.96
	s-1.77,0.94-2.35,1.59c-0.56,0.62-0.98,1.42-1.25,2.37c-0.27,0.96-0.42,2.15-0.45,3.59h5.26v-2.78l-0.38,0.23
	c-0.14,0.09-0.29,0.11-0.45,0.07c-0.17-0.04-0.29-0.13-0.37-0.28c-0.09-0.14-0.11-0.29-0.08-0.45s0.12-0.29,0.27-0.38l3.82-2.38
	l0.02-0.02c0.01,0,0.01,0,0.01-0.01h0.02c0.01,0,0.02,0,0.03-0.01c0.07-0.02,0.14-0.05,0.23-0.07h0.06
	c0.01,0.01,0.02,0.02,0.03,0.02h0.07c0,0.01,0.01,0.01,0.02,0.01h0.03l0.02,0.01h0.02c0.01,0.01,0.02,0.02,0.02,0.03h0.02
	c0.01,0,0.01,0,0.01,0.01c0.02,0,0.03,0,0.03,0.01c0.01,0,0.02,0,0.03,0.01l0.02,0.01l3.82,2.35c0.14,0.09,0.23,0.22,0.27,0.38
	c0.03,0.17,0.01,0.32-0.08,0.46c-0.08,0.14-0.2,0.23-0.37,0.26s-0.32,0.01-0.45-0.08l-0.31-0.19v2.77h0.96
	c0.16,0,0.29,0.06,0.4,0.18c0.11,0.12,0.16,0.26,0.16,0.42c0.01,0.17-0.05,0.31-0.16,0.43c-0.11,0.12-0.25,0.18-0.4,0.18H5.65
	c-0.16,0-0.3-0.06-0.41-0.17C5.13,21.56,5.07,21.42,5.07,21.24z M6.62,15.58c0,0.71,0.1,1.62,0.3,2.73
	c0.15,0.81,0.33,1.52,0.54,2.12h2.69c0.05-1.45,0.2-2.65,0.45-3.59c0.35-1.27,0.88-2.31,1.6-3.09c0.73-0.82,1.69-1.47,2.89-1.96
	c0.82-0.34,1.86-0.63,3.11-0.87l-0.08-0.25c-0.1-0.46-0.07-0.87,0.09-1.23c0.22-0.51,0.65-0.92,1.28-1.21
	c0.07-0.03,0.13-0.06,0.19-0.07c-0.86-0.2-1.73-0.25-2.6-0.14c-0.99,0.12-1.92,0.41-2.78,0.85c-1.11,0.58-2.11,1.41-3.01,2.48
	c-0.1,0.12-0.23,0.18-0.38,0.18c-0.12,0-0.22-0.03-0.31-0.1c-0.1-0.09-0.16-0.2-0.17-0.34s0.02-0.26,0.11-0.37
	c1-1.19,2.11-2.1,3.34-2.73c0.98-0.49,2.03-0.81,3.14-0.95c0.57-0.07,1.12-0.08,1.67-0.02c0.54,0.06,0.92,0.12,1.14,0.17
	s0.37,0.09,0.45,0.12l0.08,0.03c0.05-0.31,0.13-0.59,0.24-0.84c0.16-0.29,0.37-0.56,0.64-0.8c-0.3-0.09-0.65-0.19-1.04-0.28
	c-0.8-0.18-1.7-0.26-2.69-0.26c-1.58,0-3.05,0.26-4.42,0.77c-1.34,0.51-2.48,1.22-3.42,2.14c-0.98,0.91-1.73,2-2.23,3.26
	C6.89,12.65,6.62,14.07,6.62,15.58z M18.05,20.64h3.88v-3.52l-1.98-1.21l-1.9,1.19V20.64z"
      />
    </svg>
  )
}

Tsunami.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Tsunami.defaultProps = {
  color: '#000000',
  size: '30',
}

export default Tsunami
