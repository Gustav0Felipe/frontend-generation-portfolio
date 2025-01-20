import linkedin from '../assets/img/linkedin.svg'
import github from '../assets/img/github.svg'
import instagram from '../assets/img/instagram.svg'



function Footer(){
    return(
    
        <footer className="flex" id="footer_content">
        <section id="redes_sociais">
            <a href="https://www.linkedin.com/in/gustavofelipecustodio/">
                <img src={linkedin} alt="LinkedIn"  className="social_icon"/>
            </a>
            <a href="https://github.com/Gustav0Felipe">
                <img src={github} alt="Github"  className="social_icon"/>
            </a>
            <a href="">
                <img src={instagram} alt="Instagram"  className="social_icon"/>
            </a>
        </section>
        <h3>
            Feito com 🧡 por Gustavo Felipe - 2025
        </h3>
        </footer>
    
    )
    }
export default Footer;