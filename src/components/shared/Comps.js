import styled from '@emotion/styled';

import betLogo from '../../assets/betOven.png';

export const Input1 = styled.input`
        display: inline-block;
        border-radius: 5px;
        background-color: #A1B4CF;
        border: 1px solid #0D141B;
        color: #0D141B;
        text-align: center;
        vertical-align: middle;
        font-size: 15px;
        width: 150px;
        height: 30px;
        transition: all 0.5s;
        cursor: text;
        margin: 5px;
        position: absolute;
        top: 50%;
        left: 47.5%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%); 
`;
export const Input2 = styled.input`
        display: inline-block;
        border-radius: 5px;
        background-color: #A1B4CF;
        border: 1px solid #0D141B;
        color: #0D141B;
        text-align: center;
        vertical-align: middle;
        font-size: 15px;
        width: 150px;
        height: 30px;
        transition: all 0.5s;
        cursor: text;
        margin: 5px;
        position: fixed;
        top: 30%;
        left: 47.5%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%); 

`;

export const Button = styled.button`


    display: inline-block;
    border-radius: 5px;
    background-color: #0D141B;
    border: 1px solid #C7D5EA;
    color: #C7D5EA;
    text-align: center;
    vertical-align: middle;
    font-size: 15px;
    width: 100px;
    height: 40px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
    position: absolute;
    bottom: 0%;
    left: 47.5%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    &:hover{
        background-color: #C7D5EA;
        color: #0D141B;
    }
    @media (max-width: 400px) {
        position: absolute;
        width: 100%;
        height: 100%;
    }

`;

export const ErrorMsg = styled.div`
    font-family: system-ui;
    display: inline-block;
    color: crimson;
    text-align: center;
    vertical-align: middle;
    font-size: 10px;
    width: 90%;
    height: auto;
    margin: 5px;
    position: fixed;
    bottom: 25%;
    left: 47.5%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
`;

export const Logicon = styled.img`
    height:13%;    
    width: auto;
    content: url(${betLogo});
    position: fixed;
    top: 6%;
    left: 24%;
`;