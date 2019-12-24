import React from 'react'
import PropTypes from 'prop-types'

const MoonAltWaxingCrescent6 = props => {
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
        d="M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M15.01,4.39
	c1.23,3.54,1.85,6.89,1.85,10.05c0,3.93-0.59,7.28-1.77,10.06c1.35-0.01,2.64-0.28,3.87-0.81s2.3-1.25,3.19-2.15s1.6-1.97,2.12-3.21
	s0.79-2.54,0.79-3.9s-0.27-2.66-0.8-3.9s-1.25-2.31-2.15-3.21s-1.97-1.61-3.21-2.15S16.36,4.39,15.01,4.39z"
      />
    </svg>
  )
}

MoonAltWaxingCrescent6.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MoonAltWaxingCrescent6.defaultProps = {
  color: '#000000',
  size: '30',
}

export default MoonAltWaxingCrescent6
