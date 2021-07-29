import React, {useEffect, useMemo} from 'react';
import {useHistory} from 'react-router-dom';
import {MainContainer} from "./components/MainContainer";
import {Typography} from "@material-ui/core";
import {Form} from "./components/Form";
import {Input} from './components/Input';
import {useForm} from "react-hook-form";
import {PrimaryButton} from "./components/PrimaryButton";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {useData} from "./DataContext";

const schema = yup.object().shape({
    firstName: yup.string().matches(/^([^0-9]*)$/, "First name should not contain numbers").required("First name is required"),
    lastName: yup.string().matches(/^([^0-9]*)$/, "Last name should not contain numbers").required("Last name is required")
})


export const Step1 = () => {
    const history = useHistory()
    const {data, setValues} = useData()



    const {register, handleSubmit,reset, setValue, formState: { errors }} = useForm({
        defaultValues: {firstName: data.firstName, lastName: data.lastName},
        // defaultValues: useMemo(()=>{ return props},[d]),// {firstName: data.firstName, lastName: data.lastName},
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })
    // useEffect(() => {
    //     console.log("Reset");
    //     reset(props.user);
    //   }, [props.user]);

    // useEffect(()=>{
        // setValues(JSON.parse(window.localStorage.getItem('data')))
        // console.log(JSON.parse(window.localStorage.getItem('data')))
        // console.log(window.localStorage.getItem('data.firstName'))
    // },[]);

    // useEffect(()=>{
        // console.log(JSON.stringify(data))
        // window.localStorage.setItem('data',JSON.stringify(data))
        // document.getElementById('firstName').value = data.firstName;
        // if (data){
        //     setValue([{firstName: data.firstName},{lastName: data.lastName}]);
        // }
        // reset(data)
    // },[data]);

    const onSubmit = (data) => {
        console.log(data)
        console.log(errors.name)
        window.localStorage.setItem('data',JSON.stringify(data))
        history.push('/step2')
        setValues(data)
    }
    return <MainContainer>
        <Typography component={'h2'} variant={'h5'}>
            Step one🔥
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>

            <Input {...register('firstName',{required: true, maxLength: 30})}
                   id={'firstName'}
                   type={"text"}
                   defaultValue={data.firstName}
                   // autoFocus={true}
                   label={"First Name"}
                   // placeholder={"First Name"}
                   error={!!errors.firstName}
                   helperText={errors?.firstName?.message}
            />
            {/*{errors.firstName && errors.firstName.type  === "required" && <span>This is required</span>}*/}
            <Input {...register('lastName',{required: true, maxLength: 30})}
                   id={'lastName'}
                   type={"text"}
                   label={"Last Name"}
                   // placeholder={"Last Name"}
                   error={!!errors.lastName}
                   helperText={errors?.lastName?.message}
            />
            <PrimaryButton>Next step</PrimaryButton>
        </Form>
    </MainContainer>
}