import styled from "styled-components";

export const Container = styled.div`
    margin: 6vh 0vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    

`

//Produtos gerais
export const Products = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7vh;
    @media (min-width: 768px) {
        width: 100vw;
        height: auto;
    }
    @media (min-width: 1024px) {
        flex-direction: row;
        height: auto;
        justify-content: center;
        
    }
`
export const Product = styled.div`
    width: 60vw;
    height: auto;
    padding: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 2px;
    border-radius: 20px;
    border-color: #341605;
    box-shadow: 0px 0px 10px rgba(52 22 5 / 60%);
    @media (min-width: 768px) {
        width: 35vw;
        height: auto;
    }
    @media (min-width: 1024px) {
        width: 290px;
        height: 450px;
        justify-content: center;
    }
    &:hover {
        width: 293px;
        height: 453px;
        transition: 0ms.5;
        box-shadow: 10px 10px 20px rgba(52 22 5 / 80%);
    }
    &:active {
        width: 293px;
        height: 453px;
        transition: 0ms.5;
        box-shadow: 10px 10px 20px rgba(52 22 5 / 80%);
    }
`


export const Title = styled.h1`
    margin-bottom: -5px;
    font-weight: 500;
    text-transform: uppercase;
`
export const Image = styled.img`
    width: 60vw;
    margin-bottom: -10px;
    @media (min-width: 768px) {
        width:35vw;
        height: auto;
    }
    @media (min-width: 1024px) {
        flex-direction: row;
        width: 250px;
        height: auto;
    }
`

export const Text = styled.p`
    text-align: center;
    width:50vw;
    margin-bottom: -5px;
    @media (min-width: 768px) {
        width:35vw;
        height: auto;
    }
    @media (min-width: 1024px) {
        flex-direction: row;
        width: 250px;
        height: auto;
    }
`
export const Price = styled.p`
    color: #341605;
`

