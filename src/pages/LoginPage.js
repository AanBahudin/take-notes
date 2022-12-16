import React from "react";
import {Link} from 'react-router-dom'
import {Loading} from '../components'
import {useAuthContext} from '../context/authContext'

const LoginPage = () => {

    const {loading, warning, warningMessage, showPassword, handleShowPassword, email, password, userEmail, userPassword, loginUser} = useAuthContext()

    return (
        <div className="p-10 h-fit min-h-[100vh] w-[50%] flex flex-col mx-auto justify-center items-center drop-shadow-2xl">
            <section className="mt-[20%]">
                <h1 className="font-fredokaOne text-4xl text-center duration-200 text-primary dark:text-darkPrimary">Lets get started</h1>
                <h5 className="font-lexend text-xl duration-200 text-secondary dark:text-darkSecondary">Login with your account and start writing notes!</h5>
            </section>

            <form onSubmit={(e) => loginUser(e)} className="w-full bg-primary dark:bg-cardDark duration-200 my-[10%] flex flex-col gap-y-8 rounded px-8 py-12 h-fit min-h-[70vh]">

                {warning ? <h1 className={`text-red-500 ${warning ? 'block' : 'hidden'} font-lexend text-center uppercase text-xl mt-[5%]`}>{warningMessage}</h1> : null}
                {loading ? <Loading /> : (
                    <>
                        <div className="flex flex-col gap-y-5 w-[70%] mx-auto">
                            <label className="text-white dark:text-darkSecondary duration-200 font-lexend text-2xl tracking-widest my-auto text-center" htmlFor="email">E-mail :</label>
                            <input className={`bg-primary dark:bg-darkPrimary border-[1px] dark:border-none duration-200 rounded text-center text-white focus:border-white outline-none ${warning ? 'border-red-400' : 'border-white'} py-2 placeholder:text-[#FFB562] px-3`} type='email' name="email" autoComplete="off" value={email} onChange={(e) => userEmail(e.target.value)}/>
                        </div>
        
                        <div className="flex flex-col gap-y-5 w-[70%] mx-auto">
                            <label className="text-white dark:text-darkSecondary duration-200 font-lexend text-2xl tracking-widest my-auto text-center" htmlFor="password">Password :</label>
                            <input className={`bg-primary dark:bg-darkPrimary dark:border-none border-[1px] duration-200 rounded text-center text-white focus:border-white outline-none ${warning ? 'border-red-400' : 'border-white'} py-2 placeholder:text-[#FFB562] px-3`} type={`${showPassword ? 'text' : 'password'}`} name="password" value={password} onChange={(e) => userPassword(e.target.value)} />
                        </div>
        
                        <div className="flex gap-x-5 w-[70%] mx-auto">
                            <input onChange={() => handleShowPassword(!showPassword)} name="show_password" type='checkbox' className="w-5 h-5 text-blue-100 my-auto bg-gray-100 rounded border-gray-300 "/>
                            <label className="text-white dark:text-darkSecondary duration-200 font-lexend text-md tracking-widest text-center" htmlFor="show_password">Show Password</label>
                        </div>
        
                        <button className="mt-8 w-[30%] mx-auto text-white dark:text-darkSecondary duration-200 border-b-[1px] text-xl uppercase font-lexend tracking-wider px-4 py-1 border-white dark:border-darkSecondary">Login</button>
        
                        <h1 className="text-secondary dark:text-darkSecondary duration-200 text-center text-xl mt-[4%]">Dont have any account? <Link className="text-white dark:text-darkPrimary" to='/signup'>SignUp</Link> Here </h1>
                    </>
                )}

            </form>
        </div>
    )
}

export default LoginPage