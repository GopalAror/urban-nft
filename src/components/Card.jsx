import React from 'react'
const Card = (props) => {
    return (
        <div className="lg:w-[33.33%] md:w-[50%] w-full px-3 md:min-h-full min-h-[300px] pt-[20px]">
            <div style={{ backgroundImage: `url(${props.bgimg})` }}
                className={`card w-full h-full pt-[62px] pb-2 flex flex-col justify-end items-center rounded-[18px] relative z-[1] overflow-hidden  bg-no-repeat bg-cover`}>
                <img className='rounded-md' src={props.short} alt="short" />
                <p class="text-center text-white text-base font-semibold font-['Inter']">{props.name}</p>
                <p class="text-white text-[11px] font-normal font-['Inter']">{props.num}</p>
                <div className="h-[69px] absolute bottom-0 left-0 -z-[1]  backdrop-blur-sm bg-[#6A6A6A] bg-opacity-70 w-full"></div>
            </div>
        </div>
    )
}
export default Card