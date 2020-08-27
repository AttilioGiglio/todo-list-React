import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    render() {
        const {todo, onDelete} = this.props;
        return (
            <div className='todoList'>
                <ul style={{ padding: '0' }}>
                    <div className='todoItem'>
                        {todo.map((item,index)=>{
                            return <Todo item={item.todo} key={index} handleDelete={()=>{onDelete(index)}} />
                        })}
                    </div>
                </ul>
            </div>
        )
    }
}

export default TodoList;