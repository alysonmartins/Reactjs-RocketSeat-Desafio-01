import { GithubLogo, Heart } from "@phosphor-icons/react";
import styles from "./Footer.module.css"


export function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <p>
        Desenvolvido com
        <Heart weight="fill" className={styles.heart} />
        por
        <a href="https://github.com/alysonmartins/">Alyson A. Martins <GithubLogo weight="fill" size={14} /></a>
      </p>
    </footer>
  )
}