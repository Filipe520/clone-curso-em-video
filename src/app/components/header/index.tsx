import styles from "./styles.module.css";

import Img from "../layout/img";

import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Img img={"logoBlue.png"} alt="Imagem da logo Curso em Vídeo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/cursos">Cursos</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/cadastre-se">Cadastre-se</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
