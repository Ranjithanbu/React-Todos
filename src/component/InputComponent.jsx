import React, { useState } from 'react';

const InputComponent = ({ createTodo }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [completeStatus, setCompleteStatus] = useState('false')
    const handleSubmit = () => {
        createTodo(title, description, completeStatus)
        setTitle('')
        setDescription('')
    }


    return (
        <div className="text-center">
            <h3>my Todo</h3>
            <input type='text' className="text-center m-2 rounded" placeholder='Name' value={title} onChange={(e) => { setTitle(e.target.value) }} />
            <input type="text" className="text-center m-2 rounded" placeholder='Description' value={description} onChange={(e) => { setDescription(e.target.value) }} />
            <button type="submit" className="text-center rounded" onClick={handleSubmit}>Add</button>
        </div>
    );
};

export default InputComponent;