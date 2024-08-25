import { Button, TextField } from "@mui/material"
import styles from "./MyForm.module.css"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useState } from "react"
export default function MyForm (){

    const [key , setKey] = useState("")
  
    const {register, handleSubmit, reset, formState:{isDirty}} = useForm({})

    async function copy_date(){
       await navigator.clipboard.writeText(key)
    }

    async function submit(date){
        await axios({
            method: "post",
            url: "https://qr-code-good.vercel.app/qr_code/add_qr",
            headers:{
                "accept": "application/json",
                'Content-Type': 'application/json;charset=UTF-8',
            },
            data:{
                "name": date.name,
                "first_name": date.first_name,
                "patronymic": date.patronymic,
                "info": date.info, 
            }
        })
        .then((response) => {
            setKey(response.data)
            reset()
            
        })
    }
   


    return(
        <div className={styles.div_form}>
            <div>
                <form onSubmit={handleSubmit(submit)}>


                    <label  htmlFor="name" style={{color: "#F2F2F2", marginBottom: "5px", display: "block" }} >NAME</label>
                    <input {...register("name", {required: isDirty})} className={styles.input_form} name="name" id="name"></input>
                   

                    <label  htmlFor="first_name" style={{color: "#F2F2F2", marginBottom: "5px", display: "block" }} >FIRST NAME</label>
                    <input {...register("first_name", {required: isDirty})} className={styles.input_form} name="first_name" id="first_name"></input>

                    <label  htmlFor="patronymic" style={{color: "#F2F2F2", marginBottom: "5px", display: "block" }} >PATRONYMIC</label>
                    <input {...register("patronymic", {required: isDirty})} className={styles.input_form} name="patronymic" id="patronymic"></input>

                    <label  htmlFor="info" style={{color: "#F2F2F2", marginBottom: "5px", display: "block" }}>INFO</label>
                    <textarea {...register("info", {required: isDirty})} className={styles.info_form} name="info" id="info"></textarea>

                    <button style={{display:"block" , marginBottom: "40px", height: "30px", width: "100px", color: "#16141a", backgroundColor: "#F2F2F2", borderRadius: "5px"}}>SUBMIT</button>
                </form>
                <div>
                    <label style={{color: "#F2F2F2", marginBottom: "5px", display: "block", textTransform: "uppercase"}}>unique QR code key</label>
                    <div style={{display: "flex", alignItems: "start"}}>
                        <textarea  className={styles.input_form}  style={{width: "500px", resize: "none", height: "20px", marginRight: "10px" }} value={key}></textarea>
                        <button onClick={copy_date} style={{height:"30px", borderRadius:" 5px"}} >copy...</button>
                    </div>
                </div>
            </div>      
        </div>

    )
}