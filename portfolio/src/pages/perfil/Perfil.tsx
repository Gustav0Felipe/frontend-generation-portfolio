import Header from "../Header";
import Footer from "../Footer";

export function Perfil(){

    return(
        <>
        <Header></Header>
        <main>
            <section id="about" className="flex_start">
            <h2>Sobre Gustavo Felipe</h2>
            <div id="conteudo" className="flex">
                <a href="https://www.linkedin.com/in/gustavofelipecustodio/">
                    <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQELtW6zfjxzNA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731009386176?e=1741824000&v=beta&t=j0Mv5adgKxXOCKE6rNS6hcfcYUWPVxA844kH7MsTBcw"
                        alt="Foto do criador desse conteudo"
                        className="profile_icon"
                        />
                    </a>
                    <article id="sobre_texto">
                        <p>
                            Desenvolvedor FullStack Jr formando na Generation Brasil, sou Gustavo Felipe desde muito novo usando computadores e pesquisando sobre novas tecnologias, gosto muito de programar e aprender novos conhecimentos na área, quero acumular experiencia e evoluir como profissional, Interesse na área de T.i, me destaco em habilidades envolvendo raciocínio, sempre penso em como posso ser mais eficiente no meu dia a dia, e conseguir me traz satisfação, gosto de descobrir e testar ideias novas.
                            
                            
                        </p>
                        Conhecimento em: 
                        <ul>
                            <li>
                                Java | React | JavaScript | Node.js | MySql | Docker | HTML | CSS |
                                Metodologia Ágil Scrum | Ferramenta JIRA|
                                Inglês avançado.
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
            <section id="video" className="flex_start">
                <h2>Meu vídeo favorito:</h2>

                <div id="youtube" className="flex">
                    <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Z3_mtwMMuGI?si=F1QiiDYSfsPG3nF0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </div>
            </section>
        </main>
        <Footer></Footer>
        </>
    )
}

export default Perfil;