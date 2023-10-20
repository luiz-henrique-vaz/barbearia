import styled from "styled-components";

export const Container = styled.div`
    margin: 6vh 0vh;
    width: 100%;
    min-height: 55vh;
`

export const Forms = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (min-width: 1024px) { 
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
    }
`

export const Campos = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1px;
    
    
`
export const Label = styled.label`
    color: #341605;
    
`
export const Input = styled.input`
    width: 60%;
    height: 20px;
    border-radius: 5px;
    border-width: 0.5px;
    border-color: #341605;
    @media (min-width: 768px) {
        width: 40vw; 
    }
    @media (min-width: 1024px) {
        width: 30vw; 
        
    }
`

export const Button = styled.button`
    margin-top: 2rem;
    width: 25vw;
    height: 35px;
    background-color: #341605;
    border: none;
    color: #EECCAD;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(52 22 5 / 60%);
    cursor: pointer;

`

export const Texto = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #341605;
    text-align: center;
    

`