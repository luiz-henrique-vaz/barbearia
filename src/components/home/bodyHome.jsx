import { ContainerBody, Banner, Container, Titulo, Sobre, Citacao, Mapa, Lista} from "./styled"
import BannerSVG from "../../banner.svg"

export default function Body() {

    const mapaURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4483278365396!2d-46.63466568562861!3d-23.588249068469487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0xab35da2f5ca62674!2sCaelum!5e0!3m2!1spt-BR!2sbr!4v1568814489656!5m2!1spt-BR!2sbr";

    const videoURL = "https://www.youtube.com/embed/wcVVXUV0YUY"

    return(
        <ContainerBody>
            <div>
                <Banner src={BannerSVG}  alt=""/>
            </div>
            <Container className="sobre">
                <Titulo>
                    Quem somos
                </Titulo>
                <Sobre>
                    Localizada no coração da cidade a Barbearia GROOMING traz para o mercado o que há de melhor para o seu cabelo e barba. Fundada em 2019, a Barbearia Grooming já é destaque na cidade e conquista novos clientes a cada dia.
                </Sobre>

                <Citacao>
                    Proporcionar auto-estima e qualidade de vida aos clientes
                </Citacao>

                <Sobre>
                    Oferecemos profissionais experientes e antenados às mudanças no mundo da moda. O atendimento possui padrão de excelência e agilidade, garantindo qualidade e satisfação dos nossos clientes.
                </Sobre>
            </Container>

            <Container>
                <Titulo>Nossa Localização</Titulo>
                <div>
                <Mapa dangerouslySetInnerHTML={{ __html: `<iframe src="${mapaURL}" width="100%" height="300" frameBorder="0" style="border:0;" allowFullScreen></iframe>` }} />
                </div>
            </Container>

            <Container>
                <Titulo>
                    O que oferecemos
                </Titulo>

                <Lista>
                    <li>Atendimento personalizado aos clientes</li>
                    <li>Espaço aconchegante</li>
                    <li>Boa localização</li>
                    <li>Profissionais bem qualificados</li>
                    <li>Compromisso com o cliente</li>
                    <li>Local devidamente higienzado</li>
                </Lista>

                <div>
                <Mapa dangerouslySetInnerHTML={{ __html: `<iframe src="${videoURL}" width="100%" height="300" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" style="border:0;" allowFullScreen></iframe>` }} />
                </div>
            </Container>

        </ContainerBody>
        
    )

}