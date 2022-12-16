import React from "react";
import { AiFillDelete, AiFillEdit, AiOutlineEllipsis } from 'react-icons/ai'
import { useNotesContext } from "../context/noteContext";
import { useAuthContext } from "../context/authContext";

const Card = ({_id = 'default', title = 'default', note = 'default'}) => {

    const {itemId, deleteModal, editModal, infoModal, getSingelNotes} = useNotesContext()
    const {tokenStatus} = useAuthContext()

    const strictDelete = (noteId) => {
        if(tokenStatus) {
            itemId(noteId)
            deleteModal(true)
        } return
    }

    const strictEdit = (noteId) => {
        if(tokenStatus) {
            itemId(noteId)
            editModal(true)
        } return
    }

    const strictInfo = (noteId) => {
        if(tokenStatus) {
            infoModal(true)
            itemId(noteId)
            getSingelNotes(noteId)
        } return
    }

    const newText = note.substring(0, 180)
    return (
        <div className="bg-primary dark:bg-cardDark my-[1%] backdrop-blur-3xl relative hover:drop-shadow-2xl px-2 pt-2 flex flex-col flex-shrink basis-[19rem] flex-wrap self-stretch rounded w-[20%] mx-auto duration-150">
            <section className="my-[3%] border-b-[1px] border-white/70 pb-3">
                <div className="px-3 flex justify-evenly items-center self-end">
                    <button onClick={() => strictDelete(_id)}> <AiFillDelete size={20} className="fill-red-400" /> </button>
                    <button onClick={() => strictEdit(_id)}> <AiFillEdit size={20} className="fill-green-400" /> </button>
                    <button onClick={() => strictInfo(_id)}> <AiOutlineEllipsis size={20} className="fill-white" /> </button>
                </div>
            </section>
    
            <h1 className="font-lexend text-white dark:text-darkPrimary mt-2 py-2 pl-3 text-[1.3vw]">{title}</h1>
            <h5 className="font-lexend text-secondary dark:text-darkSecondary mt-3 mb-[20%] text-sm font-[400] px-3">{newText}</h5>
        </div>
    )
}

export default Card