import {combineReducers, Reducer} from "redux";
import {VisibilityFilterId} from "../constants/index";
import {ActionId, AppAction} from "../actions/index";
import {DataState, ToDo} from "../types/index";

function visibilityFilter(filterState: VisibilityFilterId = VisibilityFilterId.ShowAll, action: AppAction)
    : VisibilityFilterId {
    switch(action.type) {
        case ActionId.Set_VisibilityFilter:
            return action.visibilityFilter; // type-safe access, action is a VisibilityFilter
        default:
            return filterState;
    }
}

export function todos(todosState: ToDo[] = [], action: AppAction): ToDo[] {
    switch(action.type) {
        case ActionId.Add_ToDo: { // 'action' is of type 'AddToDoText' via TypeScript discriminated union, eg: let a: AddToDoText = action
            let todo: ToDo = {text: action.text, id: todosState.length, completed: false, active: true};
            return [...todosState, todo];
        }
        case ActionId.ToggleTodo_Index: { // 'action' is a 'ToggleToDoIndex', eg this is an error:  console.log(action.text)
            // if 'Index' were complicated, we could extract it conveniently: let payload: Index = getActionPayload(action) as Index;
            todosState[action.index] = {...todosState[action.index], completed: !todosState[action.index].completed};
            return [...todosState];
        }
        default:
            return todosState;
    }
}

/**
 * Redux documentation refers to rootReducers as being the combination of all reducers,
 * so we use that terminology here.
 *
 * NOTE that the name of the properties MUST match the names of those in the DataState
 *
 * @type {Reducer<any>}
 */
export const rootReducer: Reducer<DataState> = combineReducers(
    {
        todos: todos,
        visibilityFilter: visibilityFilter
    }
);

