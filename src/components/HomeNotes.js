import React from "react";
import moment from "moment";

const Card = ({_id = 'default', title = 'default', note = 'default', createdAt}) => {

    const newText = note.substring(0, 180)
    const formatDate = moment(createdAt).endOf('day').fromNow();


    return (
        <div className="bg-primary dark:bg-cardDark duration-200 my-[5%] backdrop-blur-3xl relative hover:drop-shadow-2xl px-2 pt-2 flex flex-col flex-shrink basis-[19rem] flex-wrap self-stretch rounded w-[20%] mx-auto">
            <h1 className="font-lexend duration-200 text-white dark:text-darkPrimary mt-2 py-2 pl-3 text-[1.3vw]">{title}</h1>
            <h3 className="font-lexend duration-200 text-secondary dark:text-darkSecondary text-sm pl-3">{formatDate}</h3>
            <h5 className="font-lexend duration-200 text-white dark:text-darkSecondary mt-3 mb-[20%] text-sm font-[400] px-3">{newText} ...</h5>
        </div>
    )
}

export default Card