import styled from "styled-components/native";

export const Container = styled.View`
    margin-top: 16px;
    border-radius: 16px;

    width: 100%;

    background-color: ${({theme}) => theme.colors.background_secondary};

    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    
    padding: 16px ;
`