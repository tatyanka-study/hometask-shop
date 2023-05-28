import React, { Component } from 'react';
import Card from '../Card';
import Shopsname from '../Shopsname';
// import { shops1 } from '../data1'

const Main = ({shopsList}) => {
    
    return (
        <main>
            <div className='main'>
                <div className='sidebar'>
                    <Shopsname />
                </div>
                <div className='sidebar right'>
                    {shopsList.map(shop=> (
                        <Card key={shop.id} shopsList={shop} />
                    ))}
                </div>
            </div>
        </main>
    )   
}

export default Main;
