import React,{Component} from 'react';
import TodoForm from './TodoForm';


class App extends Component{
    constructor(){
        super();
        this.state={data:[

        ]}
    }
    render(){
        return(
            <div className='app'>
                <TodoForm />
            </div>
        )
    }
}

export default App;