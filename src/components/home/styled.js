import styled from 'styled-components';

//Header - Home

export const ContainerHeaderFooter = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-around;
    background-color: #EECCAD;
    padding: 2vh 0px;
    width: 100vW;
`
export const Logo = styled.img`
    display: flex;
    align-items: center;
    width: 100%;
    filter: drop-shadow(0px 0px 10px rgba(0 0 0 / 60%));
    
`

export const Navbar = styled.div`
    margin-top: 2vh;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 6%;
    font-size: 16px
`

export const Links = styled.a`
    text-decoration: none;
    color: #341605;
    text-transform: uppercase;
    font-weight: bold;
`

//Body

export const ContainerBody = styled.div`
    
`


export const Banner = styled.img`
    
    width: 100%;
    margin-bottom: 20px;
    
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