import types from './actionTypes'


//action creators needed for the redux store to get/add data
export const changeTheme = item => ({
    type: types.THEME, item
})

export const changeEditorState = item => ({
    type: types.EDITOR, item
})
