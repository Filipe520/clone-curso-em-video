"use client";

import Link from "next/link";
import Button from "../../layout/button";
import Input from "../../layout/input";
import styles from "../styles.module.css";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const validation = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      alert("Email possuir formato invalido");
      return;
    }

    if (password.length < 8) {
      alert("Senha no formato inválido");
      return;
    }

    router.push("/minha-conta");
  };

  return (
    <form className={styles.form} action="">
      <h1>Entrar</h1>
      <Input
        name={"email"}
        title={"Email"}
        type={"email"}
        changeFunction={setEmail}
      />
      <Input
        name={"password"}
        title={"Senha"}
        type={"password"}
        changeFunction={setPassword}
      />
      <Button title="Entrar" clickFunction={validation} />
      <Link href="/cadastre-se">Cadastrar</Link> |{" "}
      <Link href="minha-conta/senha-perdida/">Esqueceu senha?</Link>
    </form>
  );
}
