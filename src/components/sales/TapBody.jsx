import { useState, useContext } from "react";
import { ShowContext } from "../../context/ShowContext";
import { TapDataContext } from "../../context/TapDataContext";
import { HelpOutlineOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import OrderAlert from "../global/OrderAlert";

const TapBody = ({ tapIndex, setCurrentIndex }) => {
    const {
        setShowSellingWeightModal,
        setShowWasteModal,
        setShowTastingModal,
        setShowInformationModal,
    } = useContext(ShowContext);
    const { tapData } = useContext(TapDataContext);
    const orderFlag = tapData[tapIndex].remaining < 2000 ? true: false;
    

    return (
        <>
            <div className="bg-green-100 py-6">
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
                <div>{`売れた合計${tapData[tapIndex].soldQuantity} ml`}</div>
                <div>{`累計販売実績 ${tapData[tapIndex].totalSales} 円`}</div>
                <div>{`残量 ${tapData[tapIndex].remaining} ml`}</div>
                <div>

                {orderFlag && <OrderAlert />}
                </div>
                <div className="mt-6">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 px-2 py-2 mb-2 rounded text-white"
                        onClick={() => {
                            setShowTastingModal(true);
                            setCurrentIndex(tapIndex);
                        }}
                    >
                        テイスティング
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 px-8 py-2 mb-2 rounded text-white"
                        onClick={() => {
                            setShowSellingWeightModal(true);
                            setCurrentIndex(tapIndex);
                        }}
                    >
                        量り売り
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 px-12 py-2 mb-2 rounded text-white"
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
