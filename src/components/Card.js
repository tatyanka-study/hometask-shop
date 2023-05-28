import React, { Component } from 'react'
import Addbtn from './Addbtn'

export class Card extends Component {
  render() {
    return (
      <div className='card'>
          <figure>
                <img src={"./images/" + this.props.shopss.img} alt={this.props.shopss.title}/>                  
                <figcaption>{this.props.shopss.shopName}</figcaption>
          </figure>
          <div className='prise_block'>     
              <p>{this.props.shopss.title}</p>
              <p>price: {this.props.shopss.price} hrn</p>
          </div>
          <Addbtn />
      </div>
    )
  }
}

export default Card;