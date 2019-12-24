import React from 'react'
import PropTypes from 'prop-types'

const MoonWaxingCrescent1 = props => {
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
        d="M15.01,25.71c2.04,0,3.92-0.5,5.65-1.51s3.09-2.37,4.09-4.1s1.51-3.61,1.51-5.65s-0.5-3.92-1.51-5.65s-2.37-3.09-4.09-4.09
	s-3.61-1.51-5.65-1.51c1.32,0.52,2.48,1.2,3.47,2.06s1.78,1.79,2.35,2.82s0.99,2.07,1.27,3.13s0.41,2.14,0.41,3.24
	c0,0.64-0.02,1.26-0.07,1.84c-0.05,0.58-0.15,1.2-0.29,1.87s-0.33,1.28-0.56,1.86s-0.54,1.15-0.92,1.74s-0.83,1.11-1.35,1.58
	s-1.14,0.92-1.87,1.33S15.9,25.42,15.01,25.71z"
      />
    </svg>
  )
}

MoonWaxingCrescent1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MoonWaxingCrescent1.defaultProps = {
  color: '#000000',
  size: '30',
}

export default MoonWaxingCrescent1
