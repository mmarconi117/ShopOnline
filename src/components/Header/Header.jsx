import Nav from "./Nav"
import LOGO from "../../assets/ICONS/Outline/LOGO.png"
import search from "../../assets/ICONS/Outline/search.svg"

export default function Header() {
    return (
        <div>
            <Nav />
            <div className="flex items-start justify-center gap-6 py-2">
                <img src={LOGO} className="hidden lg:flex"></img>
                <div className="w-[752px] mt-2 h-12 rounded border border-blue-300 justify-between items-center inline-flex">
                    <input
                    type="text"
                    className="text-zinc-400 text-xl font-normal font-['Roboto'] leading-normal w-full h-full"
                    />
                    <div className="w-10  self-stretch p-2.5 bg-sky-800 rounded-tr-[5px] rounded-br-[5px] justify-center items-center gap-1.5 flex">
                        <img src={search} className=" w-fit h-fit"></img>           
                    </div>
                </div>
            </div>
        </div>
    )
};