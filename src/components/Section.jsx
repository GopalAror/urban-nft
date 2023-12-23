import React from 'react'
import cardelepis from "../assets/image/card-ellepis.png";
import cardimg from "../assets/image/card-img.png";
import cardimg1 from "../assets/image/card-img1.png";
import prev from "../assets/image/Arrow - Left Square.svg";
import next from "../assets/image/Arrow - Right Square.svg";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Section = () => {
    const first = React.useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <div className='container mx-auto px-3 '>
            <div class=" min-[860px]:max-w-[812px] max-w-[600px] min-h-[361px] bg-white rounded-[18px] shadow relative w-full p-3">
                <img className='top-0 absolute left-0 z-[1]' src={cardelepis} alt="card-ellipis" />
                <div className="flex flex-wrap -mx-3 flex-row w-full">
                    <div className='relative w-full md:w-[50%] px-3 flex items-center justify-center'>
                        <div className="">
                            <div class="text-orange-300 sm:pl-0 pl-[30px] text-[13px] sm:text-base font-medium font-['Inter'] leading-tight z-[2] mt-[50px] relative">Create MetroVerse Genesis</div>
                            <div class="max-w-[283px] px-3 sm:px-0  text-neutral-500 text-[12px] sm:text-xs font-medium font-['Inter'] leading-none z-[2] py-[30px] relative">physical claim for issue #1 now live. please check that the token is available for claim via website</div>
                            <div class="">
                                <button class="text-white text-[12px] sm:ml-0 ml-[20px] sm:text-sm font-medium font-['Inter'] leading-tight w-full max-w-[140px] h-full px-4 py-2 z-[2] bg-brown rounded-[22px] shadow justify-center items-center gap-1 inline-flex relative">Explorer Now</button>
                            </div>
                            <div>
                                <div class="  max-w-[299px] mt-[18px] min-h-[61px] rounded-[7px] border border-orange-300 flex items-center justify-between">
                                    <div class=" flex-wrap flex-row flex justify-between items-center w-full h-full z-[2] px-3">
                                        <div class=" w-6/12 sm:w-3/12 flex items-center flex-col  border-r border-orange-500 h-full  py-5 ">
                                            <div class="  text-orange-300 text-xs font-bold font-['Inter'] leading-tight">24.8K</div>
                                            <div class="  text-zinc-500 text-[10px] font-medium font-['Inter'] leading-tight">Items</div>
                                        </div>
                                        <div class=" w-6/12 sm:w-3/12 flex items-center flex-col  sm:border-r border-orange-500 h-full py-5 ">
                                            <div class="  text-orange-300 text-xs font-bold font-['Inter'] leading-tight">4,1K</div>
                                            <div class="left-0 top-[20px]  text-zinc-500 text-[10px] font-medium font-['Inter'] leading-tight">Owners</div>
                                        </div>
                                        <div class=" w-6/12 sm:w-3/12 flex items-center flex-col  border-r border-orange-500 h-full py-4">
                                            <div class="  text-orange-300 text-xs font-bold font-['Inter'] leading-tight">0.221</div>
                                            <div class="left-0 top-[20px]  text-zinc-500 text-[10px] font-medium font-['Inter'] leading-tight ">Floor Price</div>
                                        </div>
                                        <div class=" w-6/12 sm:w-3/12 flex items-center flex-col h-full py-2">
                                            <div class="text-orange-300 text-xs font-bold font-['Inter'] leading-tight">43.1K</div>
                                            <div class="text-zinc-500 text-[10px] font-medium font-['Inter'] leading-tight text-center">Volume Traded</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[50%] w-full px-3  relative">
                        <div className="flex">
                            <button onClick={() => first?.current?.slickPrev()}>
                                <img className='right-[80%] sm:right-[25%] top-[5%] z-[2] absolute cursor-pointer' src={prev} alt="prev" />
                            </button>
                            <button onClick={() => first?.current?.slickNext()}>
                                <img className=' absolute right-[60%] sm:right-[15%] z-[2] top-[5%] cursor-pointer' src={next} alt="next" />
                            </button>
                        </div>
                        <Slider ref={first} {...settings} className='xl:translate-y-[15%] mt-[50px] max-sm: translate-x-4 xl:-translate-x-3 '>
                            <img class=" max-sm:max-w-[357px] w-full sm:mb-0 mb-3 sm:h-[307px] rounded-[18px] shadow pl-1" src={cardimg} />
                            <img class=" max-sm:max-w-[357px] w-full sm:mb-0 mb-3 sm:h-[307px] rounded-[18px] shadow pl-1" src={cardimg1} />
                            <img class=" max-sm:max-w-[357px] w-full sm:mb-0 mb-3 sm:h-[307px] rounded-[18px] shadow pl-1" src={cardimg} />
                            <img class=" max-sm:max-w-[357px] w-full sm:mb-0 mb-3 sm:h-[307px] rounded-[18px] shadow pl-1" src={cardimg1} />
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section
