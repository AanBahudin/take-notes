import {useNotesContext} from '../context/noteContext'
import { useAuthContext } from '../context/authContext'

const EditProfileModal = ({userId}) => {

    const {createName, email, userName, userEmail, updateUser} = useAuthContext()
    const {editProfileModal} = useNotesContext()

    const submit = (userId, createName, email) => {
        updateUser(userId, createName, email)
    }

    return (
        <section>
            <div id="edit-modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-thirdly dark:bg-cardDark duration-200 rounded-lg shadow">

                        <button onClick={() => editProfileModal(false)} type="button" className="absolute top-3 right-2.5 duration-200 text-white dark:text-darkSecondary bg-transparent hover:bg-primary dark:hover:bg-darkPrimary rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="authentication-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>

                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-fredokaOne text-center duration-200 text-white dark:text-darkPrimary">Change Profile</h3>

                            <form onSubmit={(e) => {
                                e.preventDefault()
                                editProfileModal(false)
                                submit(userId, createName, email)
                                }} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-darkSecondary duration-200 font-lexend">New Name</label>
                                    <input value={createName} onChange={(event) => userName(event.target.value)}  type="text" name="name" id="name" className="px-3 py-2 mx-auto outline-none rounded-lg bg-transparent border-[1px] border-white text-white dark:border-none duration-200 dark:bg-darkPrimary w-full" autoComplete="off" required="" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-darkSecondary duration-200 font-lexend">New Email</label>
                                    <input value={email} onChange={(event) => userEmail(event.target.value)} type="email" name="email" id="email" className="px-3 py-2 mx-auto outline-none rounded-lg bg-transparent border-[1px] border-white duration-200 text-white dark:border-none dark:bg-darkPrimary w-full" autoComplete="off" required="" />
                                </div>
                                <button disabled={!createName && !email ? true : false} type="submit" className="w-full text-white dark:text-darkSecondary duration-200 disabled:hidden bg-transparent border-b-[1px] border-white focus:ring-4 focus:outline-none font-medium text-sm px-5 py-2.5 text-center">Save Changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}

export default EditProfileModal