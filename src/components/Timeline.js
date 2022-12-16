import {timelineData} from '../utils'

const Timeline = () => {
    return (
        <ol className="items-center w-[80%] mx-auto my-10 sm:flex">
            {timelineData.map(item => {
                return (
                    <li key={item.id} className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-900 rounded-full ring-0 dark:bg-darkPrimary sm:ring-8 shrink-0">
                                <svg aria-hidden="true" className="w-3 h-3 text-primary dark:text-darkPrimary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                            </div>
                            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-secondary"></div>
                        </div>
                        <div className="sm:pr-8 mt-4">
                            <time className="font-lexend text-xl text-primary dark:text-darkPrimary">{item.title}</time>
                            <p className="font-lexend font-normal text-secondary dark:text-darkSecondary">{item.text}</p>
                        </div>
                    </li>   
                )
            })}
        </ol>

    )
}

export default Timeline