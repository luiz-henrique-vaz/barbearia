import styled from 'styled-components';

//Header - Home

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;
    background-color: #EECCAD;
    padding: 2vh 0px;
    width: 100vW;
    
    @media (min-width: 1024px) {
        
        flex-direction: row;
        justify-content: space-around;
        height: 10vh;
        
    }

`
export const ContainerFooter = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;
    background-color: #EECCAD;
    padding: 2vh 0px;
    width: 100vW;
    @media (min-width: 1024px) {
        
        justify-content: space-around;
        height: 15vh;
        
    }
`

export const Logo = styled.img`
    display: flex;
    align-items: center;
    width: 100%;
    filter: drop-shadow(0px 0px 10px rgba(0 0 0 / 60%));
    @media (min-width: 1024px) {
        width: 6vw;
        
    }
`

export const Navbar = styled.div`
    margin-top: 2vh;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 6%;
    font-size: 1.3rem;
    @media (min-width: 1024px) {
        width: 60vw;
        
    }
`

export const Links = styled.a`
    text-decoration: none;
    color: #341605;
    padding: 2px 10px;
    font-weight: 500;

    &:hover {
        filter: drop-shadow(0px 0px 5px rgba(52 22 15 / 100%));
    }
    
    
`

//Body

export const ContainerBody = styled.div`
    min-height: 100vh;
`
export const DivBanner = styled.div`
    display:flex;
    justify-content:center;
`

export const Banner = styled.img`

    width: 100%;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        width: 60%;
        
    }
    @media (min-width: 1024px) {
        width: 50vw;
        
    }
    
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 5vw;
    

`
export const Titulo = styled.h1`
    font-weight: 500;
    
`

export const Sobre = styled.p`
    text-align: center;
    
`

export const Citacao = styled.q`
    font-weight: 600;
    font-size: 12.5px;
`
export const Mapa = styled.div`
    width:100vw;
    height: auto;
    @media (min-width: 768px) {
        width: 80vw;
        height: auto;
    }
    
`
export const ContainerVideo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 5vw;
    @media (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        gap: 4vw;
        }

    
`

export const Video = styled.div`
    width:100vw;
    height: auto;
    @media (min-width: 768px) {
        width: 65vw;
        height: auto;
    }
    @media (min-width: 1024px) {
        width: 45vw;
        height: auto;
    }
`

export const Lista = styled.ul`
    
`
//Footer

export const Copyright = styled.p`
    color: #341605;
    font-family: Gowun Batang;
    font-size: 13px;
    font-weight: 500;
`