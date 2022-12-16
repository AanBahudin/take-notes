import { useNotesContext } from "../context/noteContext"
import moment from 'moment'


const InfoModal = ({title = 'default', note = 'default', createdAt='default'}) => {

    const {infoModal} = useNotesContext()
    const formatDate = moment(createdAt).add(10, 'days').calendar(); 

    return (
        <div id="medium-modal" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex">
        <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
            <div className="relative bg-thirdly dark:bg-cardDark rounded-lg shadow">
                <div className="flex justify-between items-center p-5 rounded-t border-b">
                    <article>
                        <h3 className="text-xl font-medium text-white dark:text-darkPrimary font-fredokaOne ">
                            {title}
                        </h3>
                        <h3 className="text-white dark:text-darkSecondary font-lexend">{formatDate}</h3>
                    </article>
                    <button onClick={() => infoModal(false)} type="button" className="text-white dark:text-darkSecondary hover:bg-primary dark:hover:bg-darkPrimary bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="medium-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span> 
                    </button>
                </div>
                <div className="p-6 space-y-6">
                    <p className="text-base leading-relaxed text-white dark:text-darkSecondary font-lexend ">
                        {note}
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default InfoModal