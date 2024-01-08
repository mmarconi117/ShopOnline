import imagesList from "./BottomsRowImages";
function BottomsRow() {
    return (
        <div className="w-full h-auto flex flex-col items-start gap-4 pt-8 px-4 sm:pt-16 sm:pb-1 sm:pl-10 sm:pr-0" >
            <h1 className=" text-[#313133] font-Roboto font-medium text-base sm:text-[31px] sm:font-bold sm:leading-[37.2px]">Bottoms</h1>
            <ul className="flex w-full items-start gap-2 sm:gap-6 overflow-x-auto">
                {imagesList.map((image) =>(
                    <li key={image.id} className="flex flex-col items-start bg-white min-w-[175px] min-h-[373px] sm:min-w-[219px] sm:h-auto p-2 pb-3 sm:p-[10px] sm:pb-[16px] rounded-[5px] border border-solid border-[#AEA9B1] gap-4 sm:gap-6">
                        <img src={image.src} alt={image.alt} className="min-h-[214px] object-cover rounded-[5px]"/>
                        <p className="font-Roboto text-sm max-sm:tracking-[0.25px]">{image.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BottomsRow;