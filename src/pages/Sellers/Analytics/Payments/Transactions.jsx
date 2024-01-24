import searchIcon from "../../../../assets/ICONS/SearchIcons.svg"
const Transactions = () => {
  return (
    <div className="flex flex-col items-stretch justify-start gap-10">
      {/* Inputs */}
      <div className="xl:pl-8 xl:pr-3 flex justify-between items-stretch gap-4">
        {/* First input */}
        <div className="flex items-stretch gap-0 justify-start shrink basis-3/5">
          <div className="flex rounded-l-md bg-white items-center basis-5/6 pl-10 border border-solid border-[#AEA9B1] border-r-0">
            <img src={searchIcon} alt="search-icon" className="object-contain w-8 h-8 grow-0"/>
            <input
              type="text"
              name="search"
              id=""
              placeholder="Search by purchase order"
              className="p-3 grow shrink"
            />
          </div>
          <select name="" id="" className="outline-none basis-1/6 border border-solid border-[#AEA9B1] rounded-r-md px-8">
            <option value="">PO</option>
            <option value="">CO</option>
          </select>
        </div>
        <input type="date" name="" id="" placeholder="Date" className="basis-1/5 outline-none border border-solid border-[#AEA9B1] rounded-md p-3 shrink"/>
        <input type="text" name="" id="" placeholder="Type" className="basis-1/5 outline-none border border-solid border-[#AEA9B1] rounded-md p-3 shrink" />
      </div>

      <div className="p-3 max-w-[700px] xl:max-w-max grow overflow-auto">
        <table className="">
          <thead>
            <tr>
              <th className="min-w-[132px]"></th>
              <th className="pr-8 2xl:pr-16 pt-2 pb-6 text-left 2xl:text-center">PO/CO</th>
              <th className="pr-8 2xl:pr-16 pt-2 pb-6 text-left 2xl:text-center">TYPE</th>
              <th className="pr-8 2xl:pr-16 pt-2 pb-6 text-left 2xl:text-center">Transaction Date</th>
              <th className="pr-8 2xl:pr-16 pt-2 pb-6 text-left 2xl:text-center">Time id</th>
              <th className="pr-8 2xl:pr-16 pt-2 pb-6 text-left 2xl:text-center">Qty</th>
              <th className="pr-8 2xl:pr-16 pt-2 pb-6 text-left 2xl:text-center">Transaction Date</th>
              <th className="pr-8 2xl:pr-16 pt-2 pb-6 text-left 2xl:text-center">Status</th>
              <th className="min-w-16"></th>
            </tr>
          </thead>

          <tbody>
            <tr className="">
              <td className="px-3 text-left 2xl:text-center"><input type="checkbox" id="check1" name="check1" className="w-6 h-6"/></td>
              <td className="pr-8 2xl:pr-16 py-4 text-left 2xl:text-center">999999</td>
              <td className="pr-8 2xl:pr-16 py-4 text-left 2xl:text-center">Dispute Settlement</td>
              <td className="pr-8 2xl:pr-16 py-4 text-left 2xl:text-center">June 23,2023</td>
              <td className="pr-8 2xl:pr-16 py-4 text-left 2xl:text-center">999999</td>
              <td className="pr-8 2xl:pr-16 py-4 text-left 2xl:text-center">1</td>
              <td className="pr-8 2xl:pr-16 py-4 text-left 2xl:text-center">$99.99</td>
              <td className="pr-8 2xl:pr-16 py-4 text-left 2xl:text-center">Settled</td>
              <td className="px-3 text-left 2xl:text-center">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-[#515A6A] rounded-full"/>
                  <div className="w-2 h-2 bg-[#515A6A] rounded-full"/>
                  <div className="w-2 h-2 bg-[#515A6A] rounded-full"/>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
