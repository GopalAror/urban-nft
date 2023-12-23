import React from 'react'
import Card2 from './Card2'
import { useState } from "react";
import img4 from "../assets/image/map2-img1.png";
import img5 from "../assets/image/map2-img2.png";
import img6 from "../assets/image/map2-img3.png";
import short4 from "../assets/image/map2-short-img1.png";
import short5 from "../assets/image/map2-short-img2.png";
import short6 from "../assets/image/map2-short-img3.png";
const Second = () => {
    const [card, setCard] = useState(3)
    function over2() {
        setCard(!card)
        if (card === 3) {
            setCard(6);
        }
        else {
            setCard(3);
        }
    }
    const Cards2 = [
        {
            id: 1,
            bg: img4,
            naming: "lorem",
            number: "1.8K",
            logo: short4,
        },
        {
            id: 2,
            bg: img5,
            naming: "lorem",
            number: "1.8K",
            logo: short5,
        },
        {
            id: 3,
            bg: img6,
            naming: "lorem",
            number: "1.8K",
            logo: short6,
        },
        {
            id: 4,
            bg: img4,
            naming: "lorem",
            number: "1.8K",
            logo: short4,
        },
        {
            id: 5,
            bg: img5,
            naming: "lorem",
            number: "1.8K",
            logo: short5,
        },
        {
            id: 6,
            bg: img6,
            naming: "lorem",
            number: "1.8K",
            logo: short6,
        },
    ]
    return (
        <div className='container mx-auto flex items-center justify-center flex-col px-3'>
            <div className="w-full">
                <div className="flex justify-between pt-[30px] items-center w-full">
                    <p class="text-neutral-600 text-base font-semibold font-['Inter'] leading-tight">Trendings NFTs</p>
                    <div className='flex gap-3 items-center cursor-pointer' onClick={over2}>
                        <p class="text-neutral-600 text-xs font-semibold font-['Inter'] leading-tight">Marketplace</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                            <path d="M11.167 4.81706L1.16699 4.81706" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.13379 0.800829L11.1671 4.81683L7.13379 8.8335" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 flex-row w-full justify-center">
                {Cards2.slice(0, card).map((c) => <Card2 key={c.id} bgimg2={c.bg} short2={c.logo} name2={c.naming} num2={c.number} />)}
            </div>
        </div>
    )
}

export default Second