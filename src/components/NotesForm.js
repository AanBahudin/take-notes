import React from 'react'
import axios from 'axios'

const Form = () => {

    const getNotes = async() => {
        try {
            const response = await axios.get('/api/v1/notes/')
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const logout = async() => {
        try {
            await axios.get('/api/v1/auth')
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button onClick={getNotes}>GET NOTES</button>
                <button onClick={logout}>Logout</button>

                
            </form>
        </div>
    )
}

export default Form;