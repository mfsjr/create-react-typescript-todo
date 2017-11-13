import {connect, Dispatch} from 'react-redux'
import {VisibilityFilterId} from "../constants/index";
import {DataState, ToDo} from "../types/index";
import TodoList, {TodoListProps} from "../components/TodoList";
import {ActionId, ToggleToDoIndex} from "../actions/index";

const getVisibleTodos = (todos: ToDo[], filter: VisibilityFilterId) : ToDo[] => {
    switch (filter) {
        case VisibilityFilterId.ShowCompleted:
            return todos.filter(t => t.completed);
        case VisibilityFilterId.ShowActive:
            return todos.filter(t => !t.completed);
        case VisibilityFilterId.ShowAll:
        default:
            return todos
    }
};

/**
 * Note that the object returned must use the same property names as
 * @param {DataState} state
 * @returns {{todos: ToDo[]}}
 */
export function mapStateToProps(state: DataState): Partial<TodoListProps> {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
    }
}

export function mapDispatchToProps(dispatch: Dispatch<ToggleToDoIndex>): Partial<TodoListProps> {
    // here is a replacement for an action creator function, a type-checked object literal
    let fn = (id: number): ToggleToDoIndex => { return {type: ActionId.ToggleTodo_Index, index: id}};
    return {
        onTodoClick: (id: number) => dispatch(fn(id))
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList