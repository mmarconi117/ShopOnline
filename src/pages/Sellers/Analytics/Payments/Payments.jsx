import Statements from "./Statements";
import Transactions from "./Transactions";
import { useDispatch, useSelector } from "react-redux";
import { displayStatement as statement } from "../../../../reducersAndActions/actions/paymentAction";
import { displayTransaction as transaction } from "../../../../reducersAndActions/actions/paymentAction";
import { useState, useEffect } from "react";
function Payments() {
  const dispatch = useDispatch();
  const { displayStatement, displayTransaction } = useSelector(
    (state) => state.paymentReducer
  );
  
  const [statementPage, setStatement] = useState(true);

  return (
    <div className="font-Roboto py-8 px-6 xl:px-12 flex flex-col item-stretch justify-start gap-9 grow">
      <div className="self-center sm:self-start text-[32px] font-semibold leading-[52px] text-[#313133] mb-4">
        Payments
      </div>
      <div className="flex items-stretch justify-center sm:justify-start gap-4">
        <button
          className={`p-[10px] ${statementPage ? "bg-[#FFFEFB] border-t-4 border-[#EEC643] rounded-t-md" : ""} text-xl font-medium outline-none`}
          onClick={() => {
            dispatch(statement());
            setStatement(true);
          }}
        >
          Statements
        </button>
        <button
          className={`p-[10px] ${statementPage ? "" : "bg-[#FFFEFB] border-t-4 border-[#EEC643] rounded-t-md"} text-xl font-medium outline-none`}
          onClick={() => {
            dispatch(transaction());
            setStatement(false);
          }}
        >
          Transactions
        </button>
      </div>

      {displayStatement ? (
        <Statements />
      ) : displayTransaction ? (
        <Transactions />
      ) : null}
    </div>
  );
}

export default Payments;
