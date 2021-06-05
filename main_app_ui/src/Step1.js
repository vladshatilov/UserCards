import React from 'react';
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

    const {register, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {firstName: data.firstName, lastName: data.lastName},
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)
        console.log(errors.name)
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
                   autoFocus={true}
                   label={"First Name"}
                   error={!!errors.firstName}
                   helperText={errors?.firstName?.message}
            />
            {/*{errors.firstName && errors.firstName.type  === "required" && <span>This is required</span>}*/}
            <Input {...register('lastName',{required: true, maxLength: 30})}
                   id={'lastName'}
                   type={"text"}
                   label={"Last Name"}
                   error={!!errors.lastName}
                   helperText={errors?.lastName?.message}
            />
            <PrimaryButton>Next step</PrimaryButton>
        </Form>
    </MainContainer>
}