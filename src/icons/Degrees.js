import React from 'react'
import PropTypes from 'prop-types'

const Degrees = props => {
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
        d="M13.19,9.21c0-0.5,0.18-0.93,0.53-1.28c0.36-0.36,0.78-0.53,1.28-0.53c0.49,0,0.92,0.18,1.27,0.53
	c0.35,0.36,0.53,0.78,0.53,1.28s-0.18,0.93-0.53,1.29c-0.35,0.36-0.78,0.54-1.27,0.54c-0.49,0-0.92-0.18-1.28-0.54
	S13.19,9.71,13.19,9.21z M14.07,9.21c0,0.26,0.09,0.48,0.27,0.67c0.19,0.19,0.41,0.28,0.67,0.28c0.26,0,0.48-0.09,0.67-0.28
	s0.28-0.41,0.28-0.67c0-0.26-0.09-0.48-0.28-0.66c-0.19-0.18-0.41-0.28-0.67-0.28c-0.26,0-0.48,0.09-0.67,0.27
	C14.16,8.72,14.07,8.94,14.07,9.21z"
      />
    </svg>
  )
}

Degrees.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Degrees.defaultProps = {
  color: '#000000',
  size: '30',
}

export default Degrees
