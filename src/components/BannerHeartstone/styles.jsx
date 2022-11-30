import styled from "styled-components";
import BgHeartstone from '../../assets/banners/heartstone-bg.png'

export const ContainerBanner = styled.div`

    .banner-content{
        position: relative;
        display: flex;
        justify-content: space-between;
        background-image: url(${BgHeartstone});        
        background-position:top right;
        background-repeat: no-repeat;
        background-size: cover;
        height: 670px;

      
    
        #current-arrow{
            width: 67%;    
        }

        @media(max-width: 768px){
            background-position-x: -350px;
            
            .info-banner{
                .banner-title{
                    .title{
                       h1{
                        width: 370px;
                        font-size: 43px;
                       }
                    }
                }
            }    
        }

        @media(max-width: 375px){
            background-position:center;
            background-size: 200% 100%;
            background-position-x: -210px;
            
        }
    }
   
`