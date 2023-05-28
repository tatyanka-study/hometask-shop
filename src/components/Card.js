import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
      <div>{this.props.shopss.title}</div>
    )
  }
}

export default Card