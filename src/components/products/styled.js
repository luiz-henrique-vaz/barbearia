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
`


export const Title = styled.h1`
    margin-bottom: -5px;
    font-weight: 500;
    text-transform: uppercase;
`
export const Image = styled.img`
    width: 60vw;
    margin-bottom: -10px;
    
`

export const Text = styled.p`
    text-align: center;
    width:50vw;
    margin-bottom: -5px;

`
export const Price = styled.p`
    color: #341605;
`

