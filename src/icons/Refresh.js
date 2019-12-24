import React from 'react'
import PropTypes from 'prop-types'

const Refresh = props => {
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
        d="M9.77,15.53c0,0.94,0.24,1.82,0.71,2.62c0.47,0.8,1.11,1.44,1.91,1.9c0.8,0.47,1.67,0.7,2.61,0.7
	c0.96,0,1.83-0.23,2.63-0.69c0.8-0.46,1.43-1.09,1.89-1.89c0.46-0.8,0.69-1.68,0.69-2.63c0-0.24-0.08-0.44-0.24-0.61
	c-0.16-0.17-0.35-0.25-0.59-0.25c-0.23,0-0.43,0.08-0.6,0.25c-0.17,0.17-0.25,0.37-0.25,0.61c0,0.98-0.35,1.82-1.04,2.51
	c-0.69,0.69-1.53,1.04-2.51,1.04c-0.97,0-1.79-0.35-2.47-1.04c-0.68-0.69-1.02-1.53-1.02-2.51c0-0.85,0.26-1.62,0.79-2.31
	s1.14-1.06,1.84-1.1l-0.38,0.37c-0.16,0.18-0.24,0.37-0.24,0.58c0,0.22,0.08,0.42,0.24,0.6c0.36,0.35,0.77,0.35,1.21,0l1.84-1.82
	c0.16-0.12,0.24-0.33,0.24-0.62c0-0.26-0.08-0.45-0.24-0.57L14.97,8.8c-0.18-0.16-0.37-0.24-0.57-0.24c-0.25,0-0.46,0.08-0.63,0.25
	c-0.17,0.17-0.25,0.37-0.25,0.6c0,0.24,0.08,0.45,0.24,0.61l0.38,0.36c-1.25,0.22-2.29,0.82-3.12,1.8S9.77,14.27,9.77,15.53z"
      />
    </svg>
  )
}

Refresh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Refresh.defaultProps = {
  color: '#000000',
  size: '30',
}

export default Refresh
