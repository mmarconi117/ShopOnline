
import LeftArrow from '../../../assets/ICONS/LeftArrow.svg'
import RightArrow from '../../../assets/ICONS/RightArrow.svg'
import Ratings from '../../../assets/ICONS/Ratings.svg'
import heels from '../../../assets/IMAGES/Product card/Product image.png'


function ProductDetail() {
    return (
        <div className="self-center flex flex-col w-full items-stretch px-5 pt-5 pb-24 sm:pl-5 xl:pl-10 xl:pr-5 min-[1350px]:pl-20 min-[1350px]:pr-10">
            <div className="flex flex-col items-stretch w-full">
                <button className='flex justify-start items-center gap-2'>
                    <span><img src={LeftArrow} alt="left-arrow" /></span>
                    <div>Back</div>
                </button>
                <div className="self-center flex flex-col justify-end items-start xl:flex-row w-full max-w-full xl:items-start xl:justify-between mt-5 min-[1350px]:mt-7 ">
                    <div className='flex flex-col w-full'>
                        <div className="text-stone-950 text-xl font-medium leading-8 pt-5">
                            316L Surgical Stainless Steel Huggie Hoop Earrings
                        </div>
                        <div className="self-center w-full max-w-full">
                            <div className="text-stone-950 text-base whitespace-nowrap">
                                ID: 5892942
                            </div>
                        </div>
                    </div>
                    <div className="flex-wrap min-[390px]:flex-nowrap self-start mt-6 xl:mt-0 z-[1] flex items-stretch justify-center min-[390px]:justify-between gap-x-3 gap-y-5 xl:gap-5">
                        <button className="text-stone-950 text-xs leading-4 whitespace-nowrap rounded-md border border-[#EEC643] px-4 py-2 sm:px-5 md:px-8 sm:py-4 border-solid">
                            Archive
                        </button>
                        <button className="text-stone-950 text-xs leading-4 whitespace-nowrap rounded-md border border-[#EEC643] px-4 py-2 sm:px-5 md:px-8 sm:py-4 border-solid">
                            Publish/Unpublish
                        </button>
                        <button className="text-stone-950 text-xs leading-4 whitespace-nowrap rounded-md bg-[#EEC643] px-4 sm:px-5 py-2 md:px-8 sm:py-4 border-solid">
                            Delete Product
                        </button>
                    </div>
                </div>
                <div className="bg-white self-center w-full max-w-full mt-7 gap-0 px-4 pt-5 pb-20 lg:px-7 min-[1150px]:px-3.5 min-[1150px]:py-2.5 xl:px-7 xl:py-5">
                    <div className="gap-20 min-[1150px]:gap-8 xl:gap-16 flex flex-col min-[1150px]:flex-row items-stretch min-[1150px]:items-start justify-between">
                        <div className="flex flex-col justify-start self-center min-[1150px]:self-start w-auto min-[1150px]:w-[29%] max-w-[284px] min-w-[250px]">                            
                            <img src={heels} alt="heels pic" className=' object-cover w-[284px] shrink-0 h-[250px]' />
                            <div className=" w-full max-w-full justify-center items-center flex gap-2 xl:gap-3 min-[1350px]:gap-4 mt-7 max-md:justify-center">
                                <img
                                    loading="lazy"
                                    src={LeftArrow}
                                    className="aspect-[1.07] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full "
                                />
                                <img src={heels} alt="heels pic" className='aspect-square w-[80px] min-[1150px]:w-[62px] object-cover'/>
                                <img src={heels} alt="heels pic" className='aspect-square w-[80px] min-[1150px]:w-[62px] object-cover'/>
                                <img src={heels} alt="heels pic" className='aspect-square w-[80px] min-[1150px]:w-[62px] object-cover'/>
                                <img
                                    loading="lazy"
                                    src={RightArrow}
                                    className="aspect-[1.07] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full "
                                />
                            </div>
                        </div>

                        <div className="flex flex-col w-full min-[1150px]:w-[71%]">
                            <div className="flex flex-col items-center min-[1150px]:items-stretch max-w-full">
                                <div className='flex flex-col gap-16 min-[1150px]:gap-4 items-stretch'>
                                    <div className='flex justify-center min-[1150px]:justify-between items-center'>
                                        <div className='flex items-center gap-6 p-2 text-[#0F1111] border-2 border-solid border-[#09618E] rounded-md'>
                                            <div>Total Sales:</div>
                                            <div className='text-xl leading-6 font-bold'>$99,879.50</div>
                                        </div>
                                        <div className='hidden min-[1150px]:flex justify-center items-center border-2 rounded-full border-solid border-[#515A6A] w-6 h-6'>!</div>
                                    </div>
                                    <div className='flex flex-col justify-start items-start md:flex-row gap-8 md:gap-16'>
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
                                                <div className='flex items-center whitespace-nowrap'><span><img src={Ratings} alt="star" className='mr-2'/></span>4.8 <span className='text-[#2284B6] underline ml-2'>See 280 Ratings</span></div>
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
                                <div className="bg-stone-300 flex  min-w-[300px] w-full min-[1150px]:min-w-[594px] max-w-full flex-col items-stretch mt-8 px-4 sm:px-10 py-9 sm:py-12 rounded max-md:mt-10 max-md:px-5">
                                    <div className=" max-md:max-w-full aspect-[2.144]" />
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