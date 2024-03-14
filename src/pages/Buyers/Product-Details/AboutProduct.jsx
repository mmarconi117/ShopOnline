const AboutProduct = () => {
    return (
        // {/* // Product features and specifications container */}
        <div className="flex flex-col gap-8 items-stretch">
            <div className="bg-[#FFFFFF] rounded-md">
                {/* Product details div */}
                <div
                    id="product-description-div"
                    className="border-b-[0.5px] border-[#79767D] p-8"
                >
                    <p className="text-2xl font-bold">Product Details</p>
                </div>
                {/* Product details in list div */}
                <ul
                    className="list-inside list-decimal p-10"
                    id="details-list"
                >
                    <li className="py-1">
                        With a 10 place setting capacity, this dishwasher is perfect for smaller to
                        medium households
                    </li>
                    <li className="py-1">
                        Half load wash function is ideal if you've only got one basket full to clean
                    </li>
                    <li className="py-1">
                        A height adjustable upper basket and collapsible supports make washing
                        bigger pots and pans easy
                    </li>
                    <li className="py-1">
                        There are four wash programmes to help you get the best results with each
                        load
                    </li>
                    <li className="py-1">
                        It's fully integrated design helps to save vital floor space in your kitchen
                    </li>
                </ul>

                <div className="p-10 text-[#0F1111]">
                    <h2 className="text-base font-semibold mb-6">The details</h2>
                    <p className="">
                        If you are limited with space in your kitchen, this dishwasher could answer
                        your problem. It sits behind a cupboard door, fully integrating into your
                        kitchen. It's around 15cm slimmer than most full size dishwashers which
                        means you dont need to give up too much storage space for it to sit. And
                        that doesn't mean you'll be short of space inside either – it'll hold 110
                        pieces (around 10 place settings) in one load. Inside there are two spacious
                        baskets, with the bottom being ideal for bigger items. If you need more
                        room, you can even adjust the height of the upper basket to fit those
                        awkward pots and pans inside. The controls are all within easy reach,
                        sitting on the top edge of the door when opened. Add your detergent to the
                        dispenser, choose the perfect settings and away you go! Don't worry if
                        you've not got a full load to wash, just choose the half load function and
                        it'll use just enough water and energy to get the job done. There's always a
                        programme to suit your load, again only using as much energy and water as it
                        needs for the best results. They include intensive, eco, 90 mins and rapid.
                        You can even delay your wash to start at the best time for you, perfect for
                        getting the pots clean and ready for when you get home from work. Choose
                        from a three, six or nine-hour delay to suit your day.
                    </p>
                </div>
            </div>
            {/* Product features and specs */}
            <div className="flex flex-col lg:flex-row gap-8 items-stretch lg:justify-between">
                {/* Product features div */}
                <div className="bg-[#FFFFFF] lg:w-[50%]">
                    <div className="border-b-[0.5px] border-[#79767D] p-8">
                        <p className="text-2xl font-bold">Key Features</p>
                    </div>
                    <div>
                        <ul className="list-inside p-6">
                            <li className="py-1.5 px-2">
                                With a 10 place setting capacity, this dishwasher is perfect for
                                smaller to medium households
                            </li>
                            <li className="py-1.5 px-2">
                                Half load wash function is ideal if you've only got one basket full
                                to clean
                            </li>
                            <li className="py-1.5 px-2">
                                A height adjustable upper basket and collapsible supports make
                                washing bigger pots and pans easy
                            </li>
                            <li className="py-1.5 px-2">
                                There are four wash programmes to help you get the best results with
                                each load
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Product specifications div */}
                <div className="bg-[#FFFFFF] lg:w-[50%]">
                    <div className="border-b-[0.5px] border-[#79767D] p-8">
                        <p className="text-2xl font-bold">Specifications</p>
                    </div>
                    <div>
                        <ul
                            className="list-inside list-disc p-6 "
                            style={{ padding: "1.5rem" }}
                        >
                            <li className="py-1.5 px-2">SKU: SH960HA3VFZ94NAFAMZ</li>
                            <li className="py-1.5 px-2">Product Line: Konqueror</li>
                            <li className="py-1.5 px-2">Production Country: Israel</li>
                            <li className="py-1.5 px-2">
                                Size (L x W x H cm): H =81.5cm L =55cm W =44.8cm.
                            </li>
                            <li className="py-1.5 px-2">Weight (kg): 10</li>
                            <li className="py-1.5 px-2">Certifications: Eco Friendly</li>
                            <li className="py-1.5 px-2">Color: White</li>
                            <li className="py-1.5 px-2">Main Material: Iron</li>
                            <li className="py-1.5 px-2">
                                From the Manufacturer: Pls handle with care
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutProduct;
