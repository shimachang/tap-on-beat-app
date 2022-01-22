import { useContext } from "react";
import { HistoryContext } from "../../context/HistoryContext";
import HistoryCard from "./HistoryCard";

const HistoryContainer = ({deleteHistory}) => {
    const { historyData } = useContext(HistoryContext);
    return historyData.map((e, i) => {
        return <HistoryCard data={e} key={i} i={i} deleteHistory={deleteHistory} />
    });
};

export default HistoryContainer;
