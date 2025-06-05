import { createContext, useContext } from 'react'
//create a context API
export const todoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "task here",
            completed: false,
        },
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})

//create a hook to accesse properties and methods
export const useTodo = () => {
    return useContext(todoContext)
}

// create a provider
export const TodoProvider = todoContext.Provider

