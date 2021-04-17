import { types } from "./actionTypes";

const INITIAL_STATE = {
    theme: '',
    editor: '',
    id: ''
}
//handle actions, shallow copy state and add/change action item (data)
const state = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'THEME':
            return {
                ...state,
                theme: action.item
            }
        case 'EDITOR':
            return {
                ...state,
               editor: action.item
            }
        case 'ID':
            return {
                ...state,
                id: action.item
            }
        default:
            return state
    }
}

export default state;