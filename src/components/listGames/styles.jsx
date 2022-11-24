import styled from 'styled-components'

export const contentGames = styled.div`
    background: rgb(2,2,3);
    background: linear-gradient(0deg, rgba(2,2,3,1) 0%, rgba(14,17,23,1) 90%, rgba(14,17,23,1) 100%);
    transition: all 2s;

    ul{
        padding: 10% 5%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 50px;
      
    }
    div{
        
        p{
            color: ${({ theme }) => theme.colors.white}
        }
    }
`
export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;  
    text-align: center;
    padding: 40px 20px;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        background-color:  ${({ theme }) => theme.colors.black};
        //transform: scale(1.05);
    }
   
    &:hover{
        img{
            transform: scale(1.05);
        }
    }
    p{
        color: #9D9D9D;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        transform: none;
    }
    
`

export const menuContent = styled.div`
    padding: 20px 0;
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 25px;
    background: #15171B;
    opacity: 0.7;
    div{
        display: flex;
        align-items: center;
        gap: 10px;
       
        img{
            height: 15px;
        }

        p{
            color: ${({ theme }) => theme.colors.white};
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            cursor: pointer;
        }
    }  
`
