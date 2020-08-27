import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Todo.css';
    

class Todo extends Component {
    constructor(){
        super();
        this.state={
            onEdit:false,
            editVal:'',
        }
    }

    handleEditValue = (e) =>{
        const{name,value} = e.target;
        this.setState({
            [name]: value
        })
    };

    onEdit = () => {
        this.setState({onEdit:true})
    };

    handleCancel = () => {
        this.setState({onEdit:false})
    };

    // handleOnEdit = (editVal,index) =>{
    //     const data = this.state;
    //     data.forEach((item,i) => {
    //         if(i === index){
    //             item.todo = edit.Val;
    //         }
    //     })
    // }

    // handleSave = () => {
    //     const {editVal} = this.state;
    //     if(editVal == ''){this.setState({editVal:this.props.item})}
    //     else{this.props.handleEdit(editVal, this.props.id)}
    //     this.setState({onEdit: False})
    //     }
    

    render() 
    {
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
                    </li>
                    <button className='btn'>
                    {<FontAwesomeIcon icon={faSave} className='icon' />}
                    </button>
                    <button className='btn' onClick={this.handleCancel}>
                    {<FontAwesomeIcon icon={faTimes} className='icon'/>}
                    </button>
                </div>
            )
        }
       else{
           return(
                <div className='todo'>
                    <li>
                    {item}
                    </li>
                    <button className='btn' onClick={this.onEdit}>
                    {<FontAwesomeIcon icon={faPen} className='icon' 
                    // onClick={this.handleSave}
                    />}
                    </button>
                    <button className='btn' onClick={handleDelete} onEdit={this.handleOnEdit}>
                    {<FontAwesomeIcon icon={faTrash} className='icon'/>}
                    </button>
                </div>
           )
       }
    }
}

export default Todo;