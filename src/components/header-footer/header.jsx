import {ContainerHeader, Logo, Navbar, Links} from "../home/styled"
import LogoSVG from "../../logoFooter.svg"

export default function Header() {
    return(
        <ContainerHeader className="header">
            <div className="logo">
                <Logo src={LogoSVG} alt="" />
            </div>
            <Navbar>
                <Links href="/">Home</Links>
                <Links href="produtos">Produtos</Links>
                <Links href="contatos">Contato</Links>
            </Navbar>
        </ContainerHeader>
        

    )

}