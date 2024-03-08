const Completed = () => {
    return (
        <div
            className="lg:max-w-[300px] min-w-[200px] lg:w-1/6 border-t-4 border-[#EEC643] bg-white rounded-md shadow-md text-center flex lg:flex-col"
            id="completed-returns-component"
        >
            <div className="py-10 w-10/12 lg:w-full lg:py-5">
                <p className="text-[1.25rem]">Completed</p>
                <p className="font-bold text-4xl">5</p>
            </div>
            <div className="border-l-2 lg:border-t-2 border-[#CAC5CD]"></div>
            <button className="px-2 lg:px-0 grow flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-5 lg:gap-1 py-6 hover:cursor-pointer">
                <div className="text-xl leading-6 lg:leading-3 whitespace-wrap">View Return</div>
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
            </button>
        </div>
    );
};

export default Completed;
