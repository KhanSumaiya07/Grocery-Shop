import React from 'react'
import Card from './cards/card'

const Product = () => {
  const style = {
    padding:'50px 30px'
  }
  return (
    <div style={style}>
      <h1>Product</h1>
      <Card/>
    </div>
  )
}

export default Product
