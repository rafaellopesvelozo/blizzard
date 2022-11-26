import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    z-index: 998;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(180deg,rgba(14, 17, 23, 0.99)  0%, rgba(2, 2, 3, 0.99) 100%);

    ul{
        padding: 12% 9%;
        display: flex;
        justify-content: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
   }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        width: 174px;
        text-align: center;

        &:hover{
            p{
                color: ${({ theme }) => theme.colors.white};
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
            font-family: 'Poppins', sans-serif;
        }
    }
    
    .tournament{
        margin: 0 auto;
        color: white;
        padding: 20px 0;
        width: 100%;
        gap: 25px;
        background: #15171B;
  
    }
`
