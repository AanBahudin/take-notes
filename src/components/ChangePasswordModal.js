import React, {useState} from 'react'
import {useNotesContext} from '../context/noteContext'
import { useAuthContext } from '../context/authContext'

const ChangePasswordModal = ({userId}) => {

    const {changePasswordModal} = useNotesContext()
    const {warning, newPassword, oldPassword, confirmPassword,  handleOldPassword, handleNewPassword, handleConfirmPassword, updateUserPassword} = useAuthContext()
    const [showOldPass, setShowOldPass] = useState(false)
    const [showNewPass, setShowNewPass] = useState(false)

    return (
        <section>
            <div id="edit-modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-thirdly dark:bg-cardDark duration-200 rounded-lg shadow">
                        
                        <button onClick={() => changePasswordModal(false)} type="button" className="absolute top-3 right-2.5 text-white dark:text-darkSecondary bg-transparent hover:bg-primary dark:hover:bg-darkPrimary rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="authentication-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>

                        <div className="py-6 px-6 lg:px-8 font-lexend text-white">
                            <h3 className="mb-4 text-xl font-fredokaOne text-center dark:text-darkPrimary duration-200 ">Change Password</h3>

                            <form onSubmit={(event) => {
                                updateUserPassword(event, userId, newPassword, oldPassword, confirmPassword)
                                changePasswordModal(false)
                                }} className="space-y-6 mt-5">
                                {/* OLD PASSWORD INPUT */}
                                <div>
                                    <label htmlFor="oldPassword" className="block mb-2 text-sm text-white dark:text-darkSecondary duration-200 ">Old Password</label>
                                    <input value={oldPassword} onChange={(event) => handleOldPassword(event.target.value)}  type={`${showOldPass ? 'text' : 'password'}`} name="oldPassword" id="oldPassword" className="px-3 py-2 mx-auto outline-none rounded-lg bg-transparent dark:bg-darkPrimary dark:border-none border-[1px] duration-200  border-white text-white w-full" autoComplete="off" required="" />
                                </div>

                                {/* SHOW OLD PASSWORD */}
                                <section onChange={(e) => setShowOldPass(!showOldPass)} className="flex flex-row gap-x-3 mt-1">
                                    <input name="show_password" type='checkbox' className="px-3 py-2"/>
                                    <label className="text-white dark:text-darkSecondary duration-200  text-md tracking-widest text-center" htmlFor="show_password">Show Password</label>
                                </section>

                                {/* NEW PASSWORD INPUT */}
                                <div>
                                    <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-white dark:text-darkPrimary duration-200 ">New Password</label>
                                    <input value={newPassword} onChange={(event) => handleNewPassword(event.target.value)} type={`${showNewPass ? 'text' : 'password'}`} name="newPassword" id="newPassword" className="px-3 py-2 mx-auto outline-none rounded-lg bg-transparent dark:bg-darkPrimary dark:border-none duration-200 border-[1px] border-white text-white w-full" autoComplete="off" required="" />
                                </div>

                                {/* WARNING IF CONFIRM PASSWORD IS NOT MATCH WITH NEW PASSWORD */}
                                {warning ? <h1 className='m-2 text-md text-red-400'>Password is not match! Try Again</h1> : null}

                                {/* CONFIRM NEW PASSWORD INPUT */}
                                <div>
                                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-white dark:text-darkSecondary duration-200 ">Confirm Password</label>
                                    <input value={confirmPassword} onChange={(event) => handleConfirmPassword(event.target.value)} type={`${showNewPass ? 'text' : 'password'}`} name="confirm_password" id="newPassword" className="px-3 py-2 mx-auto outline-none rounded-lg bg-transparent dark:bg-darkPrimary dark:border-none duration-200 border-[1px] border-white text-white w-full" autoComplete="off" required="" />
                                </div>

                                {/* SHOW NEW PASSWORD */}
                                <section className="flex flex-row gap-x-3 mt-1">
                                    <input onChange={(e) => setShowNewPass(!showNewPass)} name="show_password" type='checkbox'  className="px-3 py-2"/>
                                    <label className="text-white text-md tracking-widest text-center duration-200 dark:text-darkSecondary" htmlFor="show_password">Show Password</label>
                                </section>

                                <button type="submit" disabled={(!confirmPassword || !newPassword || !oldPassword) ? true : false} className="w-full text-white dark:text-darkSecondary bg-transparent  disabled:hidden border-white dark:border-darkSecondary border-b-[1px] hover:border-white focus:ring-4 focus:outline-none font-medium text-sm px-3 py-2.5 text-center">Save Changes</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </section>  
    )
}

export default ChangePasswordModal