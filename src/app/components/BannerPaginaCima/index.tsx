export default function BannerPaginaCima() {
  return (
    <section className="bg-blue-50 text-black bg-[url(/image/BannerPaginaCima.jpg)] bg-cover bg-no-repeat bg-center">
      <h1 className="text-5xl font-semibold text-blue-950">Minha conta</h1>

      <div className="my-10">
        <ul className="flex gap-1.5 text-[.9em]">
          <li className="text-blue-700 cursor-pointer active:opacity-70">
            Início
          </li>
          &rArr;
          <li className="text-gray-600 cursor-pointer active:opacity-70">
            Minha conta
          </li>
        </ul>
      </div>

      <p className="text-blue-700 text-sm font-stretch-50% font-medium">
        Seja um apoiador do <strong>Curso em Vídeo</strong>, remova os anúncios
        do site, tenha créditos para emissão de certificados e outros benefícios
      </p>
    </section>
  );
}
