import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";

function Contato(){
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [assunto, setAssunto] = useState<string>("");
    const [message, setMessage] = useState<string>("");    

    function check(event: any){
        event.preventDefault();
        if (name.length < 3) {
            setName('O Nome deve ter no minimo 3 caracteres.')
            return;
        }else{
            setName("")
        }
    
        if (!email.match(emailRegex)) {
            setEmail('Digite um E-mail válido.')
            return;
        }else{
            setEmail('')
        }
    
        if (assunto.length < 5) {
            setAssunto('O Assunto deve ter no minimo 5 caracteres.')
            return;
        }else{
            setAssunto("")
        }

        window.alert("Formulário Enviado com Sucesso!");
       
    }

    return(
        <>
        <Header></Header>
        <main>
			<div id="contact" className="flex">
				<form action="#" method="submit" id="formulario">
					<label htmlFor="name">Nome: </label>
					<input
						id="name"
						type="text"
						name="name"
						placeholder="Digite seu nome"
                        value={name}
                        onChange={(target) => {setName(target.target.value)}}
					/>
					<span id="txtNome"></span>

					<label htmlFor="email">Email: </label>
					<input
						id="email"
						type="text"
						name="email"
						placeholder="Digite seu email"
                        value={email}
                        onChange={(target) => {setEmail(target.target.value)}}
					/>
					<span id="txtEmail"></span>

					<label htmlFor="subject">Assunto: </label>
					<input
						id="subject"
						type="text"
						name="subject"
						placeholder="Digite o título da mensagem"
                        value={assunto}
                        onChange={(target) => {setAssunto(target.target.value)}}
					/>
					<span id="txtSubject"></span>

					<label htmlFor="message">Mensagem: </label>
					<textarea
						id="message"
						name="message"
						placeholder="Digite sua mensagem"
                        value={message}
                        onChange={(target) => {setMessage(target.target.value)}}
                    ></textarea>

					<button type="submit" onClick={check}>Enviar</button>
				</form>

				<section id="mapa" className="flex_start">
                <div id="endereco">
                    <p>Rua Betunia, 79</p>
                    <p>Mauá - SP</p>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5596201765043!2d-46.42045672463407!3d-23.65593717873497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6e9855abe62b%3A0x86028b7859d7ac2f!2sR.%20Bet%C3%BAnia%2C%2079%20-%20Ch%C3%A1cara%20Maria%20Aparecida%2C%20Mau%C3%A1%20-%20SP%2C%2009332-080!5e0!3m2!1spt-BR!2sbr!4v1736266320494!5m2!1spt-BR!2sbr" 
                width="400" 
                height="300" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>

                </section>
			</div>
		</main>
        <Footer></Footer>
        </>
    )
}
export default Contato