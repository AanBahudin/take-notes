import { useNotesContext } from "../context/noteContext"

const EditModal = () => {

    const {noteId, editModal, editNote, handleTitle, handleText, title, note} = useNotesContext() 

    return (
        <section>
            <div id="edit-modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
                <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
                    <div className="relative bg-thirdly dark:bg-cardDark rounded-lg shadow">
                        <button onClick={() => editModal(false)} type="button" className="absolute top-3 right-2.5 text-white bg-transparent hover:bg-primary dark:text-darkSecondary dark:hover:bg-darkPrimary rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="authentication-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-center text-white dark:text-darkPrimary font-fredokaOne">Edit Note</h3>
                            <form onSubmit={() => editNote(noteId, title, note)} className="space-y-6">
                                <div>
                                    <label htmlFor="title" className="block mb-2 text-sm font-medium font-lexend text-white dark:text-darkSecondary">New Title</label>
                                    <input value={title} onChange={(event) => handleTitle(event.target.value)} type="text" name="title" id="email" className="px-3 py-2 mx-auto outline-none rounded-lg bg-transparent border-[1px] dark:bg-darkPrimary dark:border-none border-white text-white w-full placeholder:text-white placeholder:tracking-widest" autoComplete="off" required="" />
                                </div>
                                <div>
                                    <label htmlFor="notes" className="block mb-2 text-sm font-medium text-white dark:text-darkSecondary font-lexend">New Note</label>
                                    <textarea value={note} onChange={(event) => handleText(event.target.value)} name="notes" className="w-full resize-none mx-auto block p-2.5 text-sm text-white placeholder:text-white bg-transparent border-[1px] dark:bg-darkPrimary dark:border-none outline-none border-white rounded-lg" rows={5}></textarea>
                                </div>

                                <button type="submit" className="w-full text-white dark:text-darkSecondary bg-transparent border-white border-b-[1px] focus:ring-4 font-lexend focus:outline-none font-medium text-sm px-5 py-2.5 text-center">Save Changes</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div> 

        </section>
    )
}

export default EditModal