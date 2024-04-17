import searchIcon from "../../../../assets/ICONS/SearchIcons.svg";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import  {SET_TRANSACTIONS} from "../../../../reducersAndActions/actions"




const Transactions = () => {

  const [transactions,setTransactions]=useState([
  //   {
  //   isRowChecked:false,
  //   transactionsPOCO:'',
  //   transactionsType:'',
  //   transactionsDate:'',
  //   transactionsTimeID:'',
  //   transactionsQty:'',
  //   transactionsAmount:'',
  //   transactionsStatus:''

  // }
])

  const listTransctions=useSelector((state)=>state.transactionsReducer)
  console.log('listTransactions->',listTransctions);
  const transactionsArr=listTransctions.transactions;

  const dispatch = useDispatch();


  useEffect(()=>{
    setTransactions(dispatch({type: SET_TRANSACTIONS, payload: transactions }))
  },[]);

  

  return (
    <div className="flex flex-col items-stretch justify-start gap-10">
      <div className="xl:pl-8 xl:pr-3 flex flex-col lg:flex-row justify-start lg:justify-between items-stretch gap-2 xl:gap-4 w-full">
        <div className="flex items-stretch gap-0 justify-start w-full lg:w-[50%] xl:w-[60%]">
          <div className="flex rounded-l-md bg-white items-center basis-5/6 pl-5 xl:pl-10 border border-solid border-[#AEA9B1] border-r-0">
            <img src={searchIcon} alt="search-icon" className="object-contain w-8 h-8 grow-0"/>
            <input
              type="text"
              name="search"
              id=""
              placeholder="Search by purchase order"
              className="p-3 grow shrink"
            />
          </div>
          <select name="" id="" className="outline-none basis-1/6 border border-solid border-[#AEA9B1] rounded-r-md px-8 text-center">
            <option value="">PO</option>
            <option value="">CO</option>
          </select>
        </div>
        <input type="date" name="" id="" placeholder="Date" className="w-full lg:w-[25%] xl:w-[20%] outline-none border border-solid border-[#AEA9B1] rounded-md p-3"/>
        <input type="text" name="" id="" placeholder="Type" className="w-full lg:w-[25%] xl:w-[20%] outline-none border border-solid border-[#AEA9B1] rounded-md p-3" />
      </div>

      <div className="p-3 grow overflow-auto bg-white">
        <table className="">
          <thead>
            <tr>
              <th className="min-w-[80px] xl:min-w-[100px]"></th>
              <th className="pr-4 xl:pr-8 2xl:pr-16 pt-2 pb-6 text-left 2xl:text-center align-top">PO/CO</th>
              <th className="pr-4 xl:pr-8 2xl:pr-16 pt-2 pb-6 text-left 2xl:text-center align-top">TYPE</th>
              <th className="pr-4 xl:pr-8 2xl:pr-16 pt-2 pb-6 text-left 2xl:text-center align-top">Transaction Date</th>
              <th className="pr-4 xl:pr-8 2xl:pr-16 pt-2 pb-6 text-left 2xl:text-center align-top">Time id</th>
              <th className="pr-4 xl:pr-8 2xl:pr-16 pt-2 pb-6 text-left 2xl:text-center align-top">Qty</th>
              <th className="pr-4 xl:pr-8 2xl:pr-16 pt-2 pb-6 text-left 2xl:text-center align-top">Transaction Date</th>
              <th className="pr-4 xl:pr-8 2xl:pr-16 pt-2 pb-6 text-left 2xl:text-center align-top">Status</th>
              <th className="min-w-16"></th>
            </tr>
          </thead>

          <tbody>
            {}
            
         
      
            <tr className="">
              <td className="px-3 py-4 text-left 2xl:text-center align-top"><input type="checkbox" id="check1" name="check1" className="w-6 h-6"/></td>
              <td className="pr-4 xl:pr-8 2xl:pr-16 py-4 text-left 2xl:text-center align-top">999999</td>
              <td className="pr-4 xl:pr-8 2xl:pr-16 py-4 text-left 2xl:text-center align-top">Dispute Settlement</td>
              <td className="pr-4 xl:pr-8 2xl:pr-16 py-4 text-left 2xl:text-center align-top">June 23,2023</td>
              <td className="pr-4 xl:pr-8 2xl:pr-16 py-4 text-left 2xl:text-center align-top">999999</td>
              <td className="pr-4 xl:pr-8 2xl:pr-16 py-4 text-left 2xl:text-center align-top">1</td>
              <td className="pr-4 xl:pr-8 2xl:pr-16 py-4 text-left 2xl:text-center align-top">$99.99</td>
              <td className="pr-4 xl:pr-8 2xl:pr-16 py-4 text-left 2xl:text-center align-top">
                <div className="bg-[#F6E099] rounded-md py-0.5 px-1">Settled</div>
              </td>
              <td className="px-3 py-6 text-left 2xl:text-center align-top">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-[#515A6A] rounded-full"/>
                  <div className="w-1 h-1 bg-[#515A6A] rounded-full"/>
                  <div className="w-1 h-1 bg-[#515A6A] rounded-full"/>
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
