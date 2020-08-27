import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(){
        super();
        this.state={
            todo:'',
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e){
        console.log(e);
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleOnSubmit = (e) =>{
        e.preventDefault(e);
        this.props.onSubmit(this.state);
        this.setState(this.inputValue);
    }

    render() {
        return (
            <div className='form'>
                <form onSubmit={this.handleOnSubmit} className='form-user'>
                    <input className='input'
                     name='todo'
                     type='text' 
                     placeholder='Write down your next task!'
                     onChange={this.handleInput}
                     required />
                    <button className='btnInput' type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;