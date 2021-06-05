import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(1)
    }
}))
export const Form = ({children, ...props}) => {
    const myStyle = useStyles()
    return (
        <form className={myStyle.root} noValidate {...props}>
            {children}
        </form>
    );
};