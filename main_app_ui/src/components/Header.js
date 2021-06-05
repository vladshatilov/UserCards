import React from 'react';
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: `"Pacifico"`,
        margin: theme.spacing(3, 0, 2),
        textAlign: "center",
        fontSize: "40px",
        color: "deeppink",
        textShadow: '1px 1px darkmagenta'
    }
}))

export const Header = () => {
    const myStyle = useStyles()
    return (
        <Typography className={myStyle.root} component={'h1'} variant={'h5'}>Flawless and beautiful header</Typography>
    );
};