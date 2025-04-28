import Img from "../components/layout/img";
import Link from "next/link";

export default function Cursos() {
  return (
    <section className="text-black bg-white ml-5 mr-5 max-w-7xl">
      <section className="inforCurso bg-[url(/image/fundoBackground-cursos.jpg)] bg-center bg-current">
        <div className="py-5">
          <h1 className="text-5xl font-bold py-2">Cursos</h1>
        </div>
        <div className="py-5">
          <nav>
            <ul className="flex gap-2">
              <li>
                <Link href="/" className="text-blue-500">
                  Início
                </Link>
              </li>
              <div>&rarr;</div>
              <li>
                <Link href="/cursos" className="text-gray-600">
                  Cursos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="py-5">
          <p>
            Seja um apoiador do Curso em Vídeo, remova os anúncios do site,
            tenha créditos para emissão de certificados e outros benefícios
          </p>
        </div>
      </section>

      <section className="cards py-5">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-neutral-50 w-[350px]">
          <div className="w-full">
            <Link href="/cursos/curso-ingles-modulo-03">
              <Img img="curso_ingles.jpg" alt="imagem do Curso de inglês" />
            </Link>
          </div>
          <div className="px-6 py-4">
            <Link href="/cursos/curso-ingles-modulo-03">
              <h2 className="font-bold text-xl mb-2 text-black">Título</h2>
            </Link>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <Link href="/cursos/curso-ingles-modulo-03">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Veja mais
              </span>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
