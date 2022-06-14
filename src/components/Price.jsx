import React from 'react'

const price = ({price}) => {
  return (
    <span style={{color:"green"}}>{(+price).toFixed(1)}0₪</span>
  )
}

export default price