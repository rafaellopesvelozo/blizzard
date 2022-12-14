import styled from "styled-components";

export const Container = styled.nav`
    position: absolute;
    z-index: 998;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(180deg,rgba(14, 17, 23, 0.99)  0%, rgba(2, 2, 3, 0.99) 100%);

 
    ul{
        padding: 12% 9% 7.2% 9%;
        display: flex;
        justify-content: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;

       @media(max-width: 1920px){
            display: flex;
            justify-content: center;
            gap: 70px;
        }    
    }

    .section-games{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        width: 174px;
        text-align: center;

        &:hover{
            p{
                color: #FFFFFF;
            } 

            img{
                transform: scale(1.2);
            }
        }

        img{
            width: 120px;
            height: 105px;
            cursor: pointer;
        }

        p{
            font-size: 14px;
            font-weight: 500;
            color: #9D9D9D;
            width: 105px;
            font-family: 'Poppins';

            @media(max-width: 1920px){
             font-size: 20px;
             width: 190px;
            }
        }
    }
    
    .tournament-esports{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        padding: 20px 0;
        width: 100%;
        gap: 25px;
        background: #15171B;

        p{
            font-size: 16px;
            font-weight: 600;
            font-family: 'Poppins';
            cursor: pointer;
            
        }
        img{
            width: 15px;
            height: 15px;
        }
    }
   
`
