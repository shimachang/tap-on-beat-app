import { useState, useContext } from "react";
import { ShowContext } from "../../context/ShowContext";
import { TapDataContext } from "../../context/TapDataContext";
import { HelpOutlineOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import OrderAlert from "../global/OrderAlert";

const TapBody = ({ tapIndex, tastingSubmit }) => {
    const {
        setShowSellingWeightModal,
        setShowWasteModal,
        setShowInformationModal,
    } = useContext(ShowContext);
    const { tapData, currentIndex, setCurrentIndex } = useContext(TapDataContext);
    const orderFlag = tapData[tapIndex].remaining < 2000 ? true : false;
    return (
        <>
            <div className="bg-gray-200 py-6 rounded-lg">
                <div className="py-2 mb-2 border-gray-400 border-b-2">Tap{tapIndex + 1}</div>
                <div className="inline-block border-red-400 border-b-4 my-4 text-xl">
                    {tapData[tapIndex].name}
                </div>
                <IconButton
                    edge="end"
                    onClick={() => {
                        setShowInformationModal(true);
                        setCurrentIndex(tapIndex);
                    }}
                >
                    <HelpOutlineOutlined />
                </IconButton>
                <div className="grid grid-cols-2">
                    <div>売れた合計</div>
                    <div> {`${tapData[tapIndex].soldQuantity} ml`}</div>
                </div>
                <div className="grid grid-cols-2">
                    <div>累計販売実績</div>
                    <div>{`${tapData[tapIndex].totalSales} 円`}</div>
                </div>
                <div className="grid grid-cols-2">
                    <div>残量</div>
                    <div>{`${tapData[tapIndex].remaining} ml`}</div>
                </div>
                <div>{orderFlag && <OrderAlert />}</div>
                <div className="mt-6">
                    <button
                        className="bg-yellow-300 hover:bg-yellow-400 px-2 py-2 mb-2 rounded-xl text-gray-700"
                        onClick={() => {
                            tastingSubmit(tapIndex)
                            setCurrentIndex(tapIndex);
                        }}
                    >
                        テイスティング
                    </button>
                    <button
                        className="bg-yellow-300 hover:bg-yellow-400 px-8 py-2 mb-2 rounded-xl text-gray-700"
                        onClick={() => {
                            setShowSellingWeightModal(true);
                            setCurrentIndex(tapIndex);
                        }}
                    >
                        量り売り
                    </button>
                    <button
                        className="bg-yellow-300 hover:bg-yellow-400 px-12 py-2 mb-2 rounded-xl text-gray-700"
                        onClick={() => {
                            setShowWasteModal(true);
                            setCurrentIndex(tapIndex);
                        }}
                    >
                        ロス
                    </button>
                </div>
            </div>
        </>
    );
};

export default TapBody;
