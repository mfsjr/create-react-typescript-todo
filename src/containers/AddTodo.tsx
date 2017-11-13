import * as React from 'react'
import {connect, Dispatch} from 'react-redux'
import {AddToDoText} from '../actions'
import {ActionId} from "../actions/index";
import {ToDo} from "../types/index";
import {Action} from "redux";

/**
 * Note that this component mixes presentation and container/controller logic
 * @param {any} dispatch
 * @returns {any}
 * @constructor
 */

export interface AddTodoProps {
    dispatch: Dispatch<Action & ToDo>
}

function AddTodoComponent (props: AddTodoProps)  {
    let input: HTMLInputElement;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    } // here is our replacement for an action creator function, a type-checked object literal
                    let action: AddToDoText = {type: ActionId.Add_ToDo, text: input.value};
                    props.dispatch(action);
                    input.value = ''
                }}
            >
                <input
                    ref={(node: HTMLInputElement) => {
                        input = node
                    }}
                />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}
const AddTodo = connect()(AddTodoComponent);

export default AddTodo