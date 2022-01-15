import { useContext } from "react";
import AnalysisScreen from "./components/analysis";
import Header from "./components/global/Header";
import ManagementScreen from "./components/management";
import SalesScreen from "./components/sales";
import { RouterContext } from "./context/RouterContext";

const App = () => {
    const { tab } = useContext(RouterContext);
    const Body = () => {
        switch (tab) {
            case "sales":
                return <SalesScreen />;
                break;
            case "management":
                return <ManagementScreen />;
                break;
            case "analysis":
                return <AnalysisScreen />;
                break;
        }
    };
    return (
        <>
            <Header />
            <Body />
        </>
    );
};

export default App;
