import { useContext } from "react";
import { HistoryContext } from "../../context/HistoryContext";
import { TapDataContext } from "../../context/TapDataContext";
import HistoryContainer from "./HistoryContainer";

const SalesHistory = () => {
    const { historyData, setHistoryData } = useContext(HistoryContext);
    const { tapData, setTapData } = useContext(TapDataContext);
    const deleteHistory = (i) => {
        let newTapData = tapData.slice(0, tapData.length);
        const data = newTapData[historyData[i].tapNumber - 1];
        if (historyData[i].type === "テイスティング") {
            data.remaining = parseInt(data.remaining) + historyData[i].quantity * 200;
            data.soldQuantity = parseInt(data.soldQuantity) - historyData[i].quantity * 200;
            data.totalSales = parseInt(data.totalSales) - historyData[i].soldPrice;
            const newHistoryData = historyData.filter((e) => e !== historyData[i]);
            setHistoryData(newHistoryData);
            setTapData(newTapData);
            return;
        }
        if (historyData[i].type === "ロス") {
            data.remaining = parseInt(data.remaining) + parseInt(historyData[i].quantity);
            const newHistoryData = historyData.filter((e) => e !== historyData[i]);
            setHistoryData(newHistoryData);
            setTapData(newTapData);
            return;
        }
        else  {
            data.remaining = parseInt(data.remaining) + parseInt(historyData[i].quantity);
            data.soldQuantity = parseInt(data.soldQuantity) - historyData[i].quantity;
            data.totalSales = parseInt(data.totalSales) - historyData[i].soldPrice;
            const newHistoryData = historyData.filter((e) => e !== historyData[i]);
            setHistoryData(newHistoryData);
            setTapData(newTapData);
            return;
        }
    };
    return (
        <div className="h-screen w-60 bg-yellow-100 overflow-scroll">
            <div className="flex justify-center items-center text-xl text-gray-800 h-20 border-gray-600 border-b-2">
                Sales History
            </div>
            {historyData && <HistoryContainer deleteHistory={deleteHistory} />}
        </div>
    );
};
export default SalesHistory;
