import { useReducer } from "react";
import Statements from "./Statements";
import Transactions from "./Transactions";
import paymentDisplay from "../../../../reducersAndActions/reducers/paymentDisplayReducer";
import { displayStatement, displayTransaction } from "../../../../reducersAndActions/actions/paymentDisplayAction";
function Payments() {
  const [state, dispatch] = useReducer(paymentDisplay, {
    display: displayStatement(),
  });
  return (
    <>
      <div>Payments</div>
      <div>
        <button onClick={() => dispatch(displayStatement())}>
          Statements
        </button>
        <button onClick={() => dispatch(displayTransaction())}>
          Transactions
        </button>
      </div>

      {state.display === "STATEMENT" ? <Statements /> : <Transactions />}
    </>
  );
}

export default Payments;
