import React, { useContext, useState } from "react";
import dig from "object-dig";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { RouterContext } from "../../context/RouterContext";
import { Grid } from "@mui/material";



const Header = () => {
    const { setTab } = useContext(RouterContext);

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
        <AppBar position="static">
            <Toolbar className="justify-between">
                <Typography variant="h6">Tap On Beat</Typography>
                <Grid className='' container spacing={3}>
                    <Grid
                        className="cursor-pointer"
                        onClick={() => setTab("sales")}
                        item
                        xs={4}
                        md={3}
                    >
                        販売画面
                    </Grid>
                    <Grid
                        className="cursor-pointer"
                        onClick={() => setTab("management")}
                        item
                        xs={4}
                        md={3}
                    >
                        管理画面
                    </Grid>
                    <Grid
                        className="cursor-pointer"
                        onClick={() => setTab("analysis")}
                        item
                        xs={4}
                        md={3}
                    >
                        解析画面
                    </Grid>
                </Grid>
                {/* {buttonRender()} */}
            </Toolbar>
        </AppBar>
    );
};

export default Header;