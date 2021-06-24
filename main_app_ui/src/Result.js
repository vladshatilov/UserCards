import React, {useEffect, useState} from "react";
import {MainContainer} from "./components/MainContainer";
import Typography from "@material-ui/core/Typography";
import {useData} from "./DataContext";
import {makeStyles, MuiThemeProvider, TableContainer} from "@material-ui/core";
import {Paper} from "material-ui";
import TableHead from "@material-ui/core/TableHead";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import {Link} from "react-router-dom";
import Table from "@material-ui/core/Table";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {InsertDriveFile} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import {PrimaryButton} from "./components/PrimaryButton";
import Swal from 'sweetalert2';
import Confetti from "react-confetti";
// import useWindowSize from 'react-use/lib/useWindowSize'
import axios from "axios";
import {$, jQuery} from 'jquery';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "30px"
    },
    table: {
        marginBottom: "30px"
    },
}));

function getCookie(name) {
    if (!document.cookie) {
        return null;
    }
    const token = document.cookie.split(';')
        .map(c => c.trim())
        .filter(c => c.startsWith(name + '='));

    if (token.length === 0) {
        return null;
    }
    return decodeURIComponent(token[0].split('=')[1]);
}


export const Result = () => {
    const [success, setSuccess] = useState(false);
    const [test, setTest] = useState([]);
    const {data} = useData()
    const entries = Object.entries(data).filter((entry) => entry[0] !== 'files' && entry[0] !== 'imgData')
    const {files} = data;
    const myStyle = useStyles()

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/api/card/"
        }).then(response => {
            setTest(response.data)
            // console.log("response", response.data)
            // console.log("response", response.cookies)
        })

    }, [])
    const onSubmit = async () => {
        const formData = new FormData();
        // const { width, height } = useWindowSize()
        // Swal.fire("Great job!", "You've passed all data!", "success")
        // setSuccess(true)

        console.log('data')
        console.log(data.files)
        // for (let i = 0; i < data.files.length; i++) {
        //     formData.append('images[]', data.files[i]);
        // }
        if (data.files) {
            data.files.forEach(file => {
                formData.append("files", file, file.name)
            })
        }

        console.log('entries')
        console.log(entries)
        // formData to JSON method #0
        // JSON.stringify(Object.fromEntries(entries))
        entries.forEach(entry => {
            // if (entry[0] === 'phoneNumber' && entry[1].length>0) {
            if (entry[0] === 'phoneNumber' && entry[1]) {
                formData.append(entry[0], entry[1]?.replace(/\s/g, ''))
            } else {
                formData.append(entry[0], entry[1])
            }
        })

        console.log('formData')
        console.log(formData.entries())
        // formData to JSON method #1
        let object = {};
        formData.forEach((value, key) => object[key] = value);
        let dataJson = JSON.stringify(object);
        //body:dataJson

        // formData to JSON method #2
        // JSON.stringify(Object.fromEntries(formData))

        const csrftoken = getCookie('csrftoken')
        console.log(csrftoken)
        const try_post = {
            firstName: "Daddy",
            lastName: 'shatilov',
            email: 'meme@corp.ru',
            hasPhone: true,
            phoneNumber: '+79123541268'
        }


        console.log('formData')
        console.log(formData)
        // console.log(JSON.stringify(Object.fromEntries(formData)))

        // headers
        // "Authorization": `AUTHORIZATION_KEY`,
        const res = await fetch("http://127.0.0.1:8000/api/card/", {
            method: "POST",
            //"PUT" - for update
            // body: JSON.stringify(Object.fromEntries(formData)),
            body: formData,
            headers: {
                // "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'X-CSRFToken': csrftoken
            }
        }).then(resp => {
            console.log(resp.status)
            if (resp.status == 200) {
                Swal.fire("Great job!", "You've passed all data", "success")
            }
            console.log(resp.json())
        })
        // .catch(error => console.err(error))
        //
        // if(res.status==200){
        //     Swal.fire("Great job!","You've passed all data", "success")
        // }


//         let object = {};
//         let formData2 = new FormData(document.forms.person);
//
//         formData2.forEach(function (value, key) {
//             object[key] = value;
//         });
//         let json = JSON.stringify(object);
//
//         let xhr = new XMLHttpRequest();
//         xhr.open("POST", '/submit', true)
//         xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//
// // Отсылаем объект в формате JSON и с Content-Type application/json
//         xhr.send(json);

    }
    // if (success) {
    //     console.log('here is confetti')
    //     return <Confetti />
    //     // width={"500px"}
    //     //                  height={"300px"}
    // }


    return (
        <MainContainer>
            <Typography component={'h2'} variant={'h5'}>
                Form data 💖
            </Typography>
            <ul>
                {test && test.map(p => (
                    <li key={p.id}>{p.firstName}--{p.email}</li>
                ))}
            </ul>
            <MuiThemeProvider>
                <TableContainer className={myStyle.root} component={"div"}>
                    <Table className={myStyle.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Field
                                </TableCell>
                                <TableCell align={'right'}>
                                    Value
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                entries.map(entry => (
                                    <TableRow key={entry[0]}>
                                        <TableCell>{entry[0]}</TableCell>
                                        <TableCell align={'right'}>{entry[1]?.toString()}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                {
                    files &&
                    <>
                        <Typography component={'h2'} variant={'h5'}>
                            Files 🐧
                        </Typography>
                        <List>
                            {
                                files.map((f, index) => (
                                    <ListItem key={index}>
                                        <ListItemIcon>
                                            {data.imgData && <img className="picture__preload" height={"60px"} src={data.imgData}/>}

                                            {/*<InsertDriveFile/>*/}
                                        </ListItemIcon>
                                        <ListItemText style={{padding:"15px"}} primary={f.name} secondary={f.size}/>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </>
                }
            </MuiThemeProvider>
            {/*<input type={'submit'} onClick={onSubmit}/>*/}
            <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
            <Link to={'/step1'}>To the start</Link>
            <Link to={'/'}>Home</Link>
        </MainContainer>
    );
}