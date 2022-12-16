const authReducer = (state, action) => {
    if(action.type === 'GET_TOKEN'){
        return {...state, tokenStatus: action.payload}
    }
    if(action.type === 'SET_EMAIL'){
        return {...state, email: action.payload}
    }
    if(action.type === 'SET_PASSWORD'){
        return {...state, password: action.payload}
    }
    if(action.type === 'GET_PROFILE') {
        return {...state, user: action.payload}
    }
    if(action.type === 'CREATE_NAME'){
        return {...state, createName: action.payload}
    }
    if(action.type === 'CREATE_EMAIL'){
        return {...state, createEmail: action.payload}
    }
    if(action.type === 'CREATE_PASSWORD'){
        return {...state, createPassword: action.payload}
    }
    if(action.type === 'USER_PROFILE') {
        return {...state, userProfile: action.payload}
    }
    if(action.type === 'UPDATE_USER') {
        return {...state, email:'', createName:'', success: true}
    }
    if(action.type === 'UPDATE_PASSWORD') {
        return {...state, newPassword:'', oldPassword:'', confirmPassword:'', warning: false, success:true}
    }
    if(action.type === 'NEW_PASSWORD') {
        return {...state, newPassword: action.payload}
    }
    if(action.type === 'OLD_PASSWORD') {
        return {...state, oldPassword: action.payload}
    }
    if(action.type === 'CONFIRM_PASSWORD') {
        return {...state, confirmPassword: action.payload}
    }
    if(action.type === 'SET_WARNING') {
        return {...state, warning: action.payload}
    }
    if(action.type === 'SUCCESS_STATUS') {
        return {...state, success: action.payload}
    }
    if(action.type === 'AUTH_FAIL') {
        return {...state, warning: action.payload.status, warningMessage: action.payload.msg}
    }
    if(action.type === 'AUTH_OK') {
        return {...state, warning: false, warningMessage: ''}
    }
    if(action.type === 'SET_SHOW_PASSWORD') {
        return {...state, showPassword: action.payload}
    }
    if(action.type === 'SET_LOADING') {
        return {...state, loading: action.payload}
    }
}

export default authReducer;