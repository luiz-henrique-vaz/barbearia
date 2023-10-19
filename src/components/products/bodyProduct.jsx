import { Container, Products, Product, Image, Price, Text, Title } from "./styled";
import CabeloSVG from "../../cabelo.jpg.svg"
import BarbaSVG from "../../barba.jpg.svg"
import ComboSVG from "../../cabelo+barba.jpg.svg"

export default function Body() {
    
    return(
        <Container>
            <Products>
                <Product>
                    <Title>Cabelo</Title>
                    <Image src={CabeloSVG} alt="Imagem de cabelo"/>
                    <Text>Na tesoura ou na máquina, como o cliente preferir.</Text>
                    <Price><strong>R$ 25,00</strong></Price>
                </Product>

                <Product>
                    <Title>Barba</Title>
                    <Image src={BarbaSVG} alt="Imagem de barba"/>
                    <Text>Corte e desenho profissional de barba.</Text>
                    <Price><strong>R$ 18,00</strong></Price>
                </Product>

                <Product>
                    <Title>Combo</Title>
                    <Image src={ComboSVG} alt="Imagem do combo cabelo e barba"/>
                    <Text>Pacote completo de cabelo e barba.</Text>
                    <Price><strong>R$ 35,00</strong></Price>
                </Product>
            </Products>

            

        </Container>

    )
}