import React, { useEffect } from 'react'
// external packages
import axios from 'axios'
// react hooks
import { useContext, useReducer } from 'react'
// reducer for context
import noteReducer from '../reducer/noteReducer'

const initialState = {
    allNotes: [],
    singleNote: [],
    getAllNotesError: [],
    getSingleNotesError: [],
    noteId: '',
    title: '',
    note: '',
    errorMessage: '',
    searchValue: '',
    accordion: {id: 0, status: true},
    error: false,
    notesLoading: false,
    showDeleteModal: false,
    showEditModal: false,
    showInfoModal: false,
    showDeleteAccountModal: false,
    showChangePasswordModal: false,
    showChangeProfileModal: false,
}

const NotesContext = React.createContext()

export const NotesProvider = ({children}) => {

    const [state, dispatch] = useReducer(noteReducer, initialState)
    const notesURL = 'api/v1/notes/'

    // FUNCTION TO HANDLE API REQUEST


    const getAllNotes = async() => {
            try {
                const allNotes = await axios.get(notesURL)
                dispatch({type: 'GET_ALL_NOTES', payload: allNotes.data})
                handleError(false)
            } catch (error) {
                handleError(true, error.response.data.msg)
            }
    }

    useEffect(() => {
        getAllNotes()
    }, [])

    const getSingelNotes = async(noteId) => {
        try {
            const singleNote = await axios.get(`${notesURL}/${noteId}`)
            dispatch({type: 'GET_SINGLE_NOTE', payload: singleNote.data})
            handleError(false)
        } catch (error) {
            handleError(true, error.response.data.msg)
        }
    }

    const deleteAccountFunc = async() => {
        try {
            await Promise.all(axios.delete(notesURL), axios.delete('api/v1/users'), axios.get('api/v1/auth'))
            handleError(false)
        } catch (error) {
            handleError(true, error.response.data.msg)
        }
    }

    const addNote = async(e) => {
        e.preventDefault()
        try {
            // eslint-disable-next-line
            const note = await axios.post('api/v1/notes/create', {title: state.title, notes: state.note})
            handleError(false)
            window.location.reload()
        } catch (error) {
            handleError(true, error.response.data.msg)
    }}

    const editNote = async(noteId, title, notes) => {
        try {
            // eslint-disable-next-line
            const editNote = await axios.patch(`api/v1/notes/${noteId}`, {title, notes})
            dispatch({type: 'EDIT_NOTE'})
            handleError(false)
        } catch (error) {
            handleError(true, error.response.data.msg)
        }
    }

    const deleteNote = async(id) => {
        handleLoading(true)
        try {
            // eslint-disable-next-line
            const deleteNote = await axios.delete(`api/v1/notes/${id}`)
            deleteModal(false)
            handleLoading(false)
            window.location.reload()
            handleError(false)
        } catch (error) {
            handleError(true, error.response.data.msg)
            handleLoading(false)
        }
    }


    // INPUT HANDLER


    const handleTitle = (value) => {
        dispatch({type: 'SET_TITLE', payload: value})
    } 

    const handleSearchValue = (value) => {
        dispatch({type: 'SEARCH_VALUE', payload: value})
    }

    const handleText = (value) => {
        dispatch({type: 'SET_NOTE', payload: value})
    }

    const handleError = (value, message) => {
        dispatch({type: 'SET_ERROR', payload: {value, message}})
    }


    // UI HANDLER

    
    const functionTheme = () => {
        const currentTheme = localStorage.getItem('theme')

        if(currentTheme === 'light_theme'){
            localStorage.setItem('theme', 'dark_theme')
            document.documentElement.classList.remove('dark')
            document.documentElement.classList.add('light')
        } else {
            localStorage.setItem('theme', 'light_theme')
            document.documentElement.classList.remove('light')
            document.documentElement.classList.add('dark')
        }
    }

    useEffect(() => {
        functionTheme()
    }, [])

    const showAccordion = (id, status) => {
        dispatch({type: 'SET_ACCORDION', payload: {id, status}})
    }

    const editModal = (value) => {
        dispatch({type: "EDIT_MODAL", payload: value})
    }

    const showDeleteAccountModalFunc = (value) => {
        dispatch({type: 'SHOW_DELETE_ACCOUNT_MODAL', payload: value})
    }

    const deleteModal = (value) => {
        dispatch({type: 'DELETE_MODAL', payload: value})
    }

    const infoModal = (value) => {
        dispatch({type: 'INFO_MODAL', payload: value})
    }

    const changePasswordModal = (value) => {
        dispatch({type: 'CHANGE_PASS_MODAL', payload: value})
    }

    const editProfileModal = (value) => {
        dispatch({type: 'EDIT_PROFILE_MODAL', payload: value})
    }


    // USER HANDLER

    const itemId = (value) => {
        dispatch({type: 'SET_ID', payload: value})
    }

    const handleLoading = (value) => {
        dispatch({type: 'SET_LOADING', payload: value})
    }

    return (
        <NotesContext.Provider value={{
            ...state,
            functionTheme,
            getSingelNotes,
            handleText,
            handleTitle,
            addNote,
            editNote,
            deleteNote,
            deleteModal,
            editModal,
            infoModal,
            showDeleteAccountModalFunc,
            changePasswordModal,
            editProfileModal,
            deleteAccountFunc,
            itemId,
            showAccordion,
            getAllNotes,
            handleSearchValue
        }}>
            {children}
        </NotesContext.Provider>
    )
}

export const useNotesContext = () => {
    return useContext(NotesContext)
}