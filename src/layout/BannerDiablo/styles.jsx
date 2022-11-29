import styled from "styled-components";
import bgDiablo from '../../assets/banners/diablo-bg.png'

export const LogoGames = styled.div`

    .banner-logo{ 
        display:flex;
        flex-direction: column;
        position: absolute;
        top: 32.2%;
        left: 7.8%;
        gap: 17px;
        z-index: 105;
        width: 45px;

        img{
            width: 45px;
            height: 45px;
            cursor: pointer; 
        }  
        
        @media(min-width: 1920px){
            left: 18%;
        }

        @media (max-width: 768px) {
            display:flex;
            flex-direction: row;
            position: absolute;
            top: 90%;
            left: 5%;
            gap: 17px;
    
            .logo-disabled{
                display:flex;
                flex-direction: row;
            }   
        }
    
        
    }

    .logo-disabled{
        display:flex;
        flex-direction: column;
        gap: 17px;
        mix-blend-mode: luminosity;
    }  
`

export const ContainerBanner = styled.div`
    .transition{
        visibility: hidden;
        opacity: -10;
    }
   
    .banner-content{
        position: relative;
        display: flex;
        justify-content: space-between;
        background-image: url('${bgDiablo}');
        background-position: top center;
        background-size:cover;
        background-position-x:-12px;
        background-position-y:-30px;
        background-repeat: no-repeat;
        background-size: 117%;
        height: 670px;
        filter: saturate(110%);

        @media (max-width: 768px) {
            height: 670px;
            background-position: top;
            background-size: 185%;
            background-position-x: -150px;
        }
        
        &:after {
            content: "";
            background: radial-gradient(72.28% 72.28% at 52.36% 25.95%, rgba(2, 2, 3, 0) 0%, #020203 71.1%);
            opacity: 0.5;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        } 

        #current-arrow{
            position: absolute;
            height: 10px;
            bottom: 0px;
            background-color: #00aeff;
            width: 35%;
            height: 1.5px;
            z-index: 1;
        }  
        
    }
   
    .info-banner{
        position: absolute;
        z-index: 96;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        display: flex;
        padding: 0 7.8% 0 22.4%; 

        .play-now{
            .icon{
                margin-right: -30px; 
            }
        } 
        
        
        @media(min-width: 1920px){
            padding: 0 18% 0 28%; 
        }

        @media(max-width: 768px){
            padding: 0 5% 0 5%; 
            display: flex;
            align-items: flex-start;
            padding-top: 130px;
        }
   
    }

    .title p{
        font-size: 18px;
        font-family: 'Poppins';
        color: #FFFFFF;
        letter-spacing: -0.005rem;
        font-weight: 400;
    }

    .title h1{
        font-size: 64px;
        font-family: 'Poppins';
        color: #FFFFFF;
        font-weight: 700;
        width: 562px;
        line-height: 75px;
        padding-bottom: 15px;
    }

    .banner-btn button {
        padding: 14px 32px;
        color: #FFFFFF;
        font-weight: 600;
        font-size: 16px;
        background-color:#00aeff;
        border: none;
        outline: none;
        border-radius: 4px;
        margin-top: 20px;
        cursor: pointer;

        img{
            margin-right: 10px;
        }

        &:hover{
            background-color: #0089c9; 
            transition: all 2s ease-out; 
        }
    }


    .play-now{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content:space-between;
        height: 68%;
        margin-top: 65px;

        @media(max-width: 768px){
            height: 80%;
            margin-top: -50px;
            position: absolute;
            right: 5%;
        }
     
        .play{

            .title-play{
                color: #FFFFFF;
                text-align: right;
                font-size: 13px;
                font-weight: 600;
                padding-bottom: 10px;
                font-family: 'Poppins';

                @media (max-width: 768px){
                    display: none;
                }
            }

            .play-gif{
                position: relative; 

                img{
                    width: 280px;
                    height:158px;
                    border-radius: 6px;
                } 

                &:hover{
                    .button-play{
                        background-color:  #009ae255;
                        transform: transition all 1s ease-in-out;
                    }

                    .icon-play-polygon{           
                        filter: brightness(0) saturate(100%) invert(0%) sepia(100%) saturate(7500%) hue-rotate(13deg) brightness(92%) contrast(107%);
                        transform: transition all 1s ease-in-out;
                    }

                    .icon-play-ellipse{
                        filter: brightness(0) 
                        saturate(100%) 
                        invert(44%) 
                        sepia(90%) 
                        saturate(2136%) 
                        hue-rotate(170deg) 
                        brightness(94%) 
                        contrast(101%);
                        transform: transition all 1s ease-in-out;
                    }
                }

                .button-play{
                    position: relative;
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 60px;
                    width: 60px;
                    left: 100px;
                    border-radius: 50%;
                    top: calc(50% - 25.5px);
                    z-index: 2;
                    background-color: transparent;
                    
                    .icon-play-polygon{
                        position: absolute;
                        z-index: 4;
                        left: 24px;
                        top: 22px;
                        width: 15px;
                        height: 15px;       
                    }

                    .icon-play-ellipse{
                        width: 51px;
                        height: 51px;
                        opacity: 0.9;               
                    }
                }
            }
        

            .img-preview{
                position: absolute;
                top: 0;
                transition: all 1s;

                img{
                    width: 100%;
                }

                &:hover{
                    opacity: 0;
                }      
            }
        }
    }

`