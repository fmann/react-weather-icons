import React from 'react'
import PropTypes from 'prop-types'

const DirectionLeft = props => {
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
        d="M7.09,14.96c0,0.37,0.12,0.68,0.37,0.92l3.84,3.75c0.22,0.25,0.51,0.38,0.85,0.38c0.35,0,0.65-0.12,0.89-0.35
	s0.37-0.53,0.37-0.88s-0.12-0.65-0.37-0.89l-1.64-1.64h10.3c0.35,0,0.64-0.12,0.87-0.37s0.34-0.55,0.34-0.9s-0.11-0.65-0.34-0.9
	s-0.52-0.38-0.87-0.39H11.4l1.64-1.66c0.24-0.24,0.37-0.53,0.37-0.86c0-0.35-0.12-0.65-0.37-0.89S12.5,9.9,12.14,9.9
	c-0.32,0-0.61,0.14-0.85,0.41l-3.84,3.75C7.21,14.31,7.09,14.6,7.09,14.96z"
      />
    </svg>
  )
}

DirectionLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

DirectionLeft.defaultProps = {
  color: '#000000',
  size: '30',
}

export default DirectionLeft
