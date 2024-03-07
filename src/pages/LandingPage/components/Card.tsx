import { Card } from "react-bootstrap";
import styled from "styled-components";

export const StyledCard = styled(Card)`
    width: 300px !important;
    height: 300px;
    border-radius: 100%;
    padding: 10px;
    background-color: #1a1a1a;
    margin: 30px;
    border: 1px #f1aa27 solid;
    box-shadow: 1px 1px 5px 1px #d16b27;


    .card-title{
        color: #d86a20;
        text-align: center;
        margin: 20px;
    }
    .text-card{
        color: #c9c9c9;
    }
`

export const StyledCardFood = styled(Card)`

    width: 300px;
    min-height: 750px;
    height: cover;
    margin: 10px;
    padding: 10px;
    background-color: #181818;
    border: 1px #d86a20 solid;

    h4{
        color: #d86a20;
    }
    .card-title{
        color: #d86a20;
        text-align: center;
        margin: 20px;
    }
    .text-card{
        color: #c9c9c9;
    }
    .card-image{
        
        height: 280px;
        border-radius: 300px;
        border: 2px solid #d86a20;
        
        margin-top: 10px;
        
        margin-bottom: 30px;
    }
    p{
        color: #bdbdbd;
    }
`


export const StyledButtonBuy = styled.button`
    padding: 10px;
    width: 100%;
    background-color: inherit;
    border: 1px solid #ad6e10;
    color: #ad6e10;
    text-transform: uppercase;
    border-radius: 20px;
`