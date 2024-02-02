const Initiated = () => {
    return (
        <div
            className="w-1/6 border-t-4 border-[#EEC643] bg-white rounded-md shadow-md text-center mr-10 "
            id="initiated-returns-component"
        >
            <div className="p-5">
                <div>
                    <p className="text-[1.25rem]">Initiated</p>
                </div>
                <div>
                    <p className="font-bold text-4xl">10</p>
                </div>
            </div>
            <div className="border-t-2 border-[#CAC5CD]"></div>
            <div className="flex justify-center p-5">
                <button className="flex text-[1.25rem] hover:cursor-pointer">View Returns</button>
                <div className="self-center ml-2">
                    <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.35401 13.6251C5.06137 13.3325 5.06137 12.858 5.35401 12.5654L9.32028 8.5991L5.35401 4.63282C5.06137 4.34018 5.06137 3.86571 5.35401 3.57307C5.64665 3.28043 6.12112 3.28043 6.41376 3.57307L10.9099 8.06922C11.2026 8.36186 11.2026 8.83633 10.9099 9.12897L6.41376 13.6251C6.12112 13.9178 5.64665 13.9178 5.35401 13.6251Z"
                            fill="#313133"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Initiated;
