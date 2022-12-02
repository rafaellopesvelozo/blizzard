import styled from 'styled-components'

export const contentGames = styled.div`
    position: absolute;
    z-index: 998;
    padding-top: 1.5%;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(0deg, rgba(2, 2 , 3, 0.99) 0%, rgba(14, 17, 23, 0.99) 90%, rgba(14, 17, 23, 0.9) 100%);
  
    ul{
        padding: 6% 5% 4% 9%;
        display: flex;
        height: 630px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    @media(max-width: 1920px){
        ul{
            padding: 6% 12% 1% 12%;
            height: 54 0px;
        }
    }
`
export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 150px;
    height: 150px;
    text-align: center;
    padding: 20px 25px;
    border-radius: 10px;
    cursor: pointer;

    @media(max-width: 1920px){
        padding: 25px 20px; 
        width: 190px; 
    }

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
        width: 90px;
        height:75px;
        
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

        @media(min-width: 1920px){
          font-size: 20px;
        }
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
