import styled from "styled-components";
import BgWWC from '../../assets/banners/world-warcraft-bg.jpg'

export const ContainerBanner = styled.div` 
    .banner-content{
        position: relative;
        display: flex;
        justify-content: space-between;
        background-image: url('${BgWWC}');
        background-position:center right;
        background-repeat: no-repeat;
        height: 670px;

        .banner-title{
            .title h1{
                font-size: 55px;
                font-family: 'Poppins';
                color: #FFFFFF;
                font-weight: 700;
                width: 520px;
                line-height: 75px;
                padding-bottom: 15px;        
            }
        }

        #current-arrow{  
            width: 80%;
        }
    }
`