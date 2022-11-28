import styled from 'styled-components'
import BgFooter from '../../assets/ilustrations/background-footer.png'


export const ContanerFooter = styled.div`
    position: relative;
    background-image: url('${BgFooter}');
    padding:0 0 0 7.8%;
    height: 800px;
    display:flex;
    overflow: hidden;
    justify-content: space-between;

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

    .info-content{
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
        position: absolute;
        z-index: 1;
        top:  calc(50% - 253px );    ;

        .download{

            .info-download{
                font-size: 32px;
                color: #FFFFFF;
                font-weight: 700;
                font-family: 'Poppins';
                margin-top: 20px;
            }
        }
    }

    .content-icons{
        .info-footer{
            font-size: 18px;
            color:#828792;
            font-weight: 400;
            font-family: 'Poppins';
   
        }
        .icon-your-games, .icon-log-in, .icon-buy-games{
            position: relative;
            display: flex;
            gap: 10px;
            align-items: center;
            margin-top: 15px;

            img{
                width: 17px;
                height: 17px;
            }
        }

        .icon-your-games{
            &::after{
                content: "";
                position: absolute;
                top: 3px;
                left: 3.5px;
                width: 10px;
                height: 1px;
                background-color: #00AEFF;
                opacity: 0.5;
               
            }
            &::before{
                content: "";
                position: absolute;
                top: 1.5px;
                left: 5px;
                width: 7px;
                height: 1px;
                background-color: #00AEFF;
                opacity: 0.3;
            }
        }

    }

    .avaliable{
        display: flex;
        align-items: center;
        margin-top: 25px;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 600;
        gap: 10px;

        p{
            font-size: 14px;
            color:#E5E5E5;
            font-weight: 600;
            font-family: 'Poppins';
            margin-top: 15px;
            line-height: 21px;
            cursor: pointer;
        }

        img{
            margin-top: 15px;
            width: 20px;
            height: 20px;
        }
        span{
            text-decoration: underline;
        }
    }

    .mini{
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        img{
            :nth-child(1){
                position: absolute;
                left: 311px;
            }
        }

        img{
            :nth-child(2){
                position: absolute;
                bottom: -35px;
                left: 665px;
                z-index: 2;
            }
        }
    }

    .system-download{
        margin-top: 30px;

        button{
            background-color: #00AEFF;
            padding: 14px 32px;
            border-radius: 4px;
            cursor: pointer;
            transition: all 2s ease-out;
            
            &:hover{
             background-color: #0089c9; 
           
            }

            .info-button{
                .download-for{
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    font-size: 16px;
                    font-weight: 600;
                    color: #FFFFFF;
                }
            }
        }
    }
    
`

