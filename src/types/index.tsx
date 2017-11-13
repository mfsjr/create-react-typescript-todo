import {createStore, Store} from 'redux';
import {rootReducer} from "../reducers/index";
import {VisibilityFilterId} from "../constants/index";

/**
 * Interface that describes our state
 */
export interface DataState {
    todos: ToDo[],
    visibilityFilter: VisibilityFilterId
}

export interface ToDo extends ToDoText {
    completed: boolean,
    active: boolean
    id: number
}

export const store: Store<DataState> = createStore(rootReducer);

/**
 * Interfaces for action payloads
 */
export interface VisibilityFilter { visibilityFilter: VisibilityFilterId }
export interface Index            { index: number }
export interface ToDoText         { text: string }

