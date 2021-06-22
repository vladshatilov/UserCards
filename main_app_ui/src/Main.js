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
    },
    button: {
        color: 'darkmagenta'
    }
}))

export const Main = () => {
    const history = useHistory()
    const [data, setData] = useState([])
    const myStyle = useStyles()

    const onSubmit = () => {
        history.push('/step1')
    }

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

    const deleteCard = (id) => {
        axios({
            method: "DELETE",
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
                                        <ReactFancyBox id='gallery' class="fancybox1" thumbnail={p?.thumb} image={p.files}/>
                                    </TableCell>
                                    <TableCell>
                                        <Button type={'submit'} onClick={() => deleteCard(p.id)}
                                                className={myStyle.button} fullHeigth
                                                color={"secondary"}
                                                startIcon={<DeleteForeverOutlined className={'button__icon'} fontSize="small"/>}
                                        />
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