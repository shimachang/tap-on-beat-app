import React, { useState } from "react";

export const HistoryContext = React.createContext();
export const HistoryProvider = ({ children }) => {
    const [historyData, setHistoryData] = useState([]);
    const value = {
        historyData,
        setHistoryData,
    };

    return <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>;
};

export default HistoryProvider;
