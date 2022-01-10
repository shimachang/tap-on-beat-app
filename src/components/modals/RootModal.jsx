import { useContext } from "react";
import { ShowContext } from "../../context/ShowContext";
import SellingByWeightMOdal from "./SellingByWeightModal";

const RootModal = () => {
    const { showSellingByWeightModal } = useContext(ShowContext);
    return <>{showSellingByWeightModal && <SellingByWeightMOdal />}</>;
};

export default RootModal