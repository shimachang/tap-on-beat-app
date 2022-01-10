import { useContext } from "react";
import { ShowContext } from "../../context/ShowContext";
import CloseIcon from '@mui/icons-material/Close';

const SellingByWeightMOdal = () => {
    const { setShowSellingByWeightModal } = useContext(ShowContext);
    return (
        <div className="h-screen w-screen fixed left-0 top-0 z-10">
            <div className="w-full h-full absolute bg-black bg-opacity-40 flex justify-center items-center"onClick={() => setShowSellingByWeightModal(false)}>
                <div onClick={(e) => e.stopPropagation()} className="mt-2 bg-white relative rounded-lg shadow-2xl">
                    <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                        <button  onClick={() => setShowSellingByWeightModal(false)}>
                            <CloseIcon/>
                        </button>
                    </header>
                    <div className="bg-green-50 py-4 px-2"></div>
                    <div className="text-center py-4"></div>
                    <footer className="flex justify-center  border-t p-3 mt-5">
                        <button
                            type="submit"
                            onClick={() => setShowSellingByWeightModal(false)}
                            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
                        >
                            閉じる
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default SellingByWeightMOdal