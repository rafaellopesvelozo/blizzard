import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #020203 0%, rgba(14, 17, 23, 0.92) 100%);
    backdrop-filter: blur(6px);

    ul{
        padding: 13% 5% 10% 5%;
        display: flex;
        gap: 20px;
   }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;

        &:hover{
            p{
                color: ${({ theme }) => theme.colors.white};
            }  
            &:hover{
                img{
                    transform: scale(1.05);
                }
            }     
        }

        img{
            width: 190px;
            height: 150px;
            cursor: pointer;
        }

        p{
            color: #9D9D9D; 

        }
    }
`
