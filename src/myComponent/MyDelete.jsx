import { useForm } from "react-hook-form"
import styles from "./MyDelete.module.css"
import { useState } from "react"
import axios from "axios"
export function MyDelete(){
    const [responses, setResponses] = useState("")

    const {register, handleSubmit, reset} = useForm({defaultValues:{
        // unique_key: "xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx"
    }})

    async function submit(date){
        await axios({
            method: "delete",
            url: `https://qr-code-good.vercel.app/qr_code/remove_qr/${date.unique_key}`,
            headers:{
                "accept" : "application/json"
            }
        }).then((response) => {
            setResponses(response.data)
            reset()

        })
    }


    return(

        <div className={styles.block_input}>
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <label  style={{color: "#F2F2F2", marginBottom: "5px", display: "block", textTransform: "uppercase" }}>insert your key</label>
                    <input  {...register("unique_key")} className={styles.input_form}></input>
                    <button style={{display:"block" , marginBottom: "40px", height: "30px", width: "100px", color: "#16141a", backgroundColor: "#F2F2F2", borderRadius: "5px"}}>SUBMIT</button>
                </form>

                <p className={styles.text_response}>{responses}</p>
            </div>
        </div>
    )
}