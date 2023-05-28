import React, { Component } from 'react'
import Card from '../Card';
// import { shops1 } from '../data1'

export class Main extends Component {

    render() {
        return (
            <main>
                <div className='main'>
                    <div className='sidebar'>
                    
                    </div>
                    <div className='sidebar right'>
                        {this.props.shopss.map(el=> (
                            <Card key={el.id} shopss={el} />
                        ))}
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;
