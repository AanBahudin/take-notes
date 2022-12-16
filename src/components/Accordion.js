import { useNotesContext } from '../context/noteContext'
import {IoIosArrowDropdown, IoIosArrowDropup} from 'react-icons/io'
import {accordionData} from '../utils'

const Accordion = () => {

  const {accordion, showAccordion} = useNotesContext()

    return (

      <section className='pb-[10%]'>
        <h1 className='my-[3%] duration-200 font-fredokaOne text-4xl text-primary dark:text-darkPrimary text-center tracking-widest'>FAQ</h1>
        <div className="w-[90%] mx-auto duration-200 bg-secondary dark:bg-darkSecondary rounded p-5 h-fit ">
          {accordionData.map((item, index) => {
            return (
              <div key={index} onClick={() => showAccordion(index, !accordion.status)}>
                <article className="bg-white duration-200 dark:bg-cardDark mt-2 p-4 fill-primary flex justify-between" >
                    <h1 className="font-lexend text-primary dark:text-darkPrimary duration-200 text-xl">{item.title}</h1>
                    {accordion.id === index && accordion.status ? <IoIosArrowDropup className='fill-primary dark:fill-darkPrimary duration-200' onClick={() => showAccordion(index, !accordion.status)} size={34}/> :<IoIosArrowDropdown className='fill-primary dark:fill-darkPrimary duration-200' onClick={() => showAccordion(index, !accordion.status)} size={34}/>}
                </article>

                <article className={`bg-white/[30%] dark:bg-darkPrimary/30 duration-200 backdrop-blur-3xl mt-0 p-4 ${accordion.id === index && accordion.status ? 'block' : 'hidden'} rounded`}>
                    <h5 className="font-lexend text-white dark:text-darkPrimary duration-200 text-lg">{item.answer}</h5>
                </article>
              </div>
            )
          })}
        </div>
        </section>
    )
}

export default Accordion