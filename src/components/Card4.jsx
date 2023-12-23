import React from 'react'
const Card4 = (props) => {
    return (
        <div>
            <div class="">
                <div className="flex items-center justify-between">
                    <div className="flex items-center pt-3">
                        <img src={props.animal} alt="cat" />
                        <div className=" pl-[11px]">
                            <p class="text-zinc-700 text-sm font-bold font-['Inter'] leading-none">{props.name}</p>
                            <p class="text-zinc-700 text-xs font-normal font-['Inter'] leading-[13.92px] pt-[6px]">{props.work}</p>
                        </div>
                    </div>
                    <div className="flex">
                        <img src={props.logo} alt="solana" />
                        <p class="text-zinc-700 text-xs font-normal font-['Inter'] leading-[13.92px] pl-1">{props.num}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card4