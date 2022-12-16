import React from 'react'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import { useNotesContext } from '../context/noteContext'
import {useAuthContext} from '../context/authContext'

const Navbar = () => {

    const {tokenStatus, logoutUser} = useAuthContext()
    const {functionTheme} = useNotesContext()
    
    return (
        <div className='w-full py-5 px-5 mx-auto rounded-b-md absolute top-0 z-20 flex flex-row items-center justify-between'>
            <h1 className='text-3xl text-primary dark:text-darkPrimary duration-200 font-fredokaOne tracking-wider'>Notes</h1>
             
             <section className='w-[40%] font-lexend flex justify-evenly items-center text-primary dark:text-darkPrimary'>
                <a className='hover:pb-1 text-xl duration-200 ' href='/'>{tokenStatus ? 'Dashboard' : 'Home'}</a>
                {tokenStatus ? <a className='hover:pb-1 text-xl duration-200 ' href='/profile'>Profile</a> : null}
                {tokenStatus ? <a className=' hover:pb-1 text-xl duration-200 ' href='/notes'>Notes</a> : null}
                {tokenStatus ? <a onClick={logoutUser} className=' hover:pb-1 text-xl duration-200 ' href='/'>Logout</a> : <a className=' hover:pb-1 text-xl duration-200 ' href='/login'>Login</a>}

                <button className='duration-200 fill-white my-auto' onClick={() => functionTheme()}>{localStorage.getItem('theme') === 'dark_theme' ? <BsFillSunFill size={30} /> : <BsFillMoonFill size={30} />}</button>
             </section>
        </div>
    )
}
export default Navbar;