import { useContext } from "react";
import { ShowContext } from "../../context/ShowContext";
import CloseIcon from "@mui/icons-material/Close";
import { TapDataContext } from "../../context/TapDataContext";

const InformationModal = ({ currentIndex }) => {
    const { setShowInformationModal } = useContext(ShowContext);
    const { tapData } = useContext(TapDataContext);
    return (
        <div className="h-screen w-screen fixed left-0 top-0">
            <div
                className="w-full h-full absolute bg-black bg-opacity-40 flex justify-center items-center"
                onClick={() => setShowInformationModal(false)}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="mt-2 bg-white relative rounded-lg shadow-2xl"
                >
                    <header className="bg-gray-100 rounded-t-lg px-4 py-2 flex justify-between items-center">
                        <button onClick={() => setShowInformationModal(false)}>
                            <CloseIcon />
                        </button>
                    </header>
                    <div className="bg-green-50 w-72 py-4 px-2">
                        <div className="inline-block border-red-400 border-b-4 text-2xl pb-1 my-6">{tapData[currentIndex].name}</div>
                        <p className="break-words leading-6">
                            {tapData[currentIndex].description.replace(/(。)/g, "。\n")}
                        </p>
                    </div>
                    <footer className="flex justify-center border-t p-3 pt-5">
                        <button
                            type="submit"
                            onClick={() => setShowInformationModal(false)}
                            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
                        >
                            閉じる
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default InformationModal;
