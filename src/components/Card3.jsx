import React from 'react'

const Card3 = (props) => {
    return (
        <div className='flex justify-center w-full px-3'>
            <div class="lg:max-w-[319px] w-full min-h-[100px] bg-white rounded-[18px] p-[9px] flex mt-3 ">
                <img className='rounded-[10px]' src={props.img} alt="img" />
                <div className='pl-[11px] w-full'>
                    <p class="text-neutral-500 text-[7px] font-medium font-['Inter'] leading-[8.12px]">{props.top}</p>
                    <p class="text-zinc-700 text-sm font-bold font-['Inter'] leading-none pt-2">{props.bold}</p>
                    <p dangerouslySetInnerHTML={{ __html: props.line }} className='text-neutral-500 text-[7px] font-medium font-Inter leading-[8.12px] pt-2 pb-4'></p>
                    <div className="flex justify-between">
                        <div className="flex">
                            <img src={props.heart} alt="heart" />
                            <p class="text-gray-900 text-sm font-medium font-['Inter'] leading-none pl-1">{props.num}</p>
                        </div>
                        <div className="flex pr-3">
                            <img src={props.solana} alt="s-logo" />
                            <p class="text-gray-900 text-sm font-medium font-['Inter'] leading-none pl-1">{props.count}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card3
