import { useState } from "react";
import { Chart } from "react-google-charts";
import { getTotalIncome, getWithdrawals, getTotalInventory } from "../../../DashboardComputations";

const ChartComponent = () => {

    const [data1, setData1] = useState([
        ["Month", "Total_Income", "Withdrawals"],
        ["2024/01", 165, 938],
        ["2024/02", 135, 1120],
        ["2024/03", 157, 1167],
        ["2024/04", 139, 1110],
        ["2024/05", 136, 691]
    ]);

    const [data2, setData2] = useState([
        ["Current Month", "Total_Inventory"],
        ["2024/05", 165],
        //["2005/06", 135],
        //["2006/07", 157],
        //["2007/08", 139],
        //["2008/09", 136]
    ]);


    const options1 = {
        title: "Monthly Display of Total_Income & Expenses.",
        vAxis: { title: "Amount($)" },
        hAxis: { title: "Month" },
        seriesType: "bars",
        series: { 5: { type: "line" } }
    };

    const options2 = {
        title: "Current Total_Inventory.",
        vAxis: { title: "Figure" },
        hAxis: { title: "Month" },
        seriesType: "bars",
        series: { 1: { type: "line" } }
    };


    //Define a function for updating of Chart1.
    function handleDataUpdate1() {
        const newData = data1.map((entry, index) => {
            if (index === 0) {
                return entry;
            } else {
                const newTotalIncome = parseFloat(getTotalIncome());
                const newExpenses = parseFloat(getWithdrawals());
                return [[entry[0], newTotalIncome], [entry[0], newExpenses]];
            }
        });
        setData1(newData);
    }

    //Define a function for updataing of Chart2.
    function handleDataUpdate2() {
        const newData = data2.map((entry, index) => {
            if (index === 0) {
                return entry;
            } else {
                const newInventory = parseFloat(getTotalInventory());
                return [entry[0], newInventory];
            }
        });
        setData2(newData);
    }


    //For the chartEvents1 function.
    const chartEvents1 = [{
        eventName: 'select',
        callback({ chartWrapper }) {
            const selectedItems = chartWrapper.getChart().getSelection();
            if (selectedItems.length > 0) {
                const selectedItem = selectedItems[0];
                const row = selectedItem.row + 1;
                const dataPoint = data1[row];
                alert(`You clicked on Month ${dataPoint[0]} with Total_Income ${dataPoint[1]} and Withdrawals ${dataPoint[2]}`);
            }
        }
    }];

    //For the chartEvents2 function.
    const chartEvents2 = [{
        eventName: 'select',
        callback({ chartWrapper }) {
            const selectedItems = chartWrapper.getChart().getSelection();
            if (selectedItems.length > 0) {
                const selectedItem = selectedItems[0];
                const row = selectedItem.row + 1;
                const dataPoint = data2[row];
                alert(`You clicked on Month ${dataPoint[0]} with Total_Inventory ${dataPoint[1]}`);
            }
        }
    }];

    return (
        <div
            className="xl:grow shadow-md p-1 bg-white rounded-md"
            id="graph-component"
        >
            <div>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleDataUpdate1}>Update Data</button>
                <Chart
                    chartType="ComboChart"
                    width={"100%"}
                    height="180px"
                    data={data1}
                    options={options1}
                    chartEvents={chartEvents1}
                />
            </div>
            <div><hr></hr><hr></hr><hr></hr><hr></hr></div>
            <div>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleDataUpdate2}>Update Data</button>
                <Chart
                    chartType="ComboChart"
                    width={"100%"}
                    height="150px"
                    data={data2}
                    options={options2}
                    chartEvents={chartEvents2}
                />
            </div>

        </div>
    );
};

export default ChartComponent;
