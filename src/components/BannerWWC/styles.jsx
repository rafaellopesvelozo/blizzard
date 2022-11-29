import styled from "styled-components";
import BgWWC from '../../assets/banners/world-warcraft-bg.jpg'

export const ContainerBanner = styled.div` 

    &:after{
        content: "";
        position: absolute;
        bottom: 20px;
        background-color: #00AEFF;
        width: 80%;
        height: 1.5px;
    }

    .banner-content{
        
        position: relative;
        display: flex;
        justify-content: space-between;
        background-image: url('${BgWWC}');
        background-position:top right;
        background-position-y: -20px;
        background-repeat: no-repeat;
        background-size: 130%;
        height: 670px;
       
         
        &:after {
            content: "";
            background: radial-gradient(72.28% 72.28% at 52.36% 25.95%, rgba(2, 2, 3, 0) 0%, #020203 71.1%);
            opacity: 0.5;
            mix-blend-mode: multiply;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
    
        }

        .banner-title{
            .title h1{
                    font-size: 55px;
                    font-family: 'Poppins';
                    color: ${({ theme }) => theme.colors.white};
                    font-weight: 700;
                    width: 520px;
                    line-height: 75px;
                    padding-bottom: 15px;
                    //padding-top: 14.15%;
                }
        }
    }
`