import React from 'react'
import solana from "../assets/image/s-logo.svg";
import cat from "../assets/image/cat.png";
import camel from "../assets/image/camel.png";
import monkey from "../assets/image/monkey.png";
import Card4 from './Card4';

const Forth = () => {
    const Cards = [
        {
            id: 1,
            img: cat,
            logo: solana,
            number: "250",
            name: "Cet #6882",
            work: "Cets on Creck"
        },
        {
            id: 2,
            img: monkey,
            logo: solana,
            number: "38",
            name: "Bored Ape #981",
            work: "Bored Ape Solana Club"
        },
        {
            id: 3,
            img: camel,
            logo: solana,
            number: "15",
            name: "SolPunk #7803",
            work: "SolPunks"
        },
    ]
    return (
        <div className="container px-3 flex justify-center">
            <div className='lg:max-w-[320px] max-w-[600px] w-full min-h-[447px] bg-white rounded-[18px] shadow py-4 px-6 mt-[65px]'>
                <div className=" flex items-center pb-[35px] justify-between">
                    <p class="text-neutral-600 text-base font-medium font-['Inter'] leading-tight">History</p>
                    <select id="timw" className="w-[98px] h-[26px] rounded border border-neutral-400">
                        <option value="last month" className="text-neutral-600 text-xs font-normal font-['Inter'] leading-tight">Last Month</option>
                        <option value="last week" className="text-neutral-600 text-xs font-normal font-['Inter'] leading-tight">Last week</option>
                        <option value="last days" className="text-neutral-600 text-xs font-normal font-['Inter'] leading-tight">last days</option>
                        <option value="all" className="text-neutral-600 text-xs font-normal font-['Inter'] leading-tight">all</option>
                        <option value="today" className="text-neutral-600 text-xs font-normal font-['Inter'] leading-tight">today</option>
                    </select>
                </div>
                <div>
                    {Cards.map((f) => <Card4 key={f.id} animal={f.img} name={f.name} work={f.work} logo={f.logo} num={f.number} />)}
                </div>
                <button class="w-full h-[51px] px-4 py-2 bg-brown rounded-[22px] shadow justify-center items-center gap-1 inline-flex text-white text-sm font-medium font-['Inter'] leading-tight mt-[70px]">
                    Show All
                </button>
            </div>
        </div>
    )
}

export default Forth
