
import LeftArrow from '../../../assets/ICONS/LeftArrow.svg'
import RightArrow from '../../../assets/ICONS/RightArrow.svg'
import Ratings from '../../../assets/ICONS/Ratings.svg'

function ProductDetail() {
    return (
        <div className="self-center flex w-full h-full max-w-full flex-col items-stretch pl-5 xl:pl-10 min-[1350px]:pl-20 pt-5 pr-2 xl:pr-5 min-[1350px]:pr-10 pb-24 overflow-hidden">
            <div className="flex flex-col py-0 px-0 max-md:max-w-full max-md:px-0">
                <button className='flex justify-start items-center gap-2'>
                    <span><img src={LeftArrow} alt="left-arrow" /></span>
                    <div>Back</div>
                </button>
                {/* Title / Buttons */}
                <div className="self-center flex flex-col justify-end items-start xl:flex-row w-full max-w-full xl:items-start xl:justify-between mt-5 min-[1350px]:mt-7 ">
                    <div className='flex flex-col '>
                        <div className="text-stone-950 text-xl font-medium leading-8 whitespace-nowrap grow pt-5">
                            316L Surgical Stainless Steel Huggie Hoop Earrings
                        </div>
                        <div className="self-center w-full max-w-full">
                            <div className="text-stone-950 text-base whitespace-nowrap">
                                ID: 5892942
                            </div>
                        </div>
                    </div>
                    <div className="self-start mt-3 xl:mt-0 z-[1] flex items-stretch justify-between gap-3 xl:gap-5">
                        <button className="text-stone-950 text-xs leading-4 whitespace-nowrap items-stretch rounded-md border border-[#EEC643] shrink justify-center pl-8 pr-11 py-4 border-solid max-md:px-5">
                            Archive
                        </button>
                        <button className="text-stone-950 text-xs leading-4 whitespace-nowrap items-stretch rounded-md border border-[#EEC643] shrink-0 justify-center pl-8 pr-11 py-4 border-solid max-md:px-5">
                            Publish/Unpublish
                        </button>
                        <button className="text-stone-950 text-xs leading-4 whitespace-nowrap items-stretch rounded-md bg-[#EEC643] shrink justify-center pl-8 pr-11 py-4 border-solid max-md:px-5">
                            Delete Product
                        </button>
                    </div>
                </div>
                {/* Content */}
                <div className="bg-white self-center w-full max-w-full mt-7 gap-0 px-7 pt-5 pb-20 min-[1150px]:px-3.5 min-[1150px]:py-2.5 xl:px-7 xl:py-5">
                    <div className="gap-8 xl:gap-16 flex flex-col min-[1150px]:flex-row items-center min-[1150px]:items-start justify-between max-md:flex-col max-md:items-stretch max-md:gap-0 ">
                        {/*  */}
                        <div className="flex flex-col justify-start items-stretch w-[29%] max-w-[284px] min-w-[250px] max-md:w-full max-md:ml-0">                            
                            {/* Product Image */}
                            <div className="bg-stone-300 self-center flex w-full shrink-0 h-[250px] flex-col" />
                            {/* Slideshow */}
                            <div className=" w-full max-w-full justify-center items-center flex gap-2 xl:gap-3 min-[1350px]:gap-5 mt-7 max-md:justify-center">
                                <img
                                    loading="lazy"
                                    src={LeftArrow}
                                    className="aspect-[1.07] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full "
                                />
                                <div className="bg-stone-300 self-stretch flex w-[61px] shrink-0 h-[61px] flex-col" />
                                <div className="bg-stone-300 self-stretch flex w-[62px] shrink-0 h-[61px] flex-col" />
                                <div className="bg-stone-300 self-stretch flex w-[61px] shrink-0 h-[61px] flex-col" />
                                <img
                                    loading="lazy"
                                    src={RightArrow}
                                    className="aspect-[1.07] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full "
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-stretch w-[71%] max-md:w-full max-md:ml-0 ">
                            <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-auto">
                                <div className='flex flex-col gap-4'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center gap-6 p-2 text-[#0F1111] border-2 border-solid border-[#09618E] rounded-md'>
                                            <div>Total Sales:</div>
                                            <div className='text-xl leading-6 font-bold'>$99,879.50</div>
                                        </div>
                                        <div className='flex justify-center items-center border-2 rounded-full border-solid border-[#515A6A] w-6 h-6'>!</div>
                                    </div>
                                    <div className='flex justify-start items-center gap-16'>
                                        <div className='flex flex-col justify-evenly items-start gap-4'>
                                            <div className='flex items-center gap-6'>
                                                <div>Price :</div>
                                                <div className='leading-5 font-bold'>$999</div>
                                            </div>
                                            <div className='flex items-center gap-6'>
                                                <div>Type :</div>
                                                <div className='leading-5 font-bold'>Accessories</div>
                                            </div>
                                            <div className='flex items-center gap-3'>
                                                <div>Ratings:</div>
                                                <div className='whitespace-nowrap'>Star 4.8 See 280 Ratings</div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-evenly items-start gap-4'>
                                            <div className='flex items-center gap-6'>
                                                    <div>Inventory:</div>
                                                    <div className='leading-5 font-bold'>3308</div>
                                                </div>
                                                <div className='flex items-center gap-7'>
                                                    <div>Revenue:</div>
                                                    <div className='leading-5 font-bold'>$29,467</div>
                                                </div>
                                                <div className='flex items-center gap-1'>
                                                    <div>Gross Profit:</div>
                                                    <div className='leading-5 font-bold'>$3,111</div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-green-300 self-start flex w-[594px] max-w-full flex-col items-stretch mt-14 pl-9 pr-10 py-9 rounded max-md:mt-10 max-md:px-5">
                                    <div className="bg-blue-300 shrink-0 h-[356px] max-md:max-w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail