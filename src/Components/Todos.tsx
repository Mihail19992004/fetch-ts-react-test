import React, {FC} from "react";
import '../Style/todoslist.scss'
import {ITodos} from "../Types/interfaces";

interface TodoListProps {
    todos: ITodos[]
}


export const TodosList: FC<TodoListProps> = ({todos}) => {
    return (
        <div className='container__todos'>
            {
                todos.map(todo=> (
                    <div key={todo.id}>
                        <h2>{todo.title}</h2>
                        <p>done: {(todo.completed).toString()}</p>
                    </div>
                ))
            }
        </div>
    )
}