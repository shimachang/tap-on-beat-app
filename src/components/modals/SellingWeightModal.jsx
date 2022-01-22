import { useContext } from "react";
import { ShowContext } from "../../context/ShowContext";
import CloseIcon from "@mui/icons-material/Close";
import { TapDataContext } from "../../context/TapDataContext";
import Calculator from "./Calculator";

const SellingWeightModal = ({
    sellingSubmit,
    sellingQuantity,
    setSellingQuantity,
    sellingType,
    setSellingType,
    currentIndex,
}) => {
    const { setShowSellingWeightModal } = useContext(ShowContext);
    const { tapData } = useContext(TapDataContext);
    const discountValue = sellingType === "BPM" ? Math.ceil(sellingQuantity * 0.15) : 0;
    return (
        <div className="h-screen w-screen fixed left-0 top-0 z-10">
            <div
                className="w-full h-full absolute bg-black bg-opacity-40 flex justify-center items-center"
                onClick={() => setShowSellingWeightModal(false)}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="w-1/2 mt-2 bg-white relative rounded-lg shadow-2xl"
                >
                    <header className="bg-gray-600 px-4 py-2 rounded-t-lg flex justify-between items-center">
                        <button onClick={() => setShowSellingWeightModal(false)}>
                            <CloseIcon />
                        </button>
                    </header>
                    <div className="bg-gray-200 py-4 px-2">
                        <form>
                            <div className="py-8">グラウラーの種類を選択してください</div>
                            <Calculator
                                sellingQuantity={sellingQuantity}
                                setSellingQuantity={setSellingQuantity}
                                sellingType={sellingType}
                                setSellingType={setSellingType}
                            />
                            <div className="py-6 mb-4 mx-2 px-2 text-2xl bg-white rounded-lg">
                                {sellingQuantity || 0}ml × {tapData[currentIndex].cost}
                                {sellingType === "BPM" &&
                                    ` - ${Math.ceil(sellingQuantity * 0.15)}`}{" "}
                                ={" "}
                                {Math.ceil(sellingQuantity * tapData[currentIndex].cost) -
                                    discountValue}{" "}
                                円
                            </div>
                            <button
                                type="submit"
                                onClick={(e) => sellingSubmit(e, currentIndex)}
                                className="bg-yellow-300 hover:bg-yellow-400 px-24 py-4 rounded-lg  text-3xl"
                            >
                                決定
                            </button>
                        </form>
                    </div>
                    <footer className="bg-gray-600 h-12 px-4 py-2 rounded-b-lg"></footer>
                </div>
            </div>
        </div>
    );
};

export default SellingWeightModal;
