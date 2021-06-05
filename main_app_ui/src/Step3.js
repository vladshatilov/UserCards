import React, {useEffect} from "react";
import {MainContainer} from "./components/MainContainer";
import Typography from "@material-ui/core/Typography";
import {Form} from "./components/Form";
import {FileInput} from "./components/FileInput";
import {useForm} from "react-hook-form";
import {PrimaryButton} from "./components/PrimaryButton";
import {useHistory} from "react-router-dom";
import {useData} from "./DataContext";
import Dropzone, {useDropzone} from 'react-dropzone';
import {List, ListItem} from "material-ui";
import {ListItemIcon, ListItemText} from "@material-ui/core";
import {InsertDriveFile} from "@material-ui/icons";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export const Step3 = () => {
    const history = useHistory()
    const {data, setValues} = useData()
    const {register, control, handleSubmit} = useForm({
        defaultValues: {
            files: data.files
        }
    })

    const onSubmit = (data) => {
        console.log(data)
        history.push('/result')
        // setValues(data)
    }

    const res = useEffect(() => {
        console.log(data)
        // console.log(files)
    }, [data])

    const res2 = useEffect(() => {
        console.log(data)
    }, [])
    const MAX_SIZE = 5242880;

    return <MainContainer>
        <Typography component={'h2'} variant={'h5'}>
            Step three🤔
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
            {/*<FileInput name={'files'} control={control}/>*/}
            <Dropzone onDrop={acceptedFiles => {
                setValues({
                    files: acceptedFiles
                })
            }} accept="image/jpeg, image/png" maxSize={MAX_SIZE}>
                {({getRootProps, getInputProps}) => (
                    <section>
                        <div {...getRootProps()}>
                            <input name={'files'} {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                            <em>(Only *.jpeg and *.png images will be accepted)</em>
                        </div>
                    </section>
                )}
            </Dropzone>
            <MuiThemeProvider>
                <List>
                    <p>test check</p>
                    {
                        data.files && data.files.map((f, index) => (
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
            <PrimaryButton>Next</PrimaryButton>
        </Form>
    </MainContainer>
}