import styled from "styled-components";

export const ContentMobile = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background-color: transparent;

    .ul{ 
        img{
            width: 40%;
            margin-bottom: 50px;
        }
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 30px 0 0 40px;
        background-color: #15171B;
        box-shadow: 10px 0px 34px 8px #000;

        li{
            font-size: 25px;
            color: #FFFFFF;
            font-weight: 500;
            font-family: 'Poppins'; 
        }
     
    }

`