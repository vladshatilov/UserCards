import React from "react";
import {MainContainer} from "./components/MainContainer";
import Typography from "@material-ui/core/Typography";
import Checkbox from '@material-ui/core/Checkbox';
import {Form} from "./components/Form";
import {useForm} from "react-hook-form";
import {useHistory} from 'react-router-dom';
import {Input} from "./components/Input";
import {PrimaryButton} from "./components/PrimaryButton";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import {parsePhoneNumberFromString} from "libphonenumber-js";
import {FormControlLabel} from "@material-ui/core";
import {useData} from "./DataContext";

const schema = yup.object().shape({
    email: yup.string().email("Email should have correct format").required('This is required')
})

const normalizePhone = (value) => {
    const tempNumber = parsePhoneNumberFromString(value)
    if(!tempNumber){
        return value
    }
    return tempNumber.formatInternational()
}

export const Step2 = () => {
    const history = useHistory()
    const {data, setValues} = useData()
    const {register, handleSubmit, formState: {errors}, watch} = useForm({
        defaultValues:{
            email: data.email,
            hasPhone: data.hasPhone,
            // testPhone: data.testPhone,
            phoneNumber: data.phoneNumber
        },
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    // const hasPhone = watch('hasPhone', false)
    const hasPhone = watch('hasPhone', false)

    const onSubmit = (data) => {
        if (typeof(data.phoneNumber) == "undefined"){
            setValues(prevData => ({
            ...prevData,
            phoneNumber:""
            }))
        }
        console.log(data)
        console.log(hasPhone)
        history.push('/step3')
        setValues(data)
    }
    return (
        <MainContainer>
            <Typography component={'h2'} variant={'h5'}>
                Step two🐗
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register('email', {required: true})}
                       id={'email'}
                       type={'email'}
                       label={'Email'}
                       name={'email'}
                       error={!!errors.email}
                       helperText={errors?.email?.message}
                       required/>
            {/*<FormControlLabel*/}
            {/*    control={*/}
            {/*        <Checkbox name={'hasPhone'} defaultValue={data.hasPhone} defaultChecked={data.hasPhone} {...register('hasPhone')} color={'primary'}/>*/}
            {/*    }*/}
            {/*    label={'Do you have a phone?'}*/}
            {/*/>*/}
            {/*<Checkbox {...register('hasPhone',{required:true})} color={'primary'}/>*/}
            {/*{*/}
            {/*    hasPhone && (*/}
            {/*        <input type={'number'}/>*/}
            {/*        // <Input name={'phoneNumber'} {...register('phoneNumber')} id={'phoneNumber'} type={'tel'} label={'Phone number'} />*/}
            {/*    )*/}
            {/*}*/}
            <input type={'checkbox'} color={'primary'} {...register('hasPhone')} />Do you have a phone?
            {hasPhone && <Input name={'phoneNumber'}
                                    {...register('phoneNumber')}
                                    id={'phoneNumber'}
                                    type={'tel'}
                                    label={'Phone number'}
                                    onChange={(event)=> {event.target.value = normalizePhone(event.target.value)}} />}
            <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    );
}