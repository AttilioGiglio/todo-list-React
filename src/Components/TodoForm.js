import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(){
        super();
        this.state={
            todo:'',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleOnSubmit = (e) =>{
        e.preventDefault(e);
        const {handleSubmit} = this.props;
        handleSubmit(this.state);
    }

    render() {
        return (
            <div className='form'>
                <form onSubmit={this.handleOnSubmit} className='form-user'>
                    <input className='input'
                     name='todo'
                     type='text' 
                     placeholder='Write down your next task!'
                     onChange={this.handleOnChange}
                     required />
                    <button className='btnInput' type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;