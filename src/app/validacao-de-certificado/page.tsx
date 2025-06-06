"use client"

import BannerRotaHeader from "../components/banner_rota_header";

import { PiCertificate } from "react-icons/pi"

import { useState } from "react"

export default function ValidacaoDeCertificado(){
  const [code, setCode] = useState("")
  return(
    <main>
      <BannerRotaHeader nomeRota="Validação de Certificado"/>
      <section className="text-center p-5">
        <PiCertificate size={80} className="block mx-auto my-5" />
        <p>Digite o código do certificado no formulário abaixo para verificar sua validade</p>
        <div className="flex flex-col gap-2">
              <label htmlFor="code" className="text-sm text-black/80">
                Código do certificado{" "}
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="code"
                id="code"
                placeholder="Ex: 7a34f9i760"
                className="border border-black/80 rounded-sm px-3 py-2"
                onChange={(event)=>{setCode(event.target.value)}}
                value={code}
              />

              <button className="py-2 px-4 text-sm bg-blue-700 text-white rounded-lg">
                Validar Certificado
              </button>
         </div>
      </section>
    </main>
  )
}
