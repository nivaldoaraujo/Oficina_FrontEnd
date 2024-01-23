import imagemDev from '../imagens/pessoa.png'
import gitHub from '../imagens/github.png'
import linkDin from '../imagens/linkdin.png'
import './App.css'

function App() {
  
  return (
    <>
      <main>
        <section>
          <p>
            Olá Seja bem-vindo(a) ao meu portfólio.
          </p>
          <p>
            Meu Nome é <span>Nivaldo Araújo</span> e eu sou um desenvolvedor web.
          </p>
          <div id="redes-sociais">
            <a href="#">
              <img src={gitHub} alt="" srcSet='' />
            </a>
            <a href="#">
              <img src={linkDin} alt="" srcSet='' />
            </a>
          </div>

          <a href="#sobreMim">
            <button>Conheça mais sobre mim</button>
          </a>

        </section>
        <section>
          <img id="imagemDev" src={imagemDev}/>
        </section>
      </main>
    </>
  )
}

export default App
