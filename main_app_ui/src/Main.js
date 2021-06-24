import React, {useEffect, useState} from "react";
import {MainContainer} from "./components/MainContainer";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import {Button, MuiThemeProvider, TableContainer} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useHistory} from "react-router-dom";
import {DeleteForeverOutlined} from '@material-ui/icons';
import {Form} from "./components/Form";
import {PrimaryButton} from "./components/PrimaryButton";
import ReactFancyBox from "react-fancybox";
import thubnail from './thubnail.png';
import thumb2 from './thumb2.png'


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "30px",
        textAlign: "center",
        width: 'auto',
        minWidth: 0,
    },
    table: {
        marginBottom: "30px"
    },
    head: {
        backgroundColor: "orange",
        color: 'white'
    }
}))

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

export const Main = () => {
    const history = useHistory()
    const [datar, setData] = useState([])
    const myStyle = useStyles()

    const onSubmit = () => {
        history.push('/step1')
    }
    const data = [
    {
        "id": 9,
        "firstName": "Vlad",
        "lastName": "Test",
        "email": "shatilovvlad@mail.ru",
        "hasPhone": false,
        "files": "http://127.0.0.1:8000/media/files/Vladundefined/2016-alison-brie-qhd-5120x2880.jpg",
        "phoneNumber": "undefined",
        "thumb": "http://127.0.0.1:8000/media/CACHE/images/files/Vladundefined/2016-alison-brie-qhd-5120x2880/99c11e751a09cdb82442baaf3697ed4a.jpg"
    },
    {
        "id": 7,
        "firstName": "Ozon",
        "lastName": "Pepsi",
        "email": "shatilovvlad@mail.ru",
        "hasPhone": false,
        "files": "http://127.0.0.1:8000/media/files/Ozon/1f3386d60dad.jpg",
        "phoneNumber": "",
        "thumb": "http://127.0.0.1:8000/media/CACHE/images/files/Ozon/1f3386d60dad/2ceb4cf57b129102ff37a2290824d2c5.jpg"
    },
    {
        "id": 2,
        "firstName": "Vlad",
        "lastName": "Test",
        "email": "shatilovvlad@mail.ru",
        "hasPhone": true,
        "files": "http://127.0.0.1:8000/media/files/Vlad9875168198/2fbc715a1e24e19b7c3ee8600e163eaf.jpg",
        "phoneNumber": "79875168198",
        "thumb": "http://127.0.0.1:8000/media/CACHE/images/files/Vlad9875168198/2fbc715a1e24e19b7c3ee8600e163eaf/e328d4048aea758b031b82491bbd6fc0.jpg"
    }
]

    // const showFull = () => {
    //     console.log('clicked on image')
    //     // console.log(e.target.className)
    //     let element = document.getElementById('image');
    //     const myElementClone = element.cloneNode()
    //     myElementClone.onClick = function onClick(event) {
    //         console.log(event.type + ' got fired')
    //         document.getElementById('root').removeChild(myElementClone)
    //     }
    //     document.getElementById('root').appendChild(myElementClone)
    //     if (myElementClone.className === "normal") {
    //         myElementClone.className = "rotate";
    //     }
    //     // else if (element.className === "rotate") {
    //         // document.getElementById('root').removeChild(myElementClone)
    //     // }
    // }


    const res = useEffect(() => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/api/card/"
        }).then(response => {
            console.log('check response')
            console.log(response)
            console.log(response.data)
            setData(response.data ?? [])
            // setData(response.data.results ?? [])
        })
    }, [])

    const csrftoken = getCookie('csrftoken')

    const deleteCard = (id) => {
        axios({
            method: "DELETE",
            headers: {
                'X-CSRFToken': csrftoken
            },
            url: `http://127.0.0.1:8000/api/card/${id}/`
        }).then(resp => {
            console.log(resp)
            axios({
                method: "GET",
                url: "http://127.0.0.1:8000/api/card/"
            }).then(response => {
                console.log('check response')
                console.log(response)
                console.log(response.data)
                setData(response.data ?? [])
                // setData(response.data.results ?? [])
            })
        })

    }
    // <a href="https://example.com" target="_blank" rel="noreferrer noopener" />

    return (
        <MainContainer>
            <Typography component={'h2'} variant={'h5'}>
                All user cards 🥳🎃
            </Typography>
            {/*<ul>*/}
            {/*    { data && data.map(p => (*/}
            {/*        <li key={p.id}>{p.firstName}--{p.email}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
            <MuiThemeProvider className={myStyle.root}>
                <TableContainer className={myStyle.root} component={"div"}>
                    <Table className={myStyle.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Name
                                </TableCell>
                                <TableCell align={'right'}>
                                    Last Name
                                </TableCell>
                                <TableCell>
                                    E-mail
                                </TableCell>
                                <TableCell>
                                    Phone
                                </TableCell>
                                <TableCell>
                                    Preview
                                </TableCell>
                                <TableCell>
                                    Delete
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(p => (
                                <TableRow key={p.id}>
                                    <TableCell>{p.firstName}</TableCell>
                                    <TableCell>{p.lastName}</TableCell>
                                    <TableCell><a href={`mailto:${p.email}`}>{p.email}</a></TableCell>
                                    {/*<TableCell align={'right'}>{p.phoneNumber?.toString()}</TableCell>*/}
                                    <TableCell align={'right'}><a href={`tel:{p.phoneNumber?.toString()}`}
                                                                  className="Phonny">
                                        {p.phoneNumber?.toString()}
                                    </a></TableCell>
                                    <TableCell>
                                        {/*<a href={p.files}><img src={p.files} width="24" height="24" alt="Атрибут юзера" title={p.firstName+' '+p.lastName}/></a*/}
                                        {/*<img src={p.files} width="240" height="240" id="image"*/}
                                        {/*     onClick={() => showFull()} className="normal" alt="Атрибут юзера"*/}
                                        {/*     title={p.firstName + ' ' + p.lastName}/>*/}

                                        {/*<ReactFancyBox id='gallery' class="fancybox1" thumbnail={thumb2} image={p.files}/>*/}
                                        <ReactFancyBox id='gallery' class="fancybox1" thumbnail={p?.thumb} image={p?.files}/>
                                        {/*<ReactFancyBox id='gallery' class="fancybox1" thumbnail={p?.images?.thumb} image={p?.images?.image}/>*/}
                                    </TableCell>
                                    <TableCell>
                                    {/*<div className="button__holder">*/}
                                        <Button type={'submit'} onClick={() => deleteCard(p.id)}
                                                className={`button__div ${myStyle.button}`} fullHeigth
                                                // className={"button__div"} fullHeigth
                                                color={"secondary"}
                                                startIcon={<DeleteForeverOutlined className={'button__icon'} fontSize="small"/>}
                                        />
                                        {/*</div>*/}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </MuiThemeProvider>
            <Form onClick={onSubmit}>
                <PrimaryButton>Add user card</PrimaryButton>
            </Form>
        </MainContainer>
    );
}