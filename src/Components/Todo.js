import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import './Todo.css';
    

class Todo extends Component {
    constructor(){
        super();
        this.state={
            onEdit:false,
            editVal:this.props.item,
        }
    }
    render() {
        const {item, handleDelete} = this.props;
        if(this.state.onEdit){
            return (
                <div className='todo'>
                    <li>
                    <input 
                    type='text'
                    name='editVal'   
                    onChange={this.handleEditValue}
                    /> 
                    {item}
                    </li>
                    <button className='btn'>
                    {<FontAwesomeIcon icon={faPen} className='icon' />}
                    </button>
                    <button className='btn' onClick={handleDelete}>
                    {<FontAwesomeIcon icon={faTrash} className='icon'/>}
                    </button>
                </div>
            )
        }
       else{
           return(

           )
       }
    }
}

export default Todo;