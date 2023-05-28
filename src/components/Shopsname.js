import React, { Component } from 'react'

export class Shopsname extends Component {
constructor(props) {
    super(props)
    this.state = {
        shopsnames: [
            {
                key: 'all',
                name: 'All shops'
            },
            {
                key: 'McDonald\'s',
                name: 'McDonald\'s'
            },
            {
                key: 'KFC',
                name: 'KFC'
            },
            {
                key: 'Dogz&Burgerz',
                name: 'Dogz&Burgerz'
            },
            {
                key: 'Ikura',
                name: 'Ikura'
            },
         ]
    }
   

}

  render() {
    return (
      <div>
        {this.state.shopsnames.map(el =>(
            <div className='shop' key={el.key} onClick={() => this.props.selectedShop(el.key)}><p>{el.name}</p></div>
        ))}
      </div>
    )
  }
}

export default Shopsname;