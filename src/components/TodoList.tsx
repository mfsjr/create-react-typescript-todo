import * as React from 'react';
import Todo from './Todo';
import {ToDo} from "../types/index";

export interface TodoListProps {
    todos: ToDo[],
    onTodoClick: (id: number) => any
}

/**
 * Write the list items out iteratively, assigning todo
 * @param {TodoProps[]} todos
 * @param {(index: number) => any} onTodoClick
 * @returns {any}
 * @constructor
 */
function TodoList({todos = [], onTodoClick}: TodoListProps) {
    return (
        <ul>
            {todos.map((todo) => (
                <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
            ))}
        </ul>
    );
}

export default TodoList;

