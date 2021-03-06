import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import RouterProvider from "./context/RouterContext";
import "./index.css";
import dayjs from "dayjs";
import ShowProvider from "./context/ShowContext";
import { TapDataProvider } from "./context/TapDataContext";
import HistoryProvider from "./context/HistoryContext";

dayjs.locale("ja");

ReactDom.render(
    <React.StrictMode>
        <RouterProvider>
            <ShowProvider>
                <TapDataProvider>
                    <HistoryProvider>
                        <App />
                    </HistoryProvider>
                </TapDataProvider>
            </ShowProvider>
        </RouterProvider>
    </React.StrictMode>,

    document.getElementById("root")
);
