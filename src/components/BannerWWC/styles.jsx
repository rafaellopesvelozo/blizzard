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
        
        #current-arrow{  
            width: 80%;
        }
        
        @media(max-width: 375px){
            background-position:center;
            background-size: 300% 100%;
            background-position-x: -530px;
            
        }
    }
`