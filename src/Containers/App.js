import React, { Component } from 'react';
import './App.css';
import TodoForm from '../Components/TodoForm';
import TodoList from '../Components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: []
    };
}

handleSubmit = (newVal)=>{
  this.setState({data:[...this.state.data, newVal]})
}

  render() {
    const {data} =this.state;
    return (
      <div className='app'>
        <h1>To do list!</h1>
        <TodoForm handleSubmit= {this.handleSubmit} />
        <TodoList todo={data} />
      </div>
    )
  }
}
export default App;

