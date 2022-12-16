const noteReducer = (state, action) => {
    if(action.type === 'GET_ALL_NOTES'){
        return {...state, allNotes: action.payload}
    }
    if(action.type === 'GET_SINGLE_NOTE') {
        return {...state, singleNote: action.payload}
    }
    if(action.type === 'SET_TITLE'){
        return {...state, title: action.payload}
    }
    if(action.type === 'SET_NOTE') {
        return {...state, note: action.payload}
    }
    if(action.type === 'EDIT_MODAL') {
        return {...state, showEditModal: action.payload}
    }
    if(action.type === 'DELETE_MODAL') {
        return {...state, showDeleteModal: action.payload}
    }
    if(action.type === 'INFO_MODAL') {
        return {...state, showInfoModal: action.payload}
    }
    if(action.type === 'EDIT_PROFILE_MODAL') {
        return {...state, showChangeProfileModal: action.payload}
    }
    if(action.type === 'CHANGE_PASS_MODAL') {
        return {...state, showChangePasswordModal: action.payload}
    }
    if(action.type === 'SHOW_DELETE_ACCOUNT_MODAL') {
        return {...state, showDeleteAccountModal: action.payload}
    }
    if(action.type === 'SET_ID') {
        return {...state, noteId: action.payload}
    }
    if(action.type === 'EDIT_NOTE') {
        return {...state, title: '', note:''}
    }
    if(action.type === 'SEARCH_VALUE') {
        return {...state, searchValue: action.payload}
    }
    if(action.type === 'SET_ERROR') {
        return {...state, error: action.payload.value, errorMessage: action.payload.message}
    }
    if(action.type === 'SET_LOADING') {
        return {...state, notesLoading: action.payload}
    }
    if(action.type === 'SET_ACCORDION') {
        const {id, status} = action.payload
        return {...state, accordion: {id, status}}
    }
    if(action.type === 'SET_THEME') {
        return {...state, darkTheme: localStorage.setItem('theme', action.payload)}
    }
}

export default noteReducer;