import styled from 'styled-components'

export const contentGames = styled.div`
    position: absolute;
    z-index: 998;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(0deg, rgba(2, 2 , 3, 0.99) 0%, rgba(14, 17, 23, 0.99) 90%, rgba(14, 17, 23, 0.9) 100%);
  
    ul{
        padding: 9% 5% 4% 9%;
        display: flex;
        height: 580px;
        flex-wrap: wrap;
        justify-content: center;
        gap: 21px;
    }

    @media(max-width: 1920px){
        ul{
            padding: 7% 15% 2% 15%;
            height: 540px;
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


    &:hover{
        background-color:  #000000;
        
        p{
            color: #FFFFFF;
        }
        
        img{
            transform: scale(1.2);
        }
    }

    img{
        width: 95px;
        height:65px;
        
        &:hover{
            transform: scale(1.2); 
        }
    }

    p{
        color: #9D9D9D;
        font-family: 'Poppins';
        font-size: 14px;
        transform: none;
        font-weight: 500;
    }
 
`

export const menuContent = styled.div`
    padding: 20px 0;
    color: #FFFFFF;
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 25px;
    background: #15171B;

    div{
        display: flex;
        align-items: center;
        gap: 10px;
       
        img{
            height: 15px;
        }

        p{
            color: #FFFFFF;
            font-family: 'Poppins';
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
        }
    }  
`
