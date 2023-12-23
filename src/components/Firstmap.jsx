import React from 'react'
import { useState } from "react";
import img1 from "../assets/image/map1-img1.png";
import img2 from "../assets/image/map1-img2.png";
import img3 from "../assets/image/map1-img3.png";
import short1 from "../assets/image/map1-short-img1.png";
import short2 from "../assets/image/map1-short-img2.png";
import short3 from "../assets/image/map1-short-img3.png";
import Card from './Card';
const Firstmap = () => {
    const [data, setData] = useState(3);
    function over() {
        setData(!data);
        if (data === 3) {
            setData(6);
        }
        else {
            setData(3)
        }
    };
    const Cards = [
        {
            id: 1,
            logo: short1,
            bg: img1,
            naming: "Jozo Gators",
            number: "1.1K",
        },
        {
            id: 2,
            logo: short2,
            bg: img2,
            naming: "PXN: Ghost Division",
            number: "10K",
        },
        {
            id: 3,
            logo: short3,
            bg: img3,
            naming: "Ragnarok Meta",
            number: "7.8K",
        },
        {
            id: 4,
            logo: short1,
            bg: img1,
            naming: "Jozo Gators",
            number: "1.1K",
        },
        {
            id: 5,
            logo: short2,
            bg: img2,
            naming: "PXN: Ghost Division",
            number: "10K",
        },
        {
            id: 6,
            logo: short3,
            bg: img3,
            naming: "Ragnarok Meta",
            number: "7.8K",
        },
    ]
    return (
        <div>
            <div className='container px-3'>
                <div className="flex justify-between pt-[50px] items-center">
                    <p class="text-neutral-600 text-base font-semibold font-['Inter'] leading-tight">Top Collections</p>
                    <div className='flex gap-3 items-center cursor-pointer' onClick={over}>
                        <p class="text-neutral-600 text-xs font-semibold font-['Inter'] leading-tight">View All</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                            <path d="M11.167 4.81706L1.16699 4.81706" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.13379 0.800829L11.1671 4.81683L7.13379 8.8335" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 flex-row w-full">
                    {Cards.slice(0, data).map((e) => <Card key={e.id} bgimg={e.bg} short={e.logo} name={e.naming} num={e.number} />)}
                </div>
               
            </div> 
        </div>
    )
}

export default Firstmap
