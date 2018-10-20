import React, { Component } from 'react';

import Button from './Button/Button';
import Status from './Status/Status';

export default class Counter extends Component{
    constructor() {
        super();
        this.state = { count: 0 };
    }


    handleClick = (operacion) => {
        let newCount = this.state.count;

        if (operacion === "+") newCount += 1;
        else newCount -= 1;

        if (newCount < 0) return false;

        this.setState({
            count: newCount
        })
    }

    render() {
        return (
            <div>
                <Button operacion="+" click={this.handleClick}></Button>
                <Status count={this.state.count}></Status>
                <Button operacion="-" click={this.handleClick}></Button>
            </div>
        )
    }
}