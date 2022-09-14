import styled from "styled-components";
export const SearchDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 2vh 0 5vh 0;
`;

export const Search = styled.input`
    min-width: 18vw;
    height: 3vh;
    border: 1px solid rgb(255, 255, 255, 0.25);
    border-radius: 4px;
    transition: all 0.5s ease-out;
    font-size: 1.2em;
    background-color: rgb(255, 255, 255, 0.25);
    &:focus {
        outline: none;
        height: 4vh;
        background-color: #ebebe0;
    }
    ::placeholder {
        font-size: 0.7em;
        color: #000000;
    }
`;

export const SearchIcon = styled.i`
    font-size: 1.2em;
    margin: 0 0.5vw 0 0;
`;

export const WeatherContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
    min-width: 20vw;
    padding: 1vw;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #333333;
    background-color: rgb(255, 255, 255, 0.25);
`;
