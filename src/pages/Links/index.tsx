import "./style.scss";
import principalLogo from '@assets/logo-principal.svg'
import instagramIcon from '@assets/icon-instagram.svg'
import githubIcon from '@assets/icon-github.svg'
import youtubeIcon from '@assets/icon-youtube.svg'
import { SectionLink } from "../../components";

export function Links() {
  return (
    <main className="content">
      <header className="header-logo">
        <img src={principalLogo}
          alt="Uma logo com o nome paulorodriguesdev e uma escrita em binário de 'code'"
          title="logo da marca paulorodriguesdev"
          className="logo"
        />
      </header>

      <section className="items-sections">
        <SectionLink name={'@PAULORODRIGUESDEV'} icon={instagramIcon} href="https://www.instagram.com/paulorodriguesdev" />
        <SectionLink name={'@PAULORODRIGUESDEVCODE'} icon={githubIcon} href="https://github.com/paulorodriguesdevcode" />
        <SectionLink name={'@PAULORODRIGUESDEVCODE'} icon={youtubeIcon} href="https://www.youtube.com/@paulorodriguesdevcode" />
      </section>

      <footer className="copy-footer">
        <p className="copy">Desenvolvido com &#9829; por<strong> &#9889;Paulo Rodrigues&#9889;</strong></p>
      </footer>
    </main>
  );
}