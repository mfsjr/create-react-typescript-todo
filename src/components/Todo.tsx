import * as React from 'react';

export interface TodoProps {
    completed: boolean,
    text: string,
    onClick: () => any
}

function Todo({onClick, completed, text}: TodoProps) {
    //return 0;
    return (
        <li
            onClick={onClick}
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
        >
            {text}
        </li>
    );
}

export default Todo;

