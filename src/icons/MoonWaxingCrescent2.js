import React from 'react'
import PropTypes from 'prop-types'

const MoonWaxingCrescent2 = props => {
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
	s-3.61-1.51-5.65-1.51c1.1,0.59,2.07,1.32,2.89,2.19s1.47,1.82,1.95,2.83s0.83,2.03,1.05,3.07s0.34,2.09,0.34,3.16
	c0,0.91-0.04,1.76-0.13,2.54s-0.27,1.63-0.53,2.53s-0.62,1.71-1.06,2.43s-1.04,1.42-1.82,2.09S16.03,25.26,15.01,25.71z"
      />
    </svg>
  )
}

MoonWaxingCrescent2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MoonWaxingCrescent2.defaultProps = {
  color: '#000000',
  size: '30',
}

export default MoonWaxingCrescent2
