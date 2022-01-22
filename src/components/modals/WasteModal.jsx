import { useContext, useState } from "react";
import { ShowContext } from "../../context/ShowContext";
import CloseIcon from "@mui/icons-material/Close";

const WasteModal = ({ setWasteQuantity, currentIndex, wasteSubmit }) => {
    const { setShowWasteModal } = useContext(ShowContext);
    return (
        <div className="h-screen w-screen fixed left-0 top-0 z-10">
            <div
                className="w-full h-full absolute bg-black bg-opacity-40 flex justify-center items-center"
                onClick={() => setShowWasteModal(false)}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="mt-2 bg-white relative rounded-lg shadow-2xl"
                >
                    <header className="bg-gray-600 px-4 py-2 rounded-t-lg flex justify-between items-center">
                        <button onClick={() => setShowWasteModal(false)}>
                            <CloseIcon />
                        </button>
                    </header>
                    <div className="bg-gray-200 py-4 px-2">
                        <form>
                            <div className="py-8">廃棄した量を入力してください</div>
                            <input
                                type="tel"
                                maxLength="6"
                                className="inline-block w-5/6 p-2 border-box border-2 my-4 leading-8"
                                placeholder="quantity"
                                onChange={(e) => setWasteQuantity(e.target.value)}
                            />{" "}
                            ml
                            <button
                                type="submit"
                                onClick={(e) => wasteSubmit(e, currentIndex)}
                                className="bg-yellow-300 hover:bg-yellow-400 px-8 py-4 my-6 rounded text-gray-600"
                            >
                                送信
                            </button>
                        </form>
                    </div>
                    <footer className="bg-gray-600 h-8 px-4 py-2 rounded-b-lg"></footer>
                </div>
            </div>
        </div>
    );
};

export default WasteModal;
