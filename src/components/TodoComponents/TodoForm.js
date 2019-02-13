import React from 'react';
const TodoForm = props => {
    return (
        <form className = 'form' onSubmit = {props.addNew}>
        {}
        <input
            value = {props.taskName}
            type = 'text'
            name = 'taskName'
            placeholder = 'Enter Task Here'
            onChange = {props.handleChanges}
            className = {'input-field'}
        />
        <button type = 'submit'>Add Task</button>
        <button onClick={props.clear}>Clear Tasks</button>
        </form>
    )
}

export default TodoForm;