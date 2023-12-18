import imagesList from "./JumpsuitsRowImages";
function JumpsuitsRow() {
    return (
        <div className="jumpsuitsrow w-[1428px] h-[445px] grid grid-cols-6 mx-auto gap-x-[26px] my-[20px]">
            <h1 className="col-span-6 font-normal text-[31px] leading-[37.2px]">Jumpsuits</h1>
            {imagesList.map((image) =>(

                <div key={image.id} className="bg-white w-[219px] h-auto px-[10px] pt-[10px] pb-[16px] rounded-[5px]">
                    <img src={image.src} alt={image.alt} className="w-[199px] h-[222px] rounded-[5px]"/>
                    <p className="text-[14px]">{image.description}</p>
                </div>

            ))}
        </div>
    );
}

export default JumpsuitsRow;