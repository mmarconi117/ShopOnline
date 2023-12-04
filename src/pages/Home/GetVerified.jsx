import React, { useEffect, useState } from "react";
import eye from '../../assets/ICONS/eye.svg'
import info from '../../assets/ICONS/info.svg'

function GetVerified({ setShowModal }) {
  const [isVerified, setIsVerified] = useState(false);

  
  useEffect(() => {
    document.getElementById('modal').showModal();
  
  }, [])

  return (
    <div className="self-center flex w-[967px] max-w-full flex-col items-stretch mt-0 px-0">
      <dialog id="modal" className="modal px-10 py-10 bg-[#e3e3e3] border border-5 border-white ">
        <div className="modal-box">
          <div className="modal-action ">
            <div className="items-stretch flex justify-between gap-5 mt-0 max-md:max-w-full max-md:flex-wrap">
              <div className="text-zinc-800 text-base leading-6 whitespace-nowrap">
                Welcome Joe,
              </div>
              <div className="text-zinc-800 text-center text-sm font-semibold leading-6 underline whitespace-nowrap">
                <form method="dialog">
                  <button className="btn bg-white text-zinc-800 rounded-full w-5 text-base" onClick={() => setShowModal(false)}>X</button>
                </form>
              </div>
            </div>

            {isVerified && isVerified ? <div className="items-start bg-white flex grow basis-[0%] flex-col mt-10 px-6 py-7 rounded-md max-md:max-w-full max-md:px-5">You have already verified</div> : (<>

            <div className="text-zinc-800 text-base font-semibold leading-6 whitespace-nowrap mt-5 max-md:max-w-full">
              Get Verified!
            </div>

            <div className="items-start bg-white flex grow basis-[0%] flex-col px-6 py-7 rounded-md max-md:max-w-full max-md:px-5">
              <div className="text-zinc-600 text-base font-medium leading-6 self-stretch whitespace-nowrap max-md:max-w-full">
                Get yourself verified and start your business as a seller
              </div>
              <div className="justify-between items-stretch self-stretch flex gap-5 mt-9 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-stone-950 text-xs font-semibold leading-4 whitespace-nowrap">
                    Country/Region of incorporation
                  </div>
                  <select className="justify-between items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] flex gap-5 mt-2 px-4 py-3 border-solid text-zinc-500 text-md font-semibold leading-4 whitespace-nowrap my-auto">
                    <option className="font-semibold text-[16px]">
                      United Sates
                    </option>
                  </select>
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-stone-950 text-xs font-semibold leading-4 whitespace-nowrap">
                    US Tax ID (TIN)
                  </div>
                  <div className=" w-full rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] mt-2 flex">
                    <input
                      type="password"
                      className="w-[100%] text-zinc-600 text-lg font-medium leading-2 mt-0 pl-5 pr-5 py-2 items-end max-md:pl-5"
                    />
                    <img
                      loading="lazy"
                      src={eye}
                      className="aspect-square object-contain object-center w-6 overflow-hidden max-w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="text-zinc-600 text-xs leading-5 self-stretch whitespace-nowrap mt-8 max-md:max-w-full">
                Your U.S. Tax classification isW9
              </div>
              <div className="bg-zinc-100 self-stretch shrink-0 h-px mt-8 max-md:max-w-full" />
              <div className="text-zinc-900 text-xl font-medium leading-8 self-stretch whitespace-nowrap mt-10 max-md:max-w-full">
                Business Details
              </div>
              <div className="text-stone-950 text-xs font-semibold leading-4 self-stretch whitespace-nowrap mt-9 max-md:max-w-full">
                Legal business name
              </div>
              <input
                type="text"
                className="rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] self-stretch flex shrink-0 h-12 flex-col mt-2 pl-5 border-solid max-md:max-w-full"
                placeholder="data from sign up page"
                disabled
              />
              <div className="text-stone-950 text-xs font-semibold leading-4 self-stretch whitespace-nowrap mt-8 max-md:max-w-full">
                Business address
              </div>
              <input
                type="text"
                className="justify-between items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] self-stretch flex shrink-0 h-12 flex-col mt-2 border-solid max-md:max-w-full pl-5"
              />
              <div className="justify-between items-stretch self-stretch flex gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-stone-950 text-xs font-semibold leading-4 whitespace-nowrap">
                    Country/Region
                  </div>
                  <select className="rounded border mt-2 px-4 py-4 text-zinc-500">
                    <option className=" text-[16px] px-2 py-2">United Sates</option>
                  </select>
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-stone-950 text-xs font-semibold leading-4 whitespace-nowrap">
                    State
                  </div>
                  <select className="rounded border mt-2 px-4 py-4 text-zinc-500">
                    <option className=" text-[16px] px-2 py-2">Select State</option>
                  </select>
                </div>
              </div>
              <div className="justify-between items-stretch self-stretch flex gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-stone-950 text-xs font-semibold leading-4 whitespace-nowrap">
                    City
                  </div>
                  <input
                    type="text"
                    className="justify-between items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] self-stretch flex shrink-0 h-12 flex-col mt-2 border-solid max-md:max-w-full pl-5"
                  />
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-stone-950 text-xs font-semibold leading-4 whitespace-nowrap">
                    Postal/Zip code
                  </div>
                  <input
                    type="text"
                    className="justify-between items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] self-stretch flex shrink-0 h-12 flex-col mt-2 border-solid max-md:max-w-full pl-5"
                  />
                </div>
              </div>
              <div className="justify-between items-stretch self-stretch flex gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-stone-950 text-xs font-semibold leading-4 whitespace-nowrap">
                    Primary contact number
                  </div>
                  <input
                    type="text"
                    className="justify-between items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] self-stretch flex shrink-0 h-12 flex-col mt-2 border-solid max-md:max-w-full pl-5"
                    placeholder="data from sign up page"
                    disabled
                  />
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-stone-950 text-xs font-semibold leading-4 whitespace-nowrap">
                    Website URL
                  </div>
                  <input
                    type="url"
                    className="justify-between items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] self-stretch flex shrink-0 h-12 flex-col mt-2 border-solid max-md:max-w-full pl-5"
                    placeholder="http://www.example.com"
                  />
                </div>
              </div>
              <div className="justify-between items-stretch self-stretch flex gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="flex items-center justify-between gap-1.5 pr-3.5">
                    <div className="text-stone-950 text-xs flex font-semibold leading-4 grow whitespace-nowrap my-auto">
                      Yearly gross merchandise value (GMV)
                      <img
                        loading="lazy"
                        src={info}
                        className="aspect-square object-contain object-center w-[18px] overflow-hidden self-stretch shrink-0 max-w-full ml-2"
                      />
                    </div>
                  </div>
                  <select className="rounded border mt-2 px-4 py-4 text-zinc-500">
                    <option className=" text-[16px] px-2 py-2">Select</option>
                  </select>
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="flex items-center justify-between gap-1.5 pr-3.5">
                    <div className="text-stone-950 text-xs flex font-semibold leading-4 grow whitespace-nowrap my-auto">
                      Highest performing category
                      <img
                        loading="lazy"
                        src={info}
                        className="aspect-square object-contain object-center w-[18px] overflow-hidden self-stretch shrink-0 max-w-full ml-2"
                      />
                    </div>
                  </div>
                  <select className="rounded border mt-2 px-4 py-4 text-zinc-500">
                    <option className=" text-[16px] px-2 py-2">Select</option>
                  </select>
                </div>

              </div>
              <div className="bg-zinc-100 self-stretch shrink-0 h-px mt-8 max-md:max-w-full" />
              <div className="text-zinc-900 text-xl font-medium leading-8 self-stretch whitespace-nowrap mt-10 max-md:max-w-full">
                Seller profile
              </div>
              <div className="text-zinc-600 text-xs leading-5 self-stretch whitespace-nowrap mt-2.5 max-md:max-w-full">
                This info is public. We share it to build your trust with customers.
              </div>
              <div className="flex items-center gap-2 mt-9 self-start">
                <div className="text-stone-950 text-xs font-semibold leading-4 grow whitespace-nowrap my-auto">
                  Display name on Website
                </div>
                <img
                  loading="lazy"
                  src={info}
                  className="aspect-square object-contain object-center w-[18px] overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
              <input
                type="text"
                className="justify-between items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] self-stretch flex shrink-0 h-12 flex-col mt-2 border-solid max-md:max-w-full pl-5"
              />
              <div className="justify-between items-stretch self-stretch flex gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-stone-950 text-xs font-semibold leading-4 whitespace-nowrap">
                    Customer service phone number
                  </div>
                  <div className="items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] flex gap-2.5 mt-2 pl-4 py-1 border-solid max-md:pr-5">
                    <select className="text-zinc-500 text-md font-semibold leading-4 whitespace-nowrap my-auto">
                      <option className="">+1</option>
                    </select>
                    <div className="bg-zinc-500 self-stretch w-px shrink-0 h-8 mt-1" />
                    <input type="text" className="w-[100%] text-zinc-600 text-md font-medium leading-2 mt-0 pl-5 pr-2 py-2 items-end max-md:pl-5" />
                  </div>
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-stone-950 text-xs font-semibold leading-4 whitespace-nowrap">
                    Customer service email address
                  </div>
                  <input
                    type="email"
                    className="justify-between items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] self-stretch flex shrink-0 h-12 flex-col mt-2 border-solid max-md:max-w-full pl-5"
                  />
                </div>
              </div>
              <div className="justify-center items-stretch flex gap-2 mt-8 p-2 self-start">
                <input type="checkbox" className="w-[15px] h-[15px] self-center" />
                <div className="text-black text-xs self-center grow whitespace-nowrap my-auto">
                  I agree to the terms & conditions
                </div>
              </div>
              <div className="bg-zinc-100 self-stretch shrink-0 h-px mt-8 max-md:max-w-full" />
              <div className="justify-between items-stretch self-stretch flex gap-5 mt-8 pl-20 max-md:max-w-full max-md:flex-wrap max-md:pl-5">
                <button
                  type="button"
                  className="shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-zinc-700 text-center text-sm font-semibold  whitespace-nowrap border-[color:var(--color-styles-neutral-600,#79767D)] grow justify-center px-8 py-2 rounded-[30px] border-[0.75px] border-solid max-md:px-5"
                >
                  Save & close
                </button>

                <button
                  type="button"
                  className="shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-white text-center text-sm font-semibold  whitespace-nowrap bg-zinc-500 grow justify-center px-8 py-2 rounded-[30px] max-md:px-5"
                >
                  Submit for riview pointer
                </button>

              </div>
            </div>
            </>
            ) }

          </div>
        </div>
      </dialog>
    </div>









  );
}

export default GetVerified;
