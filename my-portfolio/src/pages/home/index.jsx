import "./styles.scss";
import IconLogo from "../../assets/icon-logo.jpg";
import Giticon from "../../assets/Git.jpg";
import Linkedinicon from "../../assets/Linkedin.jpg";
import Instagramicon from "../../assets/Instagram.jpg";
import JorgeImage from "../../assets/Jorge-image.jpg";

function Home() {
  return (
    <div className="home">
      <header>
        <div id="logo-header">
          <a href="#">
            <img src={IconLogo} alt="Logo" width={50} height={50} />
            <h2>JorgeOliveira</h2>
          </a>
        </div>

        <nav>
          <a href="#">Início</a>
          <a href="#">Sobre</a>
          <a href="#">Portfólio</a>
          <a href="#">Serviços</a>
          <a href="#">Contato</a>
        </nav>
      </header>

      <section className="Jorge">
        <div className="text-Jorge">
          <div className="text-container">
            <span>Olá, Eu sou</span>
            <h1>Jorge Oliveira</h1>
            <h2>E sou Desenvolvedor FrontEnd</h2>
            <p>
              "Cada aplicação bem desenvolvida é um testemunho de como a
              tecnologia pode transformar vidas positivamente."
            </p>
          </div>

          <div className="buttons">
            <button>Sobre Mim</button>
            <button>Baixar Currículo</button>
          </div>

          <div className="social-media">
            <a href="#">
              <img src={Giticon} alt="GitHub" />
            </a>
            <a href="#">
              <img src={Linkedinicon} alt="LinkedIn" />
            </a>
            <a href="#">
              <img src={Instagramicon} alt="Instagram" />
            </a>
          </div>
        </div>

        <div className="jorge-photo">
          <img src={JorgeImage} alt="Jorge Oliveira" />
        </div>
      </section>
    </div>
  );
}

export default Home;