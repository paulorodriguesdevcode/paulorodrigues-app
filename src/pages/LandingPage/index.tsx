import "./style.scss";
import principalLogo from '@assets/logo-principal.svg'
import profileImage from '@assets/photo-profile.svg'
import instagramIcon from '@assets/icon-instagram.svg'
import githubIcon from '@assets/icon-github.svg'
import whatsAppIcon from '@assets/icon-whatsapp.svg'
import youtubeIcon from '@assets/icon-youtube.svg'

export function LandingPage() {
return (
    <main>
      <header>
        <img src={principalLogo}
          alt="Uma logo com o nome paulorodriguesdev e uma escrita em binário de 'code'"
          title="logo da marca paulorodriguesdev" />
        <section className="goal">
          <h2>Javascript sem enrolação</h2>
          <p>
            Te pegar pelas mãos do absoluto zero e te mostrar o essencial do Javascript até que você se torne um desenvolvedor com domínio nessa tecnologia.
          </p>
          <button>
            QUERO EMBARCAR
          </button>
        </section>
      </header>
      <hr />      
      <section className="about-me">
        <p>
          Minha primeira linha de código foi escrita em 2012, nesse ano lá estava eu em uma sala de um curso técnico com a
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
          <p>
            Para alinhar expectativas quero ser bem sincero com você ESSE CURSO é para quem:
            Quer construir uma base sólida do javascript.
            Pessoas que talvez nunca escreveram 1 linha se quer de código.
            Quem talvez já é desenvolvedor mas não conhece o javascript como linguagem de programação.
          </p>
        </article>

        <article className="how-sigin">
          <h2>
            COMO ME INSCREVER?
          </h2>
          <p>
            Esse curso já está na fase final de desenvolvimento e o lançamento está previsto para 20/02, você pode garantir
            sua vaga preenchendo o formulário abaixo com o seu melhor e-mail e ficando de olho para não perder essa
            OPORTUNIDADE que pode transformar sua vida.
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
            Nesses 11 anos me apaixonei pelo “ENSINO”, amo ensinar,  ver pessoas entendendo algo que antes não fazia sentido e é por isso que se existe algo que você pode apostar nesse curso é DIDÁTICA.
          </p>
        </article>
        <form className="form-email">
          <h2>QUERO ME TORNAR UM DEV</h2>
          <div className="input-group">
            <label htmlFor="name">SEU NOME</label>
            <input type="text" id="name"/>
          </div>      
          <div className="input-group">
            <label htmlFor="email">SEU MELHOR EMAIL</label>
            <input type="text" id="email"/>
          </div>
          <button type="button" onClick={() => alert('foi')}>EMBARCAR</button>
        </form>
      </section>
      
      <hr/>

      <footer>
        <div className="icons">
          <a href="https://www.instagram.com/paulorodriguesdev/" target="_blank">
            <img src={instagramIcon} alt="Icone com um link para o instagram do Paulo Rodrigues."/>
          </a>  
          <a href="https://github.com/paulorodriguesdevcode" target="_blank">
            <img src={githubIcon} alt="Icone com um link para o github do Paulo Rodrigues."/>
          </a>
          <a href="https://wa.me/5531991597777" target="_blank">
            <img src={whatsAppIcon} alt="Icone com um link para o whatsapp do Paulo Rodrigues."/>
          </a>
          <a href="https://www.youtube.com/@paulorodriguesdevcode" target="_blank">
           <img src={youtubeIcon} alt="Icone com um link para o youtube do Paulo Rodrigues."/>
          </a>
        </div>
        <p>Desenvolvido com &#9829; por Paulo Rodrigues</p>
      </footer>
    </main>
);
}