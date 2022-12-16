import React from "react";
import { Card, Loading } from "../components";
import {MdAdd} from 'react-icons/md'
import {EditModal, InfoModal, DeleteModal, Warning} from '../components'
import { useNotesContext } from "../context/noteContext";

const MyNotes = () => {

    const {errorMessage, notesLoading, error, allNotes, singleNote, addNote, handleTitle, handleText, handleSearchValue, title, note, searchValue, showEditModal, showInfoModal, showDeleteModal} = useNotesContext()

    const [rotate, setRotate] = React.useState(false)


    return (
        <section className="w-[90%] relative py-10 mx-auto h-fit min-h-[100vh] flex flex-col items-center justify-center">

            <button onClick={() => setRotate(!rotate)} className={`fixed group z-40 bottom-10 right-10 bg-primary dark:bg-darkPrimary h-16 w-16 drop-shadow-2xl duration-500 rounded-full justify-center items-center flex`}><MdAdd size={36} className={`fill-white dark:fill-darkSecondary ${rotate ? 'rotate-45' : null} duration-150`}/></button>

            {!rotate ? null : (
                <form onSubmit={e => addNote(e)} className="w-1/2 bg-primary dark:bg-cardDark mt-[10%] flex flex-col gap-y-8 rounded px-8 py-12 h-fit min-h-[70vh]">
                    {error ? <Warning warningMessage={errorMessage} /> : null}
                        <div className="flex flex-col gap-y-5 w-[80%] mx-auto">
                            <label className="text-white dark:text-darkSecondary font-lexend text-2xl tracking-widest my-auto text-center" htmlFor="title">Title</label>
                            <input name="title" placeholder="Title..." type='text' className={`px-3 py-2 mx-auto bg-primary dark:bg-darkPrimary dark:border-none outline-none  rounded-lg bg-transparent border-[1px] ${error ? 'border-red-400' : 'border-white '} text-white w-full placeholder:text-white dark:placeholder:text-darkSecondary placeholder:tracking-widest`} value={title} onChange={e => handleTitle(e.target.value)} />
                        </div>

                        <div className="flex flex-col gap-y-5 w-[80%] mx-auto">
                            <label htmlFor="message" className="text-white dark:text-darkSecondary font-lexend text-2xl tracking-widest my-auto text-center">Your message</label>
                            <textarea id="message" rows="6" className={`resize-none bg-primary dark:bg-darkPrimary dark:border-none w-full mx-auto block p-2.5 text-sm text-white placeholder:text-white bg-transparent border-[1px] outline-none ${error ? 'border-red-400' : 'border-white'} rounded-lg dark:placeholder:text-darkSecondary`} placeholder="Your notes..." value={note} onChange={e => handleText(e.target.value)}></textarea>
                        </div>

                        <button className="mt-6 duration-150 font-lexend hover:border-[#FFB562]text-white w-[40%] mx-auto border-b-[1px] text-xl text-white dark:text-darkSecondary dark:border-darkSecondary tracking-wider px-4 py-1 border-white" to='/editProfile'>Save note</button>
                    </form>
            )}

            {showEditModal ? <EditModal /> : null}
            {showInfoModal ? <InfoModal {...singleNote.note} /> : null}
            {showDeleteModal ? <DeleteModal /> : null}

            <h1 className={` ${rotate ? 'mt-[8%]' : 'mt-[15%]'} text-center text-4xl text-secondary dark:text-darkSecondary font-fredokaOne tracking-widest`}>All Notes</h1>
           
           <div className="flex items-center justify-center w-full mt-[1%]">
                <input value={searchValue} disabled={allNotes.length === 0 ? true : false} onChange={e => handleSearchValue(e.target.value)} placeholder="Search..." type='text' className={`bg-primary dark:bg-darkPrimary dark:border-none dark:placeholder:text-darkSecondary placeholder:text-white border-[1px] w-[40%] font-lexend rounded text-center text-white focus:border-white outline-none py-4 placeholder:text-white px-3`}/>
           </div>

           <h1 className="mt-[4%] mb-[1%] text-center text-lg text-secondary font-fredokaOne opacity-90 tracking-widest">{!searchValue ? `Total notes  : ${allNotes.length}` : null}</h1>

            {notesLoading ? <Loading /> : null}

            <div className="flex justify-start place-content-start items-stretch flex-wrap ">
                {/* check if there is no notes */}
                {allNotes.length === 0 ? <h1 className="text-white mx-auto opacity-90 text-4xl mt-[4%] text-center tracking-widest font-bold">there is no notes</h1> :
                    allNotes.filter((item) => {
                        return searchValue.toLowerCase() === '' ? allNotes : item.title.toLowerCase().includes(searchValue)
                    }).map((note) => {
                        return <Card key={note._id} {...note} />
                    })
                }
            </div>
        </section>
    )
}

export default MyNotes