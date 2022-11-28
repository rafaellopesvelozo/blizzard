import styled from "styled-components";
import BgLogin from '../../assets/login/bgLogin.png'

export const ContainerLogin = styled.div`
    position: fixed;
    z-index:999;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('${BgLogin}') ;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    margin: 0 auto;

`