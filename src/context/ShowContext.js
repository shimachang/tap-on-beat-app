import React, { useState } from "react";

export const ShowContext = React.createContext();
export const ShowProvider = ({ children }) => {
    const [showSellingByWeightModal, setShowSellingByWeightModal] = useState(false);
    const value = {
        showSellingByWeightModal,
         setShowSellingByWeightModal
    }
    return (
        <ShowContext.Provider value={value}>
            {children}
        </ShowContext.Provider>
    );
};

export default ShowProvider;
