import React from 'react'
import {Link} from 'react-router-dom'

const Hero = () => {

    return (
        <section className="w-full relative z-10 bg-hero-background duration-200 bg-cover bg-no-repeat bg-top pb-[30%] mx-auto min-h-[100vh] h-fit">
                <div className='absolute z-10 h-full w-full dark:backdrop-grayscale duration-200'></div>

                <div className='flex relative z-20 flex-row justify-center items-center'>
                    <main className='mt-[10%] w-[90%] mx-auto'>
                        <h1 className='text-5xl text-primary duration-200 dark:text-darkSecondary mb-5 font-fredokaOne uppercase tracking-widest'>Create Note Everywhere !</h1>                    

                        <div className='flex w-fit font-lexend gap-10 text-white uppercase'>
                            <Link className='py-4 px-6 rounded border-[1px] opacity-90 duration-200 hover:drop-shadow-2xl border-white bg-primary dark:bg-cardDark' to="/login"> Get Started </Link>
                            <Link className='py-4 px-6 rounded border-[1px] opacity-90 duration-200 hover:drop-shadow-2xl border-white bg-primary dark:bg-cardDark' to="/login"> Learn More </Link>

                        </div>
                    </main>
                </div>
        </section>
    )
}

export default Hero;