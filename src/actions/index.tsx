import {Index, ToDoText, VisibilityFilter} from "../types/index";
import {Action} from "redux";

/**
 * Action enum names can be anything that you want, but in the interest of keeping
 * things easy-to-understand here, I am naming them with two parts, one before the underbar
 * and one after.
 *
 * The part before the underbar describes what the action is doing.
 * The part after is the name of the interface that describes the action's payload.
 */
export enum ActionId {
    Null,
    Add_ToDo,
    ToggleTodo_Index,
    Set_VisibilityFilter
}

interface DefinedAction<A extends ActionId> extends Action { type: A }

/**
 * Convert the action into a payload
 * @param {AppAction} action
 * @returns {Object}
 */
export function getActionPayload(action: AppAction) {
    let result = (({type, ..._data}) => {return _data})(action);
    return result;
}

/**
 * Actions are defined here to extend both our action id's and action payloads,
 * then added to the AppAction type union below.
 */
export interface AddToDoText extends DefinedAction<ActionId.Add_ToDo>, ToDoText {}
export interface ToggleToDoIndex extends DefinedAction<ActionId.ToggleTodo_Index>, Index {}
export interface SetVisibilityFilter extends DefinedAction<ActionId.Set_VisibilityFilter>, VisibilityFilter {}
export interface Null extends DefinedAction<ActionId.Null> {} // used in testing

/**
 * A discriminated union, using type = ActionId enum value
 */
export type AppAction = AddToDoText | ToggleToDoIndex | SetVisibilityFilter | Null;


