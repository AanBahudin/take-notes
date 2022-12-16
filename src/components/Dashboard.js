import { useAuthContext } from "../context/authContext"
import { useNotesContext } from "../context/noteContext"
import {HomeNotes, Loading} from '../components'

const Dashboard = () => {

    const {loading, userProfile} = useAuthContext()
    const {allNotes} = useNotesContext()

    const filtering = allNotes.sort((a, b) => {
        return  new Date(b.createdAt) - new Date(a.createdAt)
    })

    if(loading) {
        return (
            <div className="flex mt-[20%] items-center justify-center my-auto">
                <Loading />
            </div>
        )
    }

    return (
        <div className="h-fit min-h-[100vh] duration-200 w-[90%] mx-auto flex flex-col item-center">
            <section className="mt-[10%] duration-200 text-white text-2xl font-lexend dark:text-darkSecondary">
                <h1 className="text-primary duration-200 dark:text-darkPrimary">Welcome <span className="text-secondary duration-200">{userProfile.name} !</span></h1>
                <h1 className="text-primary duration-200 dark:text-darkSecondary">Let's see what you have in here</h1>
            </section>

            <h1 className="text-primary duration-200 dark:text-darkPrimary font-fredokaOne text-4xl uppercase mt-[10%] text-center tracking-widest">Recent Notes</h1>

            <section className="mt-[6% flex justify-between items-center">
            {allNotes.length === 0 ? <h1 className="text-white dark:text-darkPrimary duration-200 mx-auto opacity-90 text-4xl mt-[4%] text-center tracking-widest font-bold">There is no notes recently added:(</h1> : filtering.slice(0,3).map(note => (<HomeNotes key={note._id} {...note} />))}
            </section>


        </div>
    )
}

export default Dashboard