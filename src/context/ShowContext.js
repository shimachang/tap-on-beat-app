import React, { useState } from "react";

export const ShowContext = React.createContext();
export const ShowProvider = ({ children }) => {
    const [showSellingWeightModal, setShowSellingWeightModal] = useState(false);
    const [showWasteModal, setShowWasteModal] = useState(false);
    const [showTastingModal, setShowTastingModal] = useState(false);
    const [showInformationModal, setShowInformationModal] = useState(false);
    const value = {
        showSellingWeightModal,
        setShowSellingWeightModal,
        showWasteModal,
        setShowWasteModal,
        showTastingModal,
        setShowTastingModal,
        showInformationModal,
        setShowInformationModal,
    };
    return <ShowContext.Provider value={value}>{children}</ShowContext.Provider>;
};

export default ShowProvider;
