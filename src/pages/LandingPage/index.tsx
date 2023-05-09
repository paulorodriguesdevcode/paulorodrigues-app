import "./style.scss";
import principalLogo from '@assets/logo-principal.svg'
import profileImage from '@assets/photo-profile.svg'
import instagramIcon from '@assets/icon-instagram.svg'
import githubIcon from '@assets/icon-github.svg'
import youtubeIcon from '@assets/icon-youtube.svg'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Alert, MessagesToastEnum } from "../../components";

interface ISocialMedias {
  icon: string,
  src: string,
  name: string
}

export function LandingPage() {
  const socialMedias: ISocialMedias[] = [
    {
      icon: instagramIcon,
      src: 'https://www.instagram.com/paulorodriguesdev/',
      name: 'instagram'
    },
    {
      icon: githubIcon,
      src: 'https://github.com/paulorodriguesdevcode',
      name: 'github'
    },
    {
      icon: youtubeIcon,
      src: 'https://www.youtube.com/@paulorodriguesdevcode',
      name: 'youtube'
    }]

  const sendFormEmail = async () => {
    if (!email || !name) {
      Alert({ message: MessagesToastEnum.errorFieldsMandatory })
      return
    }

    try {
      setFormIsEnable(false)
      clearInputs()
      Alert({ message: MessagesToastEnum.sendingEmail })
        try {          
          await fetch('https://rod-tools.herokuapp.com/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Origin': '*'
            },
            body: JSON.stringify({
              to: 'prpaulo07@hotmail.com',
              subject: 'Novo dev interessado',
              text: `Nome: ${name}, \nEmail: ${email} \nenviado em: ${new Date()}`
            }),
          });
        } catch (error) {
          console.error(error);
        }
      Alert({ message: MessagesToastEnum.successEmail })
    } catch (e) {
      Alert({ message: MessagesToastEnum.errorEmail })
      setFormIsEnable(true)
    }
  }

  const clearInputs = () => {
    setName("");
    setEmail("");
  }

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [formIsEnable, setFormIsEnable] = useState<boolean>(true)

  return (
    <main className="content">
      <ToastContainer />
      <header className="header-initial">
        {/* <img src={principalLogo}
          alt="Uma logo com o nome paulorodriguesdev e uma escrita em binário de 'code'"
          title="logo da marca paulorodriguesdev" /> */}
        <section className="goal">
          <h2>Javascript sem enrolação</h2>
          <p>
            Te pegar pelas mãos do absoluto zero e te mostrar o essencial do Javascript até que você se torne um desenvolvedor com domínio nessa tecnologia.
          </p>
          <button>
            <a href="#form-email">
              APROVEITAR OFERTA
            </a>
          </button>
        </section>
      </header>
      <hr />
      <section className="about-me">
        <p>
          <strong>Minha primeira linha de código foi escrita em 2012.</strong><br />
          Nesse ano lá estava eu em uma sala de um curso técnico com a
          maioria dos alunos odiando a matéria de Lógica de Programação.
          Algum tempo passou, comecei a trabalhar como técnico em informática em uma “Big Tech” onde haviam muitos
          desenvolvedores. Fiz amizades e descobri a disparidade salarial. Nessa época, o meu salário era de R$1.920,00 (não era
          pouco para um jovem da minha idade). Descobri então que um Dev Jr daquela empresa ganhava 50% a mais do que eu sendo Analista de Suporte 3.
          Era o motivo que eu precisava! Fui para casa, comecei os estudos e 6 meses depois... Meu primeiro trabalho
          como Desenvolvedor de Softwares com um salário muito superior ao que eu ganhava.
          De lá pra cá, passei por muitas empresas, desde empresas pequenas, fábricas de software até empresas com
          faturamentos bilionários.
        </p>
        <img src={profileImage} alt="Uma foto de perfil do autor do curso, Paulo Rodrigues"
          title="foto de Paulo Rodrigues" />
      </section>
      <hr />

      <section className="course">
        <article className="about-course">
          <h2>
            PARA QUEM É O CURSO?
          </h2>
          <ul>
            <li>Para quem deseja construir uma base sólida do javascript.</li>
            <li>Pessoas que talvez nunca escreveram 1 linha se quer de código.</li>
            <li>Quem talvez já é desenvolvedor mas não conhece o javascript como linguagem de programação.</li>
          </ul>
        </article>

        <article className="how-sigin">
          <h2>
            COMO ME INSCREVER?
          </h2>
          <p>
            Esse curso já está na fase final de desenvolvimento e o lançamento está previsto para o dia 05/06/2023.
            <br/>Você pode garantir
            sua vaga preenchendo o formulário abaixo com o seu melhor e-mail e ficando de olho para não perder essa
            <strong> OPORTUNIDADE que pode transformar sua vida. </strong>
          </p>
        </article>
      </section>

      <hr />
      <section className="differential">
        <article className="text-explain">
          <h2>
            DIFERENCIAL
          </h2>
          <p>
          Existem muitos profissionais ensinando programação, então por que eu deveria ser mais um? Bem, além de ser programador, há mais de 11 anos, também atuo como pastor, cuidando das pessoas. Talvez você esteja se perguntando qual é a relação entre essas duas áreas. Independentemente da minha escolha religiosa, uma coisa é certa: ao longo desses 11 anos, desenvolvi uma verdadeira paixão pelo "ensino". Amar ensinar e presenciar o momento em que as pessoas começam a entender algo que antes parecia confuso é algo que me motiva profundamente. É por isso que, ao escolher este curso, você pode contar com uma abordagem didática sólida, eficaz e <strong>simples</strong>.
          </p>
        </article>
        <form className="form-email" id="form-email">
          <h2>QUERO ME TORNAR UM DEV</h2>
          <div className="input-group">
            <label htmlFor="name">SEU NOME</label>
            <input type="text" value={name} id="name" disabled={!formIsEnable} onChange={(event) => setName(event.target.value)} />
          </div>
          <div className="input-group">
            <label htmlFor="email">SEU MELHOR E-MAIL</label>
            <input type="email" value={email} id="email" disabled={!formIsEnable} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <button type="button" onClick={sendFormEmail} disabled={!formIsEnable}>EMBARCAR</button>
        </form>
      </section>
      <hr />

      <footer>
        <div className="social-medias">
          {socialMedias.map((socialMedia) => (
            <a href={socialMedia.src} target="_blank" key={('link-' + socialMedia.name)}>
              <img src={socialMedia.icon} key={('icon-' + socialMedia.name)} alt={`Icone com um link para o ${socialMedia.name} do Paulo Rodrigues.`} />
            </a>)
          )}
        </div>
        <p className="copy">Desenvolvido com &#9829; por<strong> &#9889;Paulo Rodrigues&#9889;</strong></p>
      </footer>
    </main>
  );
}