import styled from "styled-components";
import bgDiablo from '../../assets/banners/diablo-bg.png'

export const C = styled.div`
  
  .x{
      //mix-blend-mode: normal;
      //mix-blend-mode: normal;
      //mix-blend-mode: inherit;
    }

    .g{
      //mix-blend-mode: normal;
      //mix-blend-mode: luminosity;
      //mix-blend-mode: inherit;
    }

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
    }
   
`

export const ContainerBanner = styled.div`

    .transition{
      visibility: hidden;
      opacity: 0;
    }
   
    .banner-content{
        position: relative;
        display: flex;
        justify-content: space-between;
        background-image: url('${bgDiablo}');
        background-position-y:-20px;
        background-repeat: no-repeat;
        background-position: inherit;
        background-size: 104%;
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
       
    }
   
 
    .info-banner{
        position: absolute;
        z-index: 99;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        display: flex;
        padding: 0 7.8% 0 22.4%; 
      

    }

    .title p{
        font-size: 18px;
        font-family: 'Poppins';
        color: ${({ theme }) => theme.colors.white};
        letter-spacing: -0.005rem;
        font-weight: 400;
    }
    .title h1{
        font-size: 64px;
        font-family: 'Poppins';
        color: ${({ theme }) => theme.colors.white};
        font-weight: 700;
        width: 562px;
        line-height: 75px;
        padding-bottom: 15px;
    }
    .banner-btn button {
        padding: 14px 32px;
        color: ${({ theme }) => theme.colors.white};
        font-weight: 600;
        font-size: 16px;
        background-color: ${({ theme }) => theme.colors.blue};
        border: none;
        outline: none;
        border-radius: 4px;
        margin-top: 20px;
        cursor: pointer;

        &:hover{
            background-color: #009be2; 
            transition: all 2s ease-out; 
        }
    }

    .play-now{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content:space-between;
        height: 70%;
        border-radius: 6px;
    }

    .title-play{
        color: #FFFFFF;
        text-align: right;
        font-size: 13px;
        font-weight: 600;
        padding-bottom: 10px;
        font-family: 'Poppins';
    }
    .play-gif{
        position: relative; 
        img{
            width: 280px;
            height:158px;
            border-radius: 6px;
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


`