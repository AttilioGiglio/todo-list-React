import React, { Component } from 'react';


class Todo extends Component {
    render() {
        const {item} = this.props;
        return (
            <div className='todo'>
                <li>{item}</li>
            </div>
        )
    }
}

export default Todo;