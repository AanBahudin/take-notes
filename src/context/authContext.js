import axios from 'axios'
import React, { useEffect, useReducer, useContext } from 'react'
import authReducer from '../reducer/authReducer'
import { useNavigate } from 'react-router-dom'

const initialState = {
    tokenStatus: false,
    showPassword: false,
    warning: false,
    success: false,
    loading: true,
    userProfile: [],
    email: '',
    password: '',
    createName: '',
    createEmail: '',
    createPassword: '',
    newPassword: '',
    oldPassword:'',
    confirmPassword: '',
    warningMessage: '',
}

const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {

    // VARIABELS
    const [state, dispatch] = useReducer(authReducer, initialState)
    const userBaseURL = 'api/v1/users'
    const authBaseURL = 'api/v1/auth'
    const navigate = useNavigate()

    
    //* AUTH FUNCTION
    
    const getTokenUser = () => {
        const token = document.cookie.includes('token=')
        dispatch({type: 'GET_TOKEN', payload: token})
    }
    
    //* API REQUEST FUNCTION FOR AUTH

    const loginUser = async(e) => {
        e.preventDefault()
        handleLoading(true)
        try {
            // eslint-disable-next-line
            const postUser = await axios.post(`${authBaseURL}/login`, {email: state.email, password: state.password})
            dispatch({type: 'AUTH_OK'})
            
            setTimeout(() => {
                getTokenUser()
                handleLoading(false)
                navigate('/')
                window.location.reload()
            }, 1500)
            
        } catch (error) {
            dispatch({type: 'AUTH_FAIL', payload: {status: true, msg: error.response.data.msg}})
            handleLoading(false)
            // setWarning(error.response.data.msg);
        }
}

    const logoutUser = async() => {
        const URL = 'api/v1/auth'
        handleLoading(true)
        try {
            // eslint-disable-next-line
            const response = await axios.get(URL)
            handleLoading(false)
        } catch (error) {
            console.log(error);
            handleLoading(false)
        }
    }


    //* API REQUEST FUNCTION FOR CUSTOMIZE USER PROFILE

    const getUserProfile = async() => {
        handleLoading(true)
        try {
                const response = await axios.get(userBaseURL)
                dispatch({type: 'USER_PROFILE', payload: response.data})
                handleLoading(false)
            } catch (error) {
                handleLoading(false)
            }
        }

    const updateUser = async(userId, name, email) => {
        handleLoading(true)
        try {
            // eslint-disable-next-line
            const response = await axios.patch(`api/v1/users/${userId}`, {newName: name, newEmail: email})
            dispatch({type: 'UPDATE_USER'})
            setTimeout(() => {
                handleSuccess(false)
                handleLoading(false)
                window.location.reload()
            }, 3000)
        } catch (error) {
            handleLoading(false)
            console.log(error);
        }
    }

    const updateUserPassword = async(event, userId, newPass, oldPass, confirmPassword) => {
        event.preventDefault()
        handleLoading(true)
        if(confirmPassword !== newPass) {
            handleWarning(true)
        } 
        else {
            try {
                // eslint-disable-next-line
                const response = await axios.patch(`api/v1/users/updatePassword/${userId}`, {oldPassword: oldPass, newPassword: newPass})
                dispatch({type: 'UPDATE_PASSWORD'})
                handleLoading(false)
                setTimeout(() => {
                    handleSuccess(false)
                    window.location.reload()
                }, 3000)
            } catch (error) {   
                handleLoading(false)
                handleWarning(true)
            }
        }

    }


    //? HANDLER INPUT FUNCTION

    const handleNewPassword = (value) => {
        dispatch({type: 'NEW_PASSWORD', payload: value})
    }

    const handleOldPassword = (value) => {
        dispatch({type: 'OLD_PASSWORD', payload: value})
    }

    const handleConfirmPassword = (value) => {
        dispatch({type: 'CONFIRM_PASSWORD', payload: value})
    }

    const userName = (value) => {
        dispatch({type: 'CREATE_NAME', payload: value})
    }

    const userEmail = (value) => {
        dispatch({type: 'SET_EMAIL', payload: value})
    }

    const userPassword = (value) => {
        dispatch({type: 'SET_PASSWORD', payload: value})
    }

    const createEmailFunc = (value) => {
        dispatch({type: 'CREATE_EMAIL', payload: value})
    }

    const createPasswordFunc = (value) => {
        dispatch({type: 'CREATE_PASSWORD', payload: value})
    }
    
    
    //? UI HANDLER FUNCTION
    
    const handleLoading = (value) => {
        dispatch({type: 'SET_LOADING', payload: value})
    }

    const handleSuccess = (value) => {
        dispatch({type: 'SUCCESS_STATUS', payload: value})
    }

    const handleWarning = (value) => {
        dispatch({type: 'SET_WARNING', payload: value})
    }

    const handleShowPassword = (value) => {
        dispatch({type: 'SET_SHOW_PASSWORD', payload: value})
    }

//TODO: GETTING TOKEN INFORMATION EVERY PAGE LOAD

    useEffect(() => {
        getTokenUser()
        getUserProfile()
    }, [])


    return (
        <AuthContext.Provider value={{
            ...state,
            getTokenUser,
            userPassword,
            userEmail,
            userName,
            createEmailFunc,
            createPasswordFunc,
            logoutUser,
            loginUser,
            getUserProfile,
            updateUser,
            updateUserPassword,
            handleNewPassword,
            handleOldPassword,
            handleConfirmPassword,
            handleWarning,
            handleSuccess,
            handleShowPassword
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext)
}