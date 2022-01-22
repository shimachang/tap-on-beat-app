import React, { useContext } from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import dig from "object-dig";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { ShowContext } from "../../context/ShowContext";

const Header = () => {
    const { showSideBar, setShowSideBar } = useContext(ShowContext);

    // const buttonRender = () => {
    //     let buttonDom;
    //     if (dig(currentUser, "currentUser", "uid")) {
    //         buttonDom = (
    //             <Button className={classes.button} variant="text" onClick={logOut}>
    //                 ログアウト
    //             </Button>
    //         );
    //     } else {
    //         buttonDom = (
    //             <Button className={classes.button} variant="text" onClick={signInWithGoogle}>
    //                 googleログイン
    //             </Button>
    //         );
    //     }
    //     return buttonDom;
    // };

    return (
        <div className="flex justify-between items-center w-full h-20 bg-gray-600">
            <p className="text-4xl pl-6 text-yellow-300">Fever Tree</p>
            <IconButton onClick={() => setShowSideBar(showSideBar ? false : true)}>
                <DragHandleIcon
                    fontSize={"large"}
                    className="text-yellow-300 border-yellow-300 border-2 rounded-full"
                />
            </IconButton>
        </div>
    );
};

export default Header;
