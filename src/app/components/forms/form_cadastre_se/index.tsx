"use client"

import  { useState } from "react"
import Input from "../../layout/input"
import Button from "../../layout/button"
import styles from "../styles.module.css"

export default function FormCadastreSe(){
    const [name, setNome] = useState("")
    const [lastname, setLastNome] = useState("")
    const [email, setEmail] = useState("")
    const [cemail, setCEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCPassword] = useState("")

    const validate = ()=>{
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        
        if(!regexEmail.test(email) && email != cemail){
            alert("Email invalido ou não correspondente")
        }
    }

    return (
        <form className={styles.form} action="">
           <Input name="firstname" title="Nome" type="text" changeFunction={setNome}/>
           <Input name="lastname" title="Sobrenome" type="text" changeFunction={setLastNome}/>
           <Input name="email" title="E-mail" type="email" changeFunction={setEmail}/>
           <Input name="confirm-email" title="Confirme seu e-mail" type="email" changeFunction={setCEmail}/>
           <Input name="passoword" title="Senha" type="password" changeFunction={setPassword}/>
           <Input name="confirm-password" title="Confirmar sua senha" type="password" changeFunction={setCPassword}/>
           <Button title="Cadastrar-se" clickFunction={validate}/>
        </form>
    )
}