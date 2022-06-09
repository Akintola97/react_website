import React, { Component } from 'react'
import './PricingImage.css'

export class PricingImage extends Component {
  render() {
    return (
      <div className='pricing-img'>
<div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
</div>
      </div>
    )
  }
}

export default PricingImage