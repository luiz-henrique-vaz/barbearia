
import LogoSVG from "../../logoFooter.svg"
import { ContainerHeaderFooter, Copyright, Logo } from "../home/styled"

export default function Footer() {
    return(
        <ContainerHeaderFooter>
            <div className="logo">
                <Logo src={LogoSVG}/>
            </div>

            <Copyright>
                © Copyright Barbearia Grooming - 2023
            </Copyright>

        </ContainerHeaderFooter>

    )

}