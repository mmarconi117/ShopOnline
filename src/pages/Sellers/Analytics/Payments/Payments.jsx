import Statements from "./Statements";
import Transactions from "./Transactions";
import { useDispatch, useSelector } from "react-redux";
import { displayStatement as statement } from "../../../../reducersAndActions/actions/paymentAction";
import { displayTransaction  as transaction} from "../../../../reducersAndActions/actions/paymentAction";
function Payments() {
  const dispatch = useDispatch();
  const { displayStatement, displayTransaction } = useSelector(
    (state) => state.paymentReducer
  );
  return (
    <>
      <div>Payments</div>
      <div>
        <button onClick={() => dispatch(statement())}>Statements</button>
        <button onClick={() => dispatch(transaction())}>
          Transactions
        </button>
      </div>
      
      {displayStatement ? <Statements /> : (displayTransaction?<Transactions/>:null)}
    </>
  );
}

export default Payments;
