import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'
import { useAuthContext } from '../context/authContext'

const Signup = () => {

    const {warning, createName, createEmail, createPassword, confirmPassword, createEmailFunc, createPasswordFunc, handleConfirmPassword, handleWarning, userName} = useAuthContext()
    const [isError, setError] = useState(false)
    const [warningMSG, setWarning] = useState('')
    const [isChecked, setChecked] = useState(false)
    const URL = '/api/v1/auth/create'
    const navigate = useNavigate()
    const createAccount = async(e) => {
        e.preventDefault()
        if(confirmPassword !== createPassword) {
            handleWarning(true)
        } else {
            try {
                //eslint-disable-next-line
                const postUser = await axios.post(URL, {name: createName, email: createEmail, password: createPassword})
                setError(false)
                handleWarning(false)
                navigate('/login')
                
            } catch (error) {
                setWarning(error.response.data.msg);
                setError(true)
            }
        }
}

    return (
        <div className="p-10 h-fit min-h-[100vh] w-[50%] flex flex-col mx-auto justify-center items-center drop-shadow-2xl">
            <section className="mt-[20%]">
                <h1 className="font-fredokaOne text-4xl duration-200 text-center text-primary dark:text-darkPrimary">Make account & join with us</h1>
                <h5 className="font-lexend text-xl duration-200 text-secondary dark:text-darkSecondary">No need much time, and start writing your own note for yourself</h5>
            </section>

            <form onSubmit={(e) => createAccount(e)} className="w-full bg-primary dark:bg-cardDark duration-200 my-[10%] flex flex-col gap-y-8 rounded px-8 py-12 h-fit min-h-[70vh]">

                {isError ? <h1 className="text-[#DC3545] font-bold text-2xl mt-[10%]">{warningMSG}</h1> : null}

                <div className="flex flex-col gap-y-5 w-[70%] mx-auto">
                    <label className="text-white duration-200 dark:text-darkSecondary font-lexend text-2xl tracking-widest my-auto text-center" htmlFor="name">Name</label>
                    <input className={`bg-primary dark:bg-darkPrimary dark:border-none border-[1px] rounded text-center text-white focus:border-white outline-none ${warning ? 'border-red-400' : 'border-white'} py-2 placeholder:text-[#FFB562] px-3`} type='text' name="name" autoComplete="off" value={createName} onChange={(e) => userName(e.target.value)} />
                </div>

                <div className="flex flex-col gap-y-5 w-[70%] mx-auto">
                    <label className="text-white dark:text-darkSecondary duration-200 font-lexend text-2xl tracking-widest my-auto text-center" htmlFor="email">E-mail</label>
                    <input className={`bg-primary  dark:bg-darkPrimary dark:border-none border-[1px] rounded text-center text-white focus:border-white outline-none ${warning ? 'border-red-400' : 'border-white'} py-2 placeholder:text-[#FFB562] px-3`} type='email' name="email" autoComplete="off" value={createEmail} onChange={(e) => createEmailFunc(e.target.value)} />
                </div>

                <div className="flex flex-col gap-y-5 w-[70%] mx-auto">
                    <label className="text-white dark:text-darkSecondary duration-200 font-lexend text-2xl tracking-widest my-auto text-center" htmlFor="password">Password</label>
                    <input className={`bg-primary dark:bg-darkPrimary dark:border-none border-[1px] rounded text-center text-white focus:border-white outline-none ${warning ? 'border-red-400' : 'border-white'} py-2 placeholder:text-[#FFB562] px-3`} type={`${isChecked ? 'text' : 'password'}`} name="password" value={createPassword} onChange={(e) => createPasswordFunc(e.target.value)} />
                </div>

                <div className="flex flex-col gap-y-5 w-[70%] mx-auto">
                    <label htmlFor="confirm_password" className="text-white dark:text-darkSecondary duration-200 font-lexend text-2xl tracking-widest my-auto text-center">Confirm Password</label>
                    <input value={confirmPassword} onChange={(event) => handleConfirmPassword(event.target.value)} type={`${isChecked ? 'text' : 'password'}`} name="confirm_password" id="newPassword" className={`bg-primary dark:bg-darkPrimary  dark:border-none border-[1px] rounded text-center text-white focus:border-white outline-none ${warning ? 'border-red-400' : 'border-white'} py-2 placeholder:text-[#FFB562] px-3`} autoComplete="off" required="" />
                </div>

                <div className="flex gap-x-5 w-[70%] mx-auto">
                    <input onChange={(e) => setChecked(!isChecked)} name="show_password" type='checkbox'  className="w-4 h-4 duration-200 text-blue-600 my-auto bg-gray-100 rounded dark:bg-darkPrimary"/>
                    <label className="text-white dark:text-darkSecondary duration-200 font-lexend text-md tracking-widest text-center" htmlFor="show_password">Show Password</label>
                </div>

                <button disabled={(!createName || !createEmail || !createPassword || !confirmPassword) ? true : false} className="mt-8 duration-200 w-[30%] mx-auto text-white dark:text-darkSecondary border-b-[1px] text-xl uppercase font-lexend hover:bg-secondary tracking-wider px-4 py-1 border-white">SIGN UP</button>

                <h1 className="text-secondary dark:text-darkSecondary duration-200 text-center text-xl mt-[4%]">Already have account? <Link className="text-white duration-200 dark:text-darkPrimary" to='/login'>Login</Link> Here </h1>

            </form>

        </div>
    )
}

export default Signup