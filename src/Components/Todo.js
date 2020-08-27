import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import './Todo.css';
    

class Todo extends Component {
    render() {
        const {item} = this.props;
        return (
            <div className='todo'>
                <li>{item}</li>
                <button className='btn'>
                {<FontAwesomeIcon icon={faPen} className='icon' />}
                </button>
                <button className='btn'>
                {<FontAwesomeIcon icon={faTrash} className='icon'/>}
                </button>
            </div>
        )
    }
}

export default Todo;