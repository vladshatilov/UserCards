import React from 'react';
import {Container} from '@material-ui/core'
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}))

export const MainContainer = ({children, ...props}) => {
    const myStyle = useStyles()

    return <Container className={myStyle.root} container={"main"} maxWidth={'xs'} {...props}>{children}</Container>
}