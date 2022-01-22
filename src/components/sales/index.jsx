import { useContext, useState } from "react";
import { TapDataContext } from "../../context/TapDataContext";
import TapContainer from "./TapContainer";
import WasteModal from "../modals/WasteModal";
import { ShowContext } from "../../context/ShowContext";
import SellingByWeightModal from "../modals/SellingWeightModal";
import InformationModal from "../modals/InformationModal";
import dayjs from "dayjs";
import { HistoryContext } from "../../context/HistoryContext";
import SalesHistory from "../history/SalesHistory";

const SalesScreen = () => {
    const { tapData, setTapData, currentIndex } = useContext(TapDataContext);
    const { historyData, setHistoryData } = useContext(HistoryContext);
    const {
        showWasteModal,
        setShowWasteModal,
        showSellingWeightModal,
        setShowSellingWeightModal,
        showInformationModal,
    } = useContext(ShowContext);
    const [wasteQuantity, setWasteQuantity] = useState(0);
    const [sellingQuantity, setSellingQuantity] = useState("");
    const [sellingType, setSellingType] = useState("BPM");
    const wasteSubmit = (e, i) => {
        e.preventDefault();
        let newData = tapData.slice(0, tapData.length);
        const wasteData = {
            name: newData[i].name,
            tapNumber: i + 1,
            day: dayjs(),
            quantity: wasteQuantity,
            type: "ロス",
        }
        newData[i].remaining = newData[i].remaining - wasteQuantity;
        setWasteQuantity(0);
        setShowWasteModal(false);
        setTapData(newData);
        historyData.unshift(wasteData)
    };
    const sellingSubmit = (e, i) => {
        e.preventDefault();
        let newData = tapData.slice(0, tapData.length);
        const discountValue = sellingType === "BPM" ? Math.ceil(sellingQuantity * 0.15) : 0;
        const soldPrice = Math.ceil(sellingQuantity * newData[i].cost) - discountValue;
        const sellingData = {
            name: newData[i].name,
            tapNumber: i + 1,
            day: dayjs(),
            quantity: sellingQuantity,
            type: sellingType,
            soldPrice: soldPrice,
        };
        newData[i].remaining = newData[i].remaining - sellingQuantity;
        newData[i].soldQuantity = parseInt(newData[i].soldQuantity) + parseInt(sellingQuantity);
        newData[i].totalSales = Math.ceil(
            newData[i].totalSales + sellingQuantity * newData[i].cost - discountValue
        );
        setSellingQuantity(0);
        setShowSellingWeightModal(false);
        setTapData(newData);
        historyData.unshift(sellingData)
    };
    const tastingSubmit = (i) => {
        let newData = tapData.slice(0, tapData.length);
        const tastingData = {
            name: newData[i].name,
            tapNumber: i + 1,
            day: dayjs(),
            quantity: 1,
            type: "テイスティング",
            soldPrice: newData[i].tastingPrice,
        };
        newData[i].remaining = newData[i].remaining - 200;
        newData[i].soldQuantity = parseInt(newData[i].soldQuantity) + 200;
        newData[i].totalSales = parseInt(newData[i].totalSales) + newData[i].tastingPrice;
        setTapData(newData);
        historyData.unshift(tastingData)
    };
    return (
        <div className="w-screen h-screen  m-auto text-center">
            <div className="flex">
                <SalesHistory />
                <div>
                    <p className=" inline-block text-xl mt-10 pb-4 border-b-2">
                        {dayjs().format("YYYY年MM月DD日")}
                    </p>
                    <div className="mt-14 grid grid-cols-2">
                        {tapData &&
                            tapData.map((e, tapIndex) => (
                                <TapContainer
                                    key={tapIndex}
                                    tapIndex={tapIndex}
                                    tastingSubmit={tastingSubmit}
                                />
                            ))}
                    </div>
                </div>
            </div>
            {showWasteModal && (
                <WasteModal
                    wasteSubmit={wasteSubmit}
                    setWasteQuantity={setWasteQuantity}
                    currentIndex={currentIndex}
                />
            )}
            {showSellingWeightModal && (
                <SellingByWeightModal
                    sellingSubmit={sellingSubmit}
                    sellingQuantity={sellingQuantity}
                    setSellingQuantity={setSellingQuantity}
                    sellingType={sellingType}
                    setSellingType={setSellingType}
                    currentIndex={currentIndex}
                />
            )}
            {showInformationModal && <InformationModal currentIndex={currentIndex} />}
        </div>
    );
};
export default SalesScreen;
