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

  componentDidUpdate() {
    localStorage.setItem('dataStore', JSON.stringify(this.state.data));
  };

  handleSubmit = (newVal) => {
    this.setState({ data: [...this.state.data, newVal] })
  };

  handleRemove = (index) => {
    const { data } = this.state;
    this.setState({
      data: data.filter((item, i) => {
        return i !== index
      }
  )
  })};

render() {
  const { data } = this.state;
  return (
    <div className='app'>
      <h1>To do list!</h1>
      <TodoForm handleSubmit={this.handleSubmit} />
      <TodoList todo={data} onDelete={this.handleRemove} />
    </div>
  )
}
}
export default App;

