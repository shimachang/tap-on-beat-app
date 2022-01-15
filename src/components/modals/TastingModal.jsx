import { useContext } from "react";
import { ShowContext } from "../../context/ShowContext";
import CloseIcon from "@mui/icons-material/Close";
import { TapDataContext } from "../../context/TapDataContext";

const TastingModal = ({ tastingSubmit, tastingQuantity, setTastingQuantity, currentIndex }) => {
    const { setShowTastingModal } = useContext(ShowContext);
    console.log(currentIndex);
    const { tapData } = useContext(TapDataContext);
    return (
        <div className="h-screen w-screen fixed left-0 top-0 z-10">
            <div
                className="w-full h-full absolute bg-black bg-opacity-40 flex justify-center items-center"
                onClick={() => setShowTastingModal(false)}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="mt-2 w-72 bg-white relative rounded-lg shadow-2xl"
                >
                    <header className="bg-gray-100 px-4 py-2 rounded-t-lg flex justify-between items-center">
                        <button onClick={() => setShowTastingModal(false)}>
                            <CloseIcon />
                        </button>
                    </header>
                    <div className="bg-green-50 py-4 px-2">
                        <form>
                            <div className="py-3">販売数を入力してください</div>
                            <input
                                type="tel"
                                maxLength="3"
                                className="inline-block w-16 p-2 border-box border-2 my-2 leading-8"
                                placeholder="quantity"
                                defaultValue={1}
                                onChange={(e) => setTastingQuantity(e.target.value)}
                            />{" "}
                            杯
                            <div className="py-4 mb-4">
                                {tastingQuantity}杯 × {tapData[currentIndex].tastingPlace}円 = 合計{" "}
                                {tastingQuantity * tapData[currentIndex].tastingPlace}円
                            </div>
                            <button
                                type="submit"
                                onClick={(e) => tastingSubmit(e, currentIndex)}
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

export default TastingModal;
