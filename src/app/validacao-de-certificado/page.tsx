"use client"

import BannerRotaHeader from "../components/banner_rota_header";

import { useState, useRef } from "react"

export default function ValidacaoDeCertificado(){
  const [code, setCode] = useState("")
  const iframe_ref = useRef<HTMLIFrameElement>(null)

  const validateCerticate = () => {
    if(iframe_ref.current){
      iframe_ref.current.src = "https://certificate-exibition.netlify.app/?&code="+code
    }
  }

  return(
    <main>
      <BannerRotaHeader nomeRota="Validação de Certificado"/>
      <section className="flex items-center justify-center flex-col md:flex-row text-center p-5">
       <div className="w-full max-w-[800px] p-5">
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

              <button 
                className="py-2 px-4 text-sm bg-blue-700 text-white rounded-lg"
                onClick={validateCerticate}
              >
                Validar Certificado
              </button>
         </div>
        </div>
        <div className="aspect-10/8 w-full max-w-[1000px]">
          <iframe 
            ref={iframe_ref}
            src="https://certificate-exibition.netlify.app/?&code=exemple"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </section>
    </main>
  )
}
