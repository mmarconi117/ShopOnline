
import { useEffect, useState } from 'react';
import RightArrow from '../../../assets/ICONS/RightArrow.svg';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import {
    allOrder,
    pendingOrder,
    shippedOrder,
    deliveredOrder,
    errorOrder,
    sortByDate
} from "../../../reducersAndActions/actions/ordersAction";

function OrderList() {
    const dispatch = useDispatch();
    const [orders, setOrdersLocal] = useState([]);
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
        { field: "status", headerName: "Status", width: 100 }
    ];

    const handleAll = () => {
        dispatch(allOrder());
    };

    const handlePending = () => {
        dispatch(pendingOrder());
    };

    const handleShipped = () => {
        dispatch(shippedOrder());
    };

    const handleDelivered = () => {
        dispatch(deliveredOrder());
    };

    const handleError = () => {
        dispatch(errorOrder());
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
                <div className="text-zinc-800 text-xl font-semibold leading-[52px] whitespace-nowrap mt-2">
                    Order List
                </div>
            </div>
            {/* Filters */}
            <div className="bg-white flex flex-col pt-6 pb-5 px-5 sm:px-10 rounded-t items-stretch border-t-4 border-[#EEC643] border-solid gap-5">
                <div className="text-stone-950 text-base font-semibold leading-6 whitespace-nowrap">
                    FILTERS
                </div>
                <div className="justify-start items-center flex gap-8 min-w-min max-w-[1000px]">
                    <div className="hidden sm:block self-start text-neutral-400 text-base font-medium leading-0 whitespace-nowrap mt-0">
                        STATUS:
                    </div>
                    <div className='flex flex-wrap gap-4 sm:gap-8 justify-start items-center lg:flex-nowrap'>
                        <button
                            type="button"
                            className="text-white text-sm leading-8 whitespace-nowrap bg-zinc-400 lg:grow justify-center items-center px-4 rounded-2xl cursor-pointer"
                            onClick={handleAll}
                        >
                            All
                        </button>
                        <button
                            type="button"
                            className="text-neutral-400  text-sm leading-8 whitespace-nowrap bg-zinc-200 lg:grow justify-center items-center px-4 rounded-2xl cursor-pointer"
                            onClick={handlePending}
                        >
                            Pending (0)
                        </button>
                        <button
                            type="button"
                            className="text-neutral-400  text-sm leading-8 whitespace-nowrap bg-zinc-200 lg:grow justify-center items-center px-4 rounded-2xl cursor-pointer"
                            onClick={handleShipped}
                        >
                            Shipped
                        </button>
                        <button
                            type="button"
                            className="text-neutral-400  text-sm leading-8 whitespace-nowrap bg-zinc-200 lg:grow justify-center items-center px-4 rounded-2xl cursor-pointer"
                            onClick={handleDelivered}
                        >
                            Delivered
                        </button>
                        <button
                            type="button"
                            className="text-neutral-400  text-sm leading-8 whitespace-nowrap bg-zinc-200 lg:grow justify-center items-center px-4 rounded-2xl cursor-pointer"
                            onClick={handleError}
                        >
                            Errors
                        </button>
                    </div>
                </div>

                <div className="bg-stone-300 h-px max-md:max-w-full" />
                <div className="flex flex-col lg:flex-row justify-between gap-5 items-stretch">
                    <div className="relative flex flex-col grow max-w-[600px]">
                        <input
                            type="date"
                            onChange={(e) => handleFromDate(e.target.value)}
                            className="border p-5 rounded-md border-solid items-start"
                        />
                        <div className="absolute px-2.5 text-zinc-500 text-xs whitespace-nowrap bg-white top-[-5px] left-[12px]">
                            Start date *
                        </div>
                    </div>
                    <div className="relative flex flex-col grow max-w-[600px]">
                        <div className="absolute px-2.5 text-zinc-500 text-xs whitespace-nowrap bg-white top-[-5px] left-[12px]">
                            End date *
                        </div>
                        <input
                            type="date"
                            onChange={(e) => handleToDate(e.target.value)}
                            className="border p-5 rounded-md border-solid items-start"
                        />
                    </div>
                    <div className="relative flex flex-col grow max-w-[600px] border rounded-md border-solid pr-5">
                        <div className="absolute px-2.5 text-zinc-500 text-xs whitespace-nowrap bg-white top-[-5px] left-[12px]">
                            Payment Method
                        </div>
                        <select className="p-5 items-start outline-none">
                            <option>All</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* Order Action */}
            <div className="self-stretch flex flex-col lg:flex-row items-stretch justify-between mt-8 gap-10 lg:gap-2">
                <div className="flex items-stretch justify-start lg:justify-between gap-2 lg:gap-5">
                    <div className='px-5 bg-white border py-3 min-w-[70%] lg:min-w-[328px] rounded-md'>
                        <select className="w-full">
                            <option>Order action</option>
                        </select>
                    </div>
                    <button className="min-w-[82px] bg-[#EEC643] text-zinc-500 text-base leading-6 whitespace-nowrap items-center self-center p-3 rounded-md grow lg:grow-0">
                        GO
                    </button>
                </div>
                <div className="flex items-stretch justify-between gap-5 my-auto">
                    <button
                        type="button"
                        onClick={() => {
                            clearFilters();
                        }}
                        className="text-stone-950 text-sm leading-6 whitespace-nowrap items-stretch border border-[color:var(--color-styles-neutral-700,#605D64)] grow justify-center p-2.5 rounded-md border-solid"
                    >
                        CLEAR FILTERS
                    </button>
                    <button className="text-zinc-500 text-sm leading-6 whitespace-nowrap items-stretch bg-[#EEC643] grow justify-center pl-7 pr-4 py-2.5 rounded-md max-md:pl-5">
                        EXPORT
                    </button>
                </div>
            </div>
            {/* Table */}
            <div className="bg-white w-auto self-stretch flex flex-col items-stretch mt-9 px-6 py-3 rounded-none max-md:max-w-full max-md:px-5">
                {/* show table here */}
                <DataGrid
                    className="text-base"
                    rows={orders}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 }
                        }
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default OrderList;
