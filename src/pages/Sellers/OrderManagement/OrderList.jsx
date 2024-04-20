import { useEffect, useState } from "react";
import RightArrow from "../../../assets/ICONS/RightArrow.svg";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import {
  allOrder,
  pendingOrder,
  shippedOrder,
  deliveredOrder,
  errorOrder,
  sortByDate,
} from "../../../reducersAndActions/actions/ordersAction";
import { createTheme } from "@mui/material";

function OrderList() {
  const dispatch = useDispatch();
  const [orders, setOrdersLocal] = useState([]);
  const [btnState, setBtnState] = useState("all");
  const order = useSelector((state) => state.ordersReducer.orders);
  const filtered = useSelector((state) => state.ordersReducer.filtered);
  let beginDate, endDate;

  useEffect(() => {
    if (filtered.length > 0) {
      setOrdersLocal(filtered);
    } else {
      setOrdersLocal(order);
    }
  }, [filtered]);

  const columns = [
    { field: "orderNumber", headerName: "Order Number", width: 130 },
    { field: "shop", headerName: "Shop", width: 130 },
    { field: "orderDate", headerName: "Order Date", width: 120 },
    { field: "updatedDate", headerName: "Updated Date", width: 120 },
    { field: "paymentMethod", headerName: "Payment Method", width: 120 },
    { field: "price", headerName: "Price ($)", width: 70 },
    { field: "deliveryMethod", headerName: "Delivery Method", width: 130 },
    { field: "status", headerName: "Status", width: 100 },
  ];

  const handleAll = () => {
    dispatch(allOrder());
    setBtnState("all");
  };

  const handlePending = () => {
    dispatch(pendingOrder());
    setBtnState("pending");
  };

  const handleShipped = () => {
    dispatch(shippedOrder());
    setBtnState("shipped");
  };

  const handleDelivered = () => {
    dispatch(deliveredOrder());
    setBtnState("delivered");
  };

  const handleError = () => {
    dispatch(errorOrder());
    setBtnState("errors");
  };

  const handleFromDate = (begin) => {
    beginDate = new Date(begin);
    handleDates();
  };

  const handleToDate = (end) => {
    endDate = new Date(end);
    handleDates();
  };

  const handleDates = () => {
    if (beginDate && endDate) {
      dispatch(sortByDate({ begin: beginDate, end: endDate }));
    } else {
      if (beginDate) {
        dispatch(sortByDate({ begin: beginDate }));
      } else {
        if (endDate) {
          dispatch(sortByDate({ end: endDate }));
        }
      }
    }
  };

  const clearFilters = () => {
    setOrdersLocal(order);
  };

  const theme = createTheme({
    typography: {
      fontSize: 5
    }
  })

  return (
    <div className="flex flex-col items-stretch px-5 py-4 sm:px-10 sm:py-8">
      {/* Order List Title/ breadcrumb */}
      <div className="flex max-w-full flex-col items-stretch self-start max-md:ml-0 ">
        <div className="flex items-stretch justify-between gap-3.5 max-md:justify-center">
          <div className="text-neutral-400 text-base font-medium leading-8 whitespace-nowrap self-start ">
            Order List
          </div>
          <img
            loading="lazy"
            src={RightArrow}
            className="aspect-square object-contain object-center w-3 overflow-hidden shrink-0 max-w-full"
            alt="Right Arrow"
          />
          <div className="text-stone-950 text-base font-medium leading-8 self-start">
            All
          </div>
        </div>
        <div className="text-zinc-800 text-lg sm:text-xl font-semibold leading-[52px] whitespace-nowrap mt-2 sm:mb-5">
          Order List
        </div>
      </div>
      {/* Filters */}
      <div className="bg-white flex flex-col pt-6 pb-5 px-5 sm:px-10 rounded-t items-stretch border-t-4 border-[#EEC643] border-solid gap-5">
        <div className="text-stone-950 text-[9px] sm:text-base font-semibold leading-6 whitespace-nowrap flex items-center gap-2">
          <span className="sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M9.5 1H2.5C2.10218 1 1.72064 1.15804 1.43934 1.43934C1.15804 1.72064 1 2.10218 1 2.5V3.085C0.999928 3.29147 1.04248 3.49573 1.125 3.685V3.715C1.19564 3.87549 1.2957 4.02133 1.42 4.145L4.5 7.205V10.5C4.49983 10.585 4.52132 10.6686 4.56244 10.7429C4.60355 10.8173 4.66294 10.88 4.735 10.925C4.81457 10.9743 4.90639 11.0003 5 11C5.07827 10.9995 5.15534 10.9807 5.225 10.945L7.225 9.945C7.30746 9.90345 7.3768 9.83988 7.42534 9.76133C7.47388 9.68279 7.49972 9.59233 7.5 9.5V7.205L10.56 4.145C10.6843 4.02133 10.7844 3.87549 10.855 3.715V3.685C10.9444 3.49722 10.9938 3.29289 11 3.085V2.5C11 2.10218 10.842 1.72064 10.5607 1.43934C10.2794 1.15804 9.89782 1 9.5 1ZM6.645 6.645C6.59866 6.69172 6.562 6.74713 6.53711 6.80805C6.51223 6.86897 6.49962 6.9342 6.5 7V9.19L5.5 9.69V7C5.50038 6.9342 5.48777 6.86897 5.46289 6.80805C5.438 6.74713 5.40134 6.69172 5.355 6.645L2.705 4H9.295L6.645 6.645ZM10 3H2V2.5C2 2.36739 2.05268 2.24021 2.14645 2.14645C2.24022 2.05268 2.36739 2 2.5 2H9.5C9.63261 2 9.75979 2.05268 9.85355 2.14645C9.94732 2.24021 10 2.36739 10 2.5V3Z"
                fill="#1D1B20"
              />
            </svg>
          </span>
          FILTERS
        </div>
        <div className="justify-start items-center flex gap-2 sm:gap-8 min-w-min max-w-[1000px]">
          <div className="text-[9px] sm:text-base self-start text-neutral-400 font-medium leading-0 whitespace-nowrap mt-0">
            STATUS:
          </div>
          <div className="flex sm:flex-wrap gap-1 min-[390px]:gap-2 sm:gap-8 justify-start items-center lg:flex-nowrap">
            <button
              type="button"
              className={`max-sm:h-[14px] text-[9px] sm:text-sm sm:leading-8 whitespace-nowrap lg:grow justify-center items-center px-2 sm:px-4 rounded-2xl cursor-pointer ${
                btnState === "all"
                  ? "bg-[#EEC643] text-black"
                  : "bg-zinc-400 text-white "
              }`}
              onClick={handleAll}
            >
              All
            </button>
            <button
              type="button"
              className={`max-sm:h-[14px] text-[9px] sm:text-sm sm:leading-8 whitespace-nowrap lg:grow justify-center items-center px-2 sm:px-4 rounded-2xl cursor-pointer ${
                btnState === "pending"
                  ? "bg-[#EEC643] text-black"
                  : "bg-zinc-200 text-neutral-400"
              }`}
              onClick={handlePending}
            >
              Pending (
              {order.filter((order) => order.status === "Pending").length})
            </button>
            <button
              type="button"
              className={` text-[9px] sm:text-sm sm:leading-8 whitespace-nowrap lg:grow justify-center items-center px-2 sm:px-4 rounded-2xl cursor-pointer ${
                btnState === "shipped"
                  ? "bg-[#EEC643] text-black"
                  : "bg-zinc-200 text-neutral-400"
              }`}
              onClick={handleShipped}
            >
              Shipped
            </button>
            <button
              type="button"
              className={`max-sm:h-[14px] text-[9px] sm:text-sm sm:leading-8 whitespace-nowrap lg:grow justify-center items-center px-2 sm:px-4 rounded-2xl cursor-pointer ${
                btnState === "delivered"
                  ? "bg-[#EEC643] text-black"
                  : "bg-zinc-200 text-neutral-400"
              }`}
              onClick={handleDelivered}
            >
              Delivered
            </button>
            <button
              type="button"
              className={`max-sm:h-[14px] text-[9px] sm:text-sm sm:leading-8 whitespace-nowrap lg:grow justify-center items-center px-2 sm:px-4 rounded-2xl cursor-pointer ${
                btnState === "errors"
                  ? "bg-[#EEC643] text-black"
                  : "bg-zinc-200 text-neutral-400"
              }`}
              onClick={handleError}
            >
              Errors
            </button>
          </div>
        </div>

        <div className="bg-stone-300 h-px max-md:max-w-full mt-[-10px] sm:mt-0" />
        <div className="flex flex-col lg:flex-row justify-between gap-5 items-stretch">
          <div className="flex gap-2 justify-between lg:w-2/3">
            <div className="relative flex flex-col grow max-w-[600px]">
              <input
                type="date"
                onChange={(e) => handleFromDate(e.target.value)}
                className="border p-2 sm:p-5 max-sm:text-[9px] rounded-md border-solid items-start"
              />
              <div className="absolute px-2.5 text-zinc-500 text-[9px] sm:text-xs whitespace-nowrap bg-white top-[-5px] left-[12px]">
                Start date *
              </div>
            </div>
            <div className="relative flex flex-col grow max-w-[600px]">
              <div className="absolute px-2.5 text-zinc-500 text-[9px] sm:text-xs whitespace-nowrap bg-white top-[-5px] left-[12px]">
                End date *
              </div>
              <input
                type="date"
                onChange={(e) => handleToDate(e.target.value)}
                className="border p-2 sm:p-5 max-sm:text-[9px] rounded-md border-solid items-start"
              />
            </div>
          </div>
          <div className="relative flex flex-col grow max-w-[600px] border rounded-md border-solid pr-5">
            <div className="absolute px-2.5 text-zinc-500 text-[9px] sm:text-xs whitespace-nowrap bg-white top-[-5px] left-[12px]">
              Payment Method
            </div>
            <select className="p-2 sm:p-5 max-sm:text-[9px] items-start outline-none">
              <option>All</option>
            </select>
          </div>
        </div>
      </div>
      {/* Order Action */}
      <div className="self-stretch flex items-stretch justify-between mt-8 max-sm:text-[9px]">
        <div className="flex items-stretch justify-start lg:justify-between gap-2 lg:gap-5">
          <div className="bg-white border p-1 sm:p-3 min-w-[121px] lg:min-w-[328px] rounded-md flex items-center">
            <select className="w-full">
              <option>Order action</option>
            </select>
          </div>
          <button className="max-sm:text-[9px] min-w-[42px] sm:min-w-[82px] sm:bg-[#EEC643] text-[#09618E] sm:text-zinc-500 text-base leading-6 whitespace-nowrap items-center p-1 sm:p-3 rounded-md grow lg:grow-0 border-[#2284B6] border-solid max-sm:border-2 max-sm:font-semibold">
            GO
          </button>
        </div>
        <div className="flex items-stretch justify-between gap-2 my-auto ">
          <button
            type="button"
            onClick={() => {
              clearFilters();
            }}
            className="text-[#605D64] sm:text-stone-950 max-sm:bg-white text-[9px] sm:text-sm leading-6 whitespace-nowrap items-stretch border-[0.5px] border-[#CAC5CD] sm:border-[color:var(--color-styles-neutral-700,#605D64)] grow justify-center p-1 sm:p-3 rounded-md border-solid max-sm:min-w-[73px]"
          >
            CLEAR FILTERS
          </button>
          <button className="text-[#0F1111] sm:text-zinc-500 text-[9px] sm:text-sm leading-6 whitespace-nowrap items-stretch bg-[#EEC643] grow justify-center p-1 sm:p-3 rounded-md max-sm:min-w-[61px]">
            EXPORT
          </button>
        </div>
      </div>
      {/* Table */}
      <div className="bg-white w-auto self-stretch flex flex-col items-stretch mt-9 px-6 py-3 rounded-none max-md:max-w-full max-md:px-5">
        {/* show table here */}
        <DataGrid
          classes={{cell:"max-sm:text-[9px]", columnHeaderTitle:"max-sm:text-[9px]"}}
          rows={orders}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export default OrderList;
