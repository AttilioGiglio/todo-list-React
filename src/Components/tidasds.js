import React,{Component} from 'react';

class TodoForm extends Component{
constructor(){
    super();
    this.state={
        data2: ''
    }
}
handleOnChange= (e) => {
    const {name,value} = e.target;
    setState({[name]:value})
}
handleOnSubmit=(e)=>{
    e.preventDefault();
    const{handleSubmit}=this.props;
    
}
render(){
    return(
        <div onSubmit={this.handleOnSubmit} className='button'>
        <form>
            <input
            name='input'
            placeholder='writedown'
            onChange={this.handleOnChange}
            required
            />
            <button>
                click
            </button>
        </form>
        </div>
    )
}
}

