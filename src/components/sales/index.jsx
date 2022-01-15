import { useContext, useState } from "react";
import { TapDataContext } from "../../context/TapDataContext";
import TapContainer from "./TapContainer";
import WasteModal from "../modals/WasteModal";
import { ShowContext } from "../../context/ShowContext";
import SellingByWeightModal from "../modals/SellingWeightModal";
import TastingModal from "../modals/TastingModal";
import InformationModal from "../modals/InformationModal";

const SalesScreen = () => {
    const { tapData, setTapData } = useContext(TapDataContext);
    const {
        showWasteModal,
        setShowWasteModal,
        showSellingWeightModal,
        setShowSellingWeightModal,
        showTastingModal,
        setShowTastingModal,
        showInformationModal,
    } = useContext(ShowContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [wasteQuantity, setWasteQuantity] = useState(0);
    const [sellingWeightQuantity, setSellingWeightQuantity] = useState(0);
    const [tastingQuantity, setTastingQuantity] = useState(1);
    const wasteSubmit = (e, wasteIndex) => {
        e.preventDefault();
        let newData = tapData;
        newData[wasteIndex].remaining = newData[wasteIndex].remaining - wasteQuantity;
        setWasteQuantity(0);
        setShowWasteModal(false);
        setTapData(newData);
    };
    const sellingSubmit = (e, sellingIndex) => {
        e.preventDefault();
        let newData = tapData;
        newData[sellingIndex].remaining = newData[sellingIndex].remaining - sellingWeightQuantity;
        newData[sellingIndex].soldQuantity =
            parseInt(newData[sellingIndex].soldQuantity) + parseInt(sellingWeightQuantity);
        newData[sellingIndex].totalSales = Math.ceil(
            newData[sellingIndex].totalSales + sellingWeightQuantity * newData[sellingIndex].cost
        );
        setSellingWeightQuantity(0);
        setShowSellingWeightModal(false);
        setTapData(newData);
    };
    const tastingSubmit = (e, tastingIndex) => {
        e.preventDefault();
        let newData = tapData;
        newData[tastingIndex].remaining = newData[tastingIndex].remaining - tastingQuantity * 200;
        newData[tastingIndex].soldQuantity =
            parseInt(newData[tastingIndex].soldQuantity) + parseInt(tastingQuantity) * 200;
        newData[tastingIndex].totalSales = tastingQuantity * newData[tastingIndex].tastingPlace;
        setTastingQuantity(1);
        setShowTastingModal(false);
    };
    console.log(tapData);
    return (
        <div className="w-screen h-screen max-w-lg m-auto text-center">
            <div className="text-xl my-10">SalesScreen</div>
            <div className={"grid grid-cols-2"}>
                {tapData &&
                    tapData.map((e, tapIndex) => (
                        <TapContainer
                            key={tapIndex}
                            tapIndex={tapIndex}
                            setCurrentIndex={setCurrentIndex}
                        />
                    ))}
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
                    sellingWeightQuantity={sellingWeightQuantity}
                    setSellingWeightQuantity={setSellingWeightQuantity}
                    currentIndex={currentIndex}
                />
            )}
            {showTastingModal && (
                <TastingModal
                    tastingSubmit={tastingSubmit}
                    tastingQuantity={tastingQuantity}
                    setTastingQuantity={setTastingQuantity}
                    currentIndex={currentIndex}
                />
            )}
            {showInformationModal && <InformationModal currentIndex={currentIndex} />}
        </div>
    );
};
export default SalesScreen;
