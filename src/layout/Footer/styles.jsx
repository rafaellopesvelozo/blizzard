import styled from 'styled-components'
import BgFooter from '../../assets/ilustrations/background-footer.png'


export const ContanerFooter = styled.div`
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
    .available{

        p{
            font-size: 14px;
            color:#E5E5E5;
            font-weight: 600;
            font-family: 'Poppins';
            margin-top: 15px;
            line-height: 21px;
        }
    }
    
`

