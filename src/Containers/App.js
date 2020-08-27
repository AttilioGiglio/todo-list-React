import React, { Component } from 'react';
import './App.css';
import TodoInput from '../Components/TodoInput.js';
import TodoList from '../Components/TodoList.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: [],
    }
  }
  
  render() {
    const element = <FontAwesomeIcon icon={faCoffee} />
    return (
      
      <div className='app'>
        <h1>To do list!</h1>
        <form className='form-user'>
          <input className='input' type='text' required />
          <button className='btnInput' type='submit'>Submit</button>
        </form>
        <div className='todoList'>
          <ul style={{padding:'0'}}>
          <div className='todo'>
            <li>Cooking</li>
            <button className='complete btn' type='submit'></button>
            <button className='delete btn' type='submit'></button>
          </div>
          <div className='todo'>
            <li>Cooking</li>
            <button className='complete btn' type='submit'></button>
            <button className='delete btn' type='submit'></button>
          </div>
          <div className='todo'>
            <li>Cooking</li>
            <button className='complete btn' type='submit'></button>
            <button className='delete btn' type='submit'></button>
          </div>
          </ul>
        </div>
      </div>
    )
  }
}
export default App;

