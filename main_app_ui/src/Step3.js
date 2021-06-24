import React, {useEffect, useState} from "react";
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
            files: data.files,
            imgData: data.imgData
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

    // const [imgData, setImgData] = useState(null);
    // const onChangePicture = (e) => {
    //     if (e.target.files[0]) {
    //         console.log("picture: ", e.target.files);
    //         // setPicture(e.target.files[0]);
    //         const reader = new FileReader();
    //         reader.addEventListener("load", () => {
    //             setImgData(reader.result);
    //         });
    //         reader.readAsDataURL(e.target.files[0]);
    //     }
    // }

    // const res3 = useEffect(() => {
    //     console.log(imgData)
    // }, [imgData])

    return (
        <MainContainer>
            <Typography component={'h2'} variant={'h5'}>
                Step three🤔
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {/*<FileInput name={'files'} control={control}/>*/}
                <Dropzone onDrop={acceptedFiles => {
                    setValues({
                        files: acceptedFiles
                    })

                    acceptedFiles.forEach((file) => {
                        const reader = new FileReader()

                        reader.onabort = () => console.log('file reading was aborted')
                        reader.onerror = () => console.log('file reading has failed')
                        reader.onload = () => {
                            // Do whatever you want with the file contents
                            // setImgData(reader.result);
                            setValues({
                                imgData: reader.result
                            })
                            const binaryStr = reader.result
                            // console.log(binaryStr)
                        }
                        reader.readAsDataURL(file)
                        // reader.readAsArrayBuffer(file)
                    })


                    // onChangePicture(acceptedFiles);
                    // const reader = new FileReader();
                    // reader.readAsDataURL(acceptedFiles);
                    //
                    // reader.onloadend = () => {
                    //     setImgData(reader.result);
                    // }
                    // setImgData(reader.readAsDataURL(acceptedFiles));
                    // setImgData(acceptedFiles);
                    // reader.addEventListener('load', () => {
                    //     setImgData(reader.result);
                    // })
                    // setImgData();
                }} multiple={false} accept="image/jpeg, image/png" maxSize={MAX_SIZE}>
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
                        {/*<p>test check</p>*/}
                        {
                            data.files && data.files.map((f, index) => (
                                <ListItem key={index}>
                                    {/*<p>test check</p>*/}
                                    <ListItemIcon>
                                        {data.imgData && <img className="picture__preload" width={"200px"} src={data.imgData}/>}
                                        {/*<InsertDriveFile/>*/}
                                    </ListItemIcon>
                                    <ListItemText className={"list__text"} primary={f.name} secondary={f.size} />
                                    {/*<img className="picture__preload" src={imgData[0].path} />*/}
                                </ListItem>
                            ))
                        }
                    </List>
                </MuiThemeProvider>
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}