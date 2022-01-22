import { HighlightOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import dayjs from "dayjs";

const HistoryCard = ({ data, i, deleteHistory }) => {
    let typeColor = ""
    if (data.type === "テイスティング") {
        typeColor = "blue"
    }
    else if (data.type === "その他") {
        typeColor = "green"
    }
    else if (data.type === "BPM") {
        typeColor = "red"
    }
    else {
        typeColor = "gray"
    }
    return (
        <>
            <div className={`bg-${typeColor}-200 rounded-xl mt-4`}>
                <div className="border-gray-400 border-b py-2">{data.type}</div>
                <div className="flex justify-around px-2 py-2">
                    <div>{data.name}</div>
                    <div className="">Tap{data.tapNumber}</div>
                </div>
                <div className="flex px-4 py-2 justify-around">
                    <div>
                        {data.type === "テイスティング"
                            ? `${data.quantity}杯`
                            : `${data.quantity}ml`}
                    </div>
                    <div>{data.soldPrice}円</div>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="">{dayjs(data.day).format("H時m分")}</div>
                <div onClick={() => deleteHistory(i)}>
                    <HighlightOff />
                </div>
            </div>
        </>
    );
};

export default HistoryCard;
