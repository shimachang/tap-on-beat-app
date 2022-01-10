import { useState, useContext } from "react";
import { ShowContext } from "../../context/ShowContext";

const TapBody = () => {
    const [salesValue, setSalesValue] = useState(0);
    const { setShowSellingByWeightModal } = useContext(ShowContext);
    return (
        <>
            <div className="bg-green-100 py-6">
                <div>{`売れた合計${salesValue}ml`}</div>
                <div>Tap1</div>
                <div>銘柄</div>
                <div>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
                        onClick={() => setSalesValue(salesValue + 200)}
                    >
                        テイスティング
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
                        onClick={() => setShowSellingByWeightModal(true)}
                    >
                        量り売り
                    </button>
                </div>
            </div>
        </>
    );
};

export default TapBody;
