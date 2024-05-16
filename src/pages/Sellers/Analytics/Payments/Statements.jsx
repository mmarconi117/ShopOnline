import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import {SET_STATEMENTS} from "../../../../reducersAndActions/actions"
import axios from "axios";




const Statements = () => {

  const [statements,setStatements]=useState({})


  const dispatch = useDispatch();


  useEffect(() => {
      const fetchStatements = async () => {
          try {
              const statementsRes = await axios.get("https://sonnyny-be.onrender.com/api/subcategories/1");
              const items = statementsRes.data
              setStatements(items);
          } 
          catch (error) {
              console.error("Error fetching categories:", error);
          }
      };
     fetchStatements()
  },[]);

  console.log('statements->',statements)

  return (
    <div className="flex flex-col min-w-max items-stretch gap-8">
      <div className="px-3 py-2 bg-white flex flex-col justify-evenly gap-2 rounded-md">
        <div className="text-lg sm:text-2xl leading-10 font-medium sm:font-semibold">Payment Information</div>
        <div className="flex justify-between items-center">
          <p className="text-xs sm:text-base">Status</p>
          <p className="text-xs rounded-md bg-[#CAC5CD] py-1 px-2">statementsStatus {statements.subcategory_name}</p>
        </div>

        <div className="text-xs sm:text-base flex justify-between items-center">
          <p>Last settlement</p>
          <p>lastSettlement {statements.id}</p>
        </div>
      </div>

      <div className="px-3 py-5 bg-white flex justify-between items-center rounded-md text-xs sm:text-base">
        <select 
          name="" 
          id="" 
          className="outline-none"

          >
          <option value="">Select a statement</option>
          <option value="Checking">Checking</option>
          <option value="Saving">Saving</option>
        </select>
        <div className="hidden sm:block w-[1px] h-10 bg-[#cbcbcb] mx-[-60px]"/>
        <div className="flex justify-start gap-2 items-center">
          <p>isPaidtoYou  {statements.id}</p>
          <div className="flex justify-center items-center w-5 h-5 rounded-full border-solid border-[2px] text-[#AEA9B1] border-[#AEA9B1]">!</div>
        </div>
        <p>{statements.amount}</p>
      </div>

      <div className="px-3 py-2 bg-white flex flex-col justify-evenly gap-2 rounded-md text-xs sm:text-base">
        <div className="text-xl font-medium pt-1">Sales</div>
        <div className="flex justify-between items-center px-1">
          <p>Product price</p>
          <p className="pl-8">$ salesProductPrice {statements.categoryId}</p>
        </div>

        <div className="flex justify-between items-center px-1">
          <p>Shipping</p>
          <p className="pl-8">$ {statements.salesShipping} {statements.categoryId}</p>
        </div>

        <div className="flex justify-between items-center px-1">
          <p>Net tax collected</p>
          <p className="pl-8">$ {statements.salesNetTaxCollected} {statements.categoryId}</p>
        </div>

        <div className="flex justify-between items-center px-1">
          <p>Commission</p>
          <p className="pl-8">$ {statements.salesCommision} {statements.categoryId}</p>
        </div>

        <div className="flex justify-between items-center px-1">
          <p>Net tax withheld</p>
          <p className="pl-8">$ {statements.salesNetTaxWithheld} {statements.categoryId}</p>
        </div>

        <div className="flex justify-between items-center px-1 py-2 text-lg sm:text-xl font-medium">
          <p>Total</p>
          <p className="pl-8">$ {statements.salesTotal} {statements.categoryId}</p>
        </div>
      </div>

      <div className="px-3 py-2 bg-white flex flex-col justify-evenly gap-2 rounded-md text-xs sm:text-base">
        <div className="text-xl font-medium pt-1">Refunds</div>
        <div className="flex justify-between items-center px-1">
          <p>Product price</p>
          <p className="pl-8">$ {statements.refundProductPrice} {statements.categoryId}</p>
        </div>

        <div className="flex justify-between items-center px-1">
          <p>Shipping</p>
          <p className="pl-8">$ {statements.refundShipping} {statements.categoryId}</p>
        </div>

        <div className="flex justify-between items-center px-1">
          <p>Net tax collected</p>
          <p className="pl-8">$ {statements.refundNetTaxCollected} {statements.categoryId}</p>
        </div>

        <div className="flex justify-between items-center px-1">
          <p>Commission</p>
          <p className="pl-8">$ {statements.refundCommision} {statements.categoryId}</p>
        </div>

        <div className="flex justify-between items-center px-1">
          <p>Net tax withheld</p>
          <p className="pl-8">$ {statements.refundNetTaxWithheld} {statements.categoryId}</p>
        </div>

        <div className="flex justify-between items-center px-1 py-2 text-lg sm:text-xl font-medium">
          <p>Total</p>
          <p className="pl-8">$ {statements.refundsTotal} {statements.categoryId}</p>
        </div>
      </div>

      <div className="px-3 py-2 bg-white flex flex-col justify-evenly gap-2 rounded-md text-xs sm:text-base">
        <div className="text-xl font-medium pt-1">Adjustment</div>
        <div className="flex justify-between items-center px-1">
          <p>Shipping Service Charges</p>
          <p className="pl-8">$ {statements.adjustmentShipingServiceCharges} {statements.categoryId}</p>
        </div>

        <div className="flex justify-between items-center px-1">
          <p>Handling Service Charges</p>
          <p className="pl-8">$ {statements.adjustmentHandlingServiceCharges} {statements.categoryId}</p>
        </div>

        <div className="flex justify-between items-center px-1">
          <p>Extra total Charges</p>
          <p className="pl-8">$ {statements.adjustmentExtraTotalCharges} {statements.categoryId}</p>
        </div>

        <div className="flex justify-between items-center px-1 py-2 text-lg sm:text-xl font-medium">
          <p>Total</p>
          <p className="pl-8">$ {statements.adjustmentTotal} {statements.categoryId}</p>
        </div>
      </div>

      <div className="px-3 py-2 bg-white flex flex-col justify-evenly gap-2 rounded-md text-xs sm:text-base">
        <div className="text-xl font-medium pt-1">Fulfilment Service</div>
        <div className="flex justify-between items-center px-1">
          <p>SONNY Fulfillment Services fees</p>
          <p className="pl-8">$ {statements.fulfillmentServicesfees} {statements.categoryId}</p>
        </div>

        <div className="flex justify-between items-center px-1">
          <p>Handling Service fees</p>
          <p className="pl-8">$ {statements.fulfillmentHandlingServiceFees} {statements.categoryId}</p>
        </div>

        <div className="flex justify-between items-center px-1 py-2 text-lg sm:text-xl font-medium">
          <p>Total</p>
          <p className="pl-8">$ {statements.fulfillmentTotal} {statements.categoryId}</p>
        </div>
      </div>

      <div className="px-3 py-2 bg-white flex flex-col justify-evenly gap-2 rounded-md text-xs sm:text-base">
        <div className="text-xl font-medium pt-1">Other activities</div>
        <div className="flex justify-between items-center px-1">
          <p>Extra Total Charges</p>
          <p className="pl-8">$ {statements.extraTotalCharges} {statements.categoryId} </p>
        </div>

        <div className="flex justify-between items-center px-1 py-2 text-lg sm:text-xl font-medium">
          <p>Total</p>
          <p className="pl-8">$ {statements.extraTotal} {statements.categoryId} </p>
        </div>
      </div>
    </div>
  );
};

export default Statements;
