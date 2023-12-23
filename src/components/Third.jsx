import React from 'react'
import img1 from "../assets/image/card-img1.png";
import img2 from "../assets/image/card-img2.png";
import img3 from "../assets/image/card-img3.png";
import heart from "../assets/image/Heart.svg";
import solana from "../assets/image/s-logo.svg";
import Card3 from './Card3';
const Third = () => {
    const Cards3 = [
        {
            id:1,
            first:"Metroverse Genesis",
            dark:"Block #1460",
            line:`Owned by <span class="bg-brown text-transparent bg-clip-text"> BabyKee </span>`,
            rate:"1k",
            number:"21",
            like:heart,
            logo:solana,
            main:img1,
        },
        {
            id:1,
            first:"Metroverse Genesis",
            dark:"Block #1460",
            line:`Owned by <span class="bg-brown text-transparent bg-clip-text"> BabyKee </span>`,
            rate:"1k",
            number:"21",
            like:heart,
            logo:solana,
            main:img2,
        },
        {
            id:1,
            first:"Metroverse Genesis",
            dark:"Block #1460",
            line:`Owned by <span class="bg-brown text-transparent bg-clip-text"> BabyKee </span>`,
            rate:"1k",
            number:"21",
            like:heart,
            logo:solana,
            main:img3,
        },
    ]
  return (
    <div>
      <div className="container lg:mt-0 mt-[50px]">
        {
            Cards3.map((g) => <Card3 key={g.id} img={g.main} top={g.first} bold={g.dark} line={g.line} heart={g.like} num={g.rate} solana={g.logo} count={g.number}/> )
        }
      </div>
    </div>
  )
}

export default Third
