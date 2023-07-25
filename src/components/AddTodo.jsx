import React, { useState } from 'react'

function AddTodo({ handleAddTodo }) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        const value = inputValue.trim()
        if (value == "") return

        setInputValue("")
        handleAddTodo(inputValue)
    }

    return (
        <form className='new-todo-container'>
            <input type="text" className='new-todo-input' placeholder='add details' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button className='add-button' onClick={handleSubmit}>Add</button>
        </form>
    )
}

export default AddTodo