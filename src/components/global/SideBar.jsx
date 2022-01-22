import { useContext } from "react";
import { RouterContext } from "../../context/RouterContext";

const SideBar = () => {
    const { setTab } = useContext(RouterContext);
    return (
        <div className="fixed top-20 h-full w-40  border-gray-50 border-t-2 right-0 bg-gray-600">
            <div className="grid grid-rows pt-10 justify-center">
                <p className="text-yellow-200 pt-10 cursor-pointer" onClick={() => setTab("sales")}>
                    販売画面
                </p>
                <p
                    className="text-yellow-200 pt-10 cursor-pointer"
                    onClick={() => setTab("management")}
                >
                    管理画面
                </p>
                <p
                    className="text-yellow-200 pt-10 cursor-pointer"
                    onClick={() => setTab("analysis")}
                >
                    解析画面
                </p>
            </div>
        </div>
    );
};
export default SideBar;
