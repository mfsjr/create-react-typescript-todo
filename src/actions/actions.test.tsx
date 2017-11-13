import {ActionId, AddToDoText, ToggleToDoIndex} from "./index";

describe('action - AddTodo', () => {
    it('should create an action to add a todo', () => {
        const text = 'Finish docs';
        const expectedAction = {
            type: ActionId.Add_ToDo,
            text
        };
        let action: AddToDoText = {type: ActionId.Add_ToDo, text: text};
        expect(action).toEqual(expectedAction);
    })
});

describe('action - ToggleTodo', () => {
    it('should create an action to toggle a todo', () => {
        const _index = 1;
        const expectedAction = {
            type: ActionId.ToggleTodo_Index,
            index: _index
        };
        let action: ToggleToDoIndex = {type: ActionId.ToggleTodo_Index, index: _index};
        expect(action).toEqual(expectedAction);
    })
});