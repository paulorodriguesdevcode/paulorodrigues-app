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
        <img src={principalLogo}
          alt="Uma logo com o nome paulorodriguesdev e uma escrita em binário de 'code'"
          title="logo da marca paulorodriguesdev" />
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
          desenvolvedores, fiz amizades e descobri a disparidade salarial, nessa época meu salário era de 1920.00R$ (não era
          pouco para um jovem da minha idade), descobri então que um Dev Jr daquela empresa ganhava mais de 50% do que eu na
          época, era o motivo que eu precisava! Fui pra casa, comecei os estudos e 6 meses depois... Meu primeiro trabalho
          como Desenvolvedor de Softwares com um salário muito superior ao que eu ganhava como Téc de Suporte.
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
            SOBRE O CURSO
          </h2>
          <ul>
            <li>Quem deseja construir uma base sólida do javascript.</li>
            <li>Pessoas que talvez nunca escreveram 1 linha se quer de código.</li>
            <li>Quem talvez já é desenvolvedor mas não conhece o javascript como linguagem de programação.</li>
          </ul>
        </article>

        <article className="how-sigin">
          <h2>
            COMO ME INSCREVER?
          </h2>
          <p>
            Esse curso já está na fase final de desenvolvimento e o lançamento está previsto para 05/06/2023, você pode garantir
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
            Tem muita gente por ai ensinando programação, então porque mais um?
            Bom, além de programador eu há pelo menos 11 anos cuido de pessoas e hoje sou Pastor.
            O que é que isso tem a ver?
            Independente da minha opção religiosas, algo é inegável:
            nesses 11 anos me apaixonei pelo “ENSINO”, amo ensinar,  ver pessoas entendendo algo que antes não fazia sentido
            e é por isso que se existe algo que você pode apostar nesse curso é <strong>DIDÁTICA</strong>.
          </p>
        </article>
        <form className="form-email" id="form-email">
          <h2>QUERO ME TORNAR UM DEV</h2>
          <div className="input-group">
            <label htmlFor="name">SEU NOME</label>
            <input type="text" value={name} id="name" disabled={!formIsEnable} onChange={(event) => setName(event.target.value)} />
          </div>
          <div className="input-group">
            <label htmlFor="email">SEU MELHOR EMAIL</label>
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