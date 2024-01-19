import { useReducer } from "react";
import Statements from "./Statements";
import Transactions from "./Transactions";
import paymentDisplay from "../../../../reducersAndActions/reducers/paymentDisplayReducer";
function Payments() {
  const [state, dispatch] = useReducer(paymentDisplay, {
    display: "DISPLAY_STATEMENT",
  });
  return (
    <>
      <div>Payments</div>
      <div>
        <button onClick={() => dispatch({ type: "DISPLAY_STATEMENT" })}>
          Statements
        </button>
        <button onClick={() => dispatch({ type: "DISPLAY_TRANSACTION" })}>
          Transactions
        </button>
      </div>

      {state.display === "STATEMENT" ? <Statements /> : <Transactions />}
    </>
  );
}

export default Payments;
