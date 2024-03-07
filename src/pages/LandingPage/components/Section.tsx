import { styled } from "styled-components";
import bgHome from '../../../assets/bghome.jpg';

export const StyledSectionPresentation = styled.div`
    height: 100vh;
    background-color: #dd2727;
    background-image: url(${bgHome});
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center;
`
export const StyledSectionCardapio = styled.div`
    height: 100vh;
    
    background-color: #181818;
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center;
    display: flex;
    justify-content: center;
    align-items: center;
    .title{
        font-size: 40px;
        color: #d86a20;
    }
`


export const StyledSectionDetails = styled.div`
    height: 100vh;
    background-color: #f1aa27;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 3px #ad6e10 solid;
    .icon-card-details{
        color: white;
        text-align:center;
        display: flex;
        align-self: center;
        margin-bottom: 10px;
        font-size: 40px;
    }
`
