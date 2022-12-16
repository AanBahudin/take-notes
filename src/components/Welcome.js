import {Hero, Review, About, Timeline, Accordion} from '../components'

const Welcome = () => {
    return (
        <div className='h-fit'>
            <Hero />
            <About />
            <Timeline />
            <Review />
            <Accordion />
        </div>
    )
}

export default Welcome