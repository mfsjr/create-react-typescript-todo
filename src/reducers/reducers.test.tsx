import * as reducers from '../reducers';
import {ActionId} from "../actions/index";
import {AddToDoText, ToggleToDoIndex} from "../actions/index";

describe('todos reducer', () => {
    it('should return the initial state', () => {

        expect(reducers.todos(undefined, {type: ActionId.Null})).toEqual([]);
    });


    it('should handle Add and Toggle ToDo', () => {
        let expectedState = [
            {
                text: 'Run the tests',
                completed: false,
                active: true,
                id: 0
            }
        ];

        let action: AddToDoText = {type: ActionId.Add_ToDo, text: "Run the tests" };
        expect(reducers.todos([], action)).toEqual(expectedState);

        let newState = [
            {
                text: 'Use Redux',
                completed: false,
                active: true,
                id: 1
            }
        ];
        let action2: AddToDoText = {type: ActionId.Add_ToDo, text: 'Use Redux'};
        expect(reducers.todos(expectedState, action2)
        ).toEqual([
            ...expectedState,
            ...newState
        ]);

        let currentState = [...expectedState, ...newState];
        let toggledState = [ {
            text: 'Use Redux',
            completed: true,
            active: true,
            id: 1
        } ];
        expectedState = [...expectedState, ...toggledState];
        let actionToggle: ToggleToDoIndex = {type: ActionId.ToggleTodo_Index, index: 1};
        expect(reducers.todos(currentState, actionToggle)
        ).toEqual(expectedState);
    })
});