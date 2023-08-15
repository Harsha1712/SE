import React from "react";
import { useState } from 'react'
import {useForm} from 'react-hook-form'
import {Form,Button} from "react-bootstrap"
import axios from 'axios'
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";

    
function Withdraw(){
    let {userObj} = useSelector(state=>state.user)
    const{
        register,
        handleSubmit,
        formState:{errors},
    }=useForm();
    let navigate=useNavigate()

const onFormSubmit=(userCredentialObject)=>{
    userCredentialObject.accno=userObj.accno
    let token=localStorage.getItem("token")
    if(userCredentialObject.wd>userObj.balance)
    {
        alert("Insufficient Balance")
    }
    else{
    axios.put('http://localhost:5000/user/mod1',userCredentialObject,
        {headers:{Authorization: "Bearer "+ token}})
        .then(response=>{alert(response.data.message)
        if(response.data.message==='success')
        {
            userObj.balance=userObj.balance-userCredentialObject.wd
        }})
        .catch(error=>alert("something went wrong"))
    }
}


    return(
        <>
        <div className='display-2 text-center text-info'>Withdraw Amount
        </div>
        <Form className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
        <Form.Group className='mb-3'>
                <Form.Label>
                    Amount to be withdrawn
                </Form.Label>
                <Form.Control type='number' placeholder="Enter Amount" {...register("wd",{required:true})}/>
                {errors.wd&&<p classname='text-danger'>*Withdrawal Amount cannot be 0</p>}
            </Form.Group>
            <Button variant='primary' type ='submit'>Withdraw</Button>
        </Form>
        </>
    )
}

export default Withdraw