import { useContext } from "react";
import { ShowContext } from "../../context/ShowContext";
import CloseIcon from "@mui/icons-material/Close";
import { TapDataContext } from "../../context/TapDataContext";

const SellingWeightModal = ({
    sellingSubmit,
    sellingWeightQuantity,
    setSellingWeightQuantity,
    currentIndex,
}) => {
    const { setShowSellingWeightModal } = useContext(ShowContext);
    console.log(currentIndex);
    const { tapData } = useContext(TapDataContext);
    return (
        <div className="h-screen w-screen fixed left-0 top-0 z-10">
            <div
                className="w-full h-full absolute bg-black bg-opacity-40 flex justify-center items-center"
                onClick={() => setShowSellingWeightModal(false)}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="w-72 mt-2 bg-white relative rounded-lg shadow-2xl"
                >
                    <header className="bg-gray-100 px-4 py-2 rounded-t-lg flex justify-between items-center">
                        <button onClick={() => setShowSellingWeightModal(false)}>
                            <CloseIcon />
                        </button>
                    </header>
                    <div className="bg-green-50 py-4 px-2">
                        <form>
                            <div className="py-3">量り売りの量を入力してください</div>
                            <input
                                type="tel"
                                maxLength="6"
                                className="inline-block w-5/6 p-2 border-box border-2 my-2 leading-8"
                                placeholder="quantity"
                                onChange={(e) => setSellingWeightQuantity(e.target.value)}
                            />{" "}
                            ml
                            <div className="py-4 mb-4">
                                {sellingWeightQuantity}ml × {tapData[currentIndex].cost} ={" "}
                                {Math.ceil(sellingWeightQuantity * tapData[currentIndex].cost)}円
                            </div>
                            <button
                                type="submit"
                                onClick={(e) => sellingSubmit(e, currentIndex)}
                                className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded text-white"
                            >
                                送信
                            </button>
                        </form>
                    </div>
                    <footer className="bg-gray-100 h-8 px-4 py-2 rounded-b-lg"></footer>
                </div>
            </div>
        </div>
    );
};

export default SellingWeightModal;
