import React from "react";
import {Cards} from "../components";

const Review = () => {
    return (
        <section className="w-full bg-secondary dark:bg-darkSecondary duration-200 py-[0.5%] my-[10%]">
            <div className="w-[98%] h-fit mx-auto my-[10%] grid grid-cols-2 gap-x-8">
                <div className="pl-10 text-primary duration-200 font-fredokaOne flex justify-center items-center flex-col">
                    <h1 className="text-left text-4xl dark:text-darkPrimary duration-200">Displayed as a card</h1>
                    <h5 className="text-left text-white dark:text-darkPrimary duration-200 font-lexend text-xl my-[1%]">JOIN AND CREATE YOUR OWN NOTE</h5>

                    <p className="font-lexend text-white dark:text-cardDark duration-200 my-[3%] text-justify">is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
                {/* CARDS */}
                <Cards />
            </div>
        </section>
    )
}

export default Review