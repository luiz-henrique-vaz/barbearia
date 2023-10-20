
import LogoSVG from "../../logoFooter.svg"
import { ContainerFooter, Copyright, Logo } from "../home/styled"

export default function Footer() {
    return(
        <ContainerFooter>
            <div className="logo">
                <Logo src={LogoSVG}/>
            </div>

            <Copyright>
                © Copyright Luiz Henrique Vaz - 2023
            </Copyright>

        </ContainerFooter>

    )

}