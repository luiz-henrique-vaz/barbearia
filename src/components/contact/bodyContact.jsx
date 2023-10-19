import React from "react"
import { Container, Forms, Label, Input, Campos, Button, Texto} from "./styled"


export default function Body() {
    const enviarForm = (e) => {
        e.preventDefault();
        const mensagem = document.getElementById("mensagem");
        const tel = document.getElementById("tel");
        const container = document.getElementById("container");
        const texto = document.getElementById("texto");
    
        if (mensagem.value === "" || tel.value === "") {
          alert("Favor preencher os campos obrigatórios.");
          
          if (mensagem.value === "") {
            mensagem.style.border = "2px solid red";
          } else {
            mensagem.style.border = "2px solid initial"; 
          }
    
          if (tel.value === "") {
            tel.style.border = "2px solid red";
          } else {
            tel.style.border = "2px solid initial"; 
          }
        } else {
          container.style.display = 'none';
          texto.innerHTML = "Formulário enviado, logo menos entraremos em contato com você!";
        }
      }
    
    
    

    return(
        <Container>
            <Forms  id="container">
                <Campos>
                    <Label>Nome </Label>
                    <Input type="text" placeholder="Insira seu nome e sebrenome "  id="nome" ></Input>
                </Campos>
                <Campos>
                    <Label>E-mail</Label>
                    <Input type="email" placeholder="Exemplo: email@dominio.com"></Input>
                </Campos>
                <Campos>
                    <Label>Telefone</Label>
                    <Input type="tel" placeholder="(xx) xxxxx-xxxx *" id="tel" ></Input>
                </Campos>
                <Campos>
                    <Label>Mensagem</Label>
                    <Input type="text" placeholder="Qual sua dúvida? *" id="mensagem"></Input>
                </Campos>
                <Campos>
                    <Label>Como prefere nosso contato?</Label>
                    <Input type="text" placeholder="Email, Telefone ou WhatsApp?"></Input>
                </Campos>
                <Campos>
                    <Label>Qual horário prefere ser atendido?</Label>
                    <Input type="text" placeholder="Horário de funcionamento: 8h ás 20h"></Input>
                </Campos>
                
                <Campos>
                    <Button type="submit" value="Enviar formulário" id="button" onClick={enviarForm}>Enviar formulário</Button>
                </Campos>
                
                
            </Forms>

            <Texto id="texto"></Texto>
        </Container>
    )
}