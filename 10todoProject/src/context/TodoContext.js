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
});
// create a procider
export const todoProvider = todoContext.Provider
//create a hook to accesse properties and methods
export default function useToDo() {
    return useContext(todoContext)
}


