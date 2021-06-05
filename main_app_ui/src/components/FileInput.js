import React, {useEffect, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import Dropzone from "react-dropzone";
import {List, ListItem, Paper} from "material-ui";
import {CloudUpload} from "@material-ui/icons";
import {ListItemIcon, makeStyles} from "@material-ui/core";
import {InsertDriveFile} from "@material-ui/icons";
import {ListItemText} from "@material-ui/core";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#eee",
        textAlign: 'center',
        cursor: 'pointer',
        color: "#333",
        padding: "10px",
        marginTop: "20px"
    },
    icon: {
        marginTop: "16px",
        color: "#888",
        fontSize: "42px"
    }
}))
export const FileInput = ({control, name}) => {
    // const {register, handleSubmit} = useForm()
    const myStyle = useStyles()
    const [files, setFiles] = useState([])
    const res = useEffect(() => {
        console.log(files)
    }, [files])
    return (
        <Controller control={control}
                    name={name}
                    defaultValue={[]}
                    render={(
                        // {field: {onChange, onBlur, value}},
                        {onChange, onDrop, onBlur, value, ...props}
                    ) =>
                        <>
                            <Dropzone onDrop={onChange}>
                            {/*                  <Dropzone*/}
                            {/*onChange={onDropFiles}>*/}
                            {/*                  <Dropzone onDrop={acceptedFiles => setFiles(acceptedFiles)}>*/}
                            {/*<Dropzone onDrop={async (acceptedFiles) => {*/}
                            {/*    console.log(acceptedFiles)*/}
                            {/*    value = acceptedFiles*/}
                            {/*    onChange()*/}
                            {/*    console.log(value)*/}
                            {/*}}>*/}
                                {/*                              {dropzoneProps => {*/}
                                {/*  return (*/}
                                {/*    <div>*/}
                                {/*      <p>Drop some files here</p>*/}
                                {/*    </div>*/}
                                {/*  );*/}
                                {/*}}*/}
                                {
                                    ({getRootProps, getInputProps}) => (
                                        // <MuiThemeProvider>
                                        // <Paper variant={'outlined'} {...getRootProps()}>
                                        //     <CloudUpload />
                                        //     <input {...getInputProps()} name={name} onBlur={onBlur} />
                                        //      <p>Drag 'n' Drop files here, or click to select files</p>
                                        <div className={myStyle.root} variant={'outlined'} {...getRootProps()}>
                                            <CloudUpload className={myStyle.icon}/>
                                            <input id={'field'} {...getInputProps()} value={value} name={name} onChange={onChange} onBlur={onBlur}/>
                                            <p>Drop files here, or click to select files</p>
                                        </div>
                                        // </Paper>
                                        // </MuiThemeProvider>
                                    )
                                }
                            </Dropzone>
                            <MuiThemeProvider>
                                <List>
                                    <p>test check</p>
                                    {
                                        value && value.map((f, index) => (
                                            <ListItem key={index}>
                                                <p>test check</p>
                                                <ListItemIcon>
                                                    <InsertDriveFile/>
                                                </ListItemIcon>
                                                <ListItemText primary={f.name} secondary={f.size}/>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </MuiThemeProvider>
                        </>
                    }
        />
    );
};