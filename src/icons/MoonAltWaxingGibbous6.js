import React from 'react'
import PropTypes from 'prop-types'

const MoonAltWaxingGibbous6 = props => {
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
        d="M3.74,14.44c0-1.53,0.3-3,0.89-4.39s1.4-2.59,2.4-3.6s2.2-1.81,3.6-2.4s2.85-0.89,4.37-0.89c1.53,0,3,0.3,4.39,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.39,0.89c-1.52,0-2.98-0.3-4.37-0.89s-2.59-1.4-3.6-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M6.42,14.44
	c0,0.78,0.05,1.5,0.15,2.15c0.1,0.65,0.29,1.35,0.57,2.09s0.66,1.41,1.13,2.03s1.09,1.24,1.88,1.86s1.7,1.2,2.77,1.71
	c0.67,0.15,1.37,0.22,2.09,0.22c1.37,0,2.67-0.27,3.91-0.8s2.31-1.25,3.22-2.15s1.62-1.97,2.15-3.22s0.8-2.55,0.8-3.9
	c0-1.82-0.45-3.5-1.35-5.05s-2.13-2.77-3.68-3.68s-3.23-1.35-5.05-1.35c-0.85,0-1.62,0.09-2.31,0.26C11.81,5.05,11.03,5.51,10.35,6
	S9.1,7.01,8.66,7.54S7.84,8.62,7.53,9.16s-0.54,1.12-0.69,1.74s-0.26,1.2-0.32,1.75S6.42,13.8,6.42,14.44z"
      />
    </svg>
  )
}

MoonAltWaxingGibbous6.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MoonAltWaxingGibbous6.defaultProps = {
  color: '#000000',
  size: '30',
}

export default MoonAltWaxingGibbous6
