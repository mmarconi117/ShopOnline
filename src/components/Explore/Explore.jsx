
import { ExploreItem } from "./ExploreItem";
import beauty from "./assets/beauty.png";
export const Explore = () => {
  return (
    <div className="flex h-fit px-0 pt-[18px] pb-8 flex-col items-start gap-[18px] flex-1 bg-[#BAD9E8]">
      <div className="w-full h-6 pl-20 pr-2.5 justify-start  gap-2.5 inline-flex">
        <div className="text-center text-zinc-800 text-xl font-bold font-['Arial'] leading-normal tracking-tight">
          Explore our Top Categories
        </div>
      </div>
      <div className="grid w-full max-sm:grid-flow-col max-sm:grid-rows-2 max-sm:pl-6 max-sm:overflow-x-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-9 items-center pl-20 pr-2.5 overscroll-contain overflow-clip">
        <ExploreItem src={beauty} title={"Beauty"}></ExploreItem>
        <ExploreItem src={beauty} title={"Beauty"}></ExploreItem>
        <ExploreItem src={beauty} title={"Beauty"}></ExploreItem>
        <ExploreItem src={beauty} title={"Beauty"}></ExploreItem>
        <ExploreItem src={beauty} title={"Beauty"}></ExploreItem>
        <ExploreItem src={beauty} title={"Beauty"}></ExploreItem>
        <ExploreItem src={beauty} title={"Beauty"}></ExploreItem>
        <ExploreItem src={beauty} title={"Beauty"}></ExploreItem>
        <ExploreItem src={beauty} title={"Beauty"}></ExploreItem>
        <ExploreItem src={beauty} title={"Beauty"}></ExploreItem>
        <ExploreItem src={beauty} title={"Beauty"}></ExploreItem>
        <ExploreItem src={beauty} title={"Beauty"}></ExploreItem>
      </div>
    </div>
  );
};
/*
display: flex;
width: 1512px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 36px;
*/
