import asset from '../images/asset.png'

const About = () => {
    return (
        <section className="p-[5%] grid w-full mx-auto dark:bg-darkBackground auto-cols-auto auto-rows-auto">

            <section className="row-start-1 row-end-2 flex items-center justify-center flex-col col-start-1 min-w-[50%] col-end-3">
                <h1 className="font-fredokaOne text-primary dark:text-darkPrimary text-5xl">Start writing all your note</h1>
                <p className="pr-7 font-lexend w-[80%] text-center text-secondary dark:text-darkSecondary leading-relaxed mt-5">is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </section>
        </section>
    )
}

export default About