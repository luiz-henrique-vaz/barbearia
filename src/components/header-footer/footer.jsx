
import LogoSVG from "../../logoFooter.svg"
import { ContainerFooter, Copyright, Logo } from "../home/styled"

export default function Footer() {
    return(
        <ContainerFooter>
            <div className="logo">
                <Logo src={LogoSVG}/>
            </div>

            <Copyright>
                © Copyright Barbearia Grooming - 2023
            </Copyright>

        </ContainerFooter>

    )

}