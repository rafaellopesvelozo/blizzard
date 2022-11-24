import styled from 'styled-components'

export const contentGames = styled.div`
  position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(0deg, rgba(2, 2 , 3, 0.99) 0%, rgba(14, 17, 23, 0.99) 90%, rgba(14, 17, 23, 0.9) 100%);
  
    ul{
        padding: 10% 9%;
        display: flex;
        justify-content: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
      
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
    align-items: center;
    gap: 10px;
    width: 150px;
    text-align: center;
    padding: 35px 30px;
    border-radius: 10px;
    cursor: pointer;

    img{
        width: 95px;
        height:65px;
    }

    p{
        color: #9D9D9D;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        transform: none;
        font-weight: 500;
    }

    &:hover{
        background-color:  ${({ theme }) => theme.colors.black};
        //transform: scale(1.05);
    }
   
    &:hover{
        img{
            transform: scale(1.2);
        }
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
