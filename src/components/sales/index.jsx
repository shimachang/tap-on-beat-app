import { useState } from "react";
import TapContainer from "./TapContainer";

const SalesScreen = () => {
    const [tapData, setTapData] = useState(``);
    return (
        <div className="w-screen h-screen max-w-sm m-auto text-center">
            <div className="text-xl my-10">SalesScreen</div>
            <TapContainer />
        </div>
    );
};
export default SalesScreen;
