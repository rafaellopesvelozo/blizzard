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
                margin-top: 15px;
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
            }
        }
    }

    .system-download{
        margin-top: 30px;

        button{
            background-color: #00AEFF;
            font-size: 16px;
            font-weight: 600;
            color: #FFFFFF;
            display: flex;
            align-items: center;
            padding: 14px 32px;
            gap: 15px;
            border-radius: 4px;
            cursor: pointer;
        }
    }
    
`

