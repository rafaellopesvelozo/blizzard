import styled from "styled-components";

export const ContentExclusiveGames = styled.section`
    display: flex;
    flex-direction: column;
    align-items:center;
    background: #000000;
    color: #FFFFFF;
 
    @media(max-width: 1920px){
        padding:0 18% 70px 18%;
    }

    @media (max-width: 1440px) {
        padding:0 8% 70px 8%;
    }

    @media(max-width: 768px){
        padding:0 5% 12% 5%;
    }

    .head-games{
        width: 100%;
        max-width: 1228.81px;
        display: flex;
        justify-content: space-between;
        padding: 50px 0;

        @media(max-width: 375px){
            align-items: flex-end;
        }

        .info-games{
            display: flex;
            align-items:center;
            gap: 135px;

            @media(max-width: 768px){
                gap: 80px;
            }
          
            .games {
                p{
                    color: #808080;
                    font-size: 15px;
                    font-family: 'Poppins';
                    font-weight: 600;
                    margin-bottom: 40px;              
                }

                @media(max-width: 768px){                    
                    display: none;
                    
                }
            }

            .exclusive-title {
                p{
                    color: #FFFFFF;
                    font-size: 32px;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 700;
                }
                
               @media(max-width: 375px){
                    p{
                        font-size: 28px;  
                    }
                }
            }

            .icons{
                display: flex;
                gap: 20px;

                @media(max-width: 375px){
                    display: none;
                }
            }
        }

        .all-games{
            display: flex;
            align-items: center;
            gap: 15px;

            .iconAllGames{
                img{
                    width: 10px;
                    height: 10px;
                }
            } 

            p{
                color:  #00AEFF;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
            }
                
            @media(max-width: 375px){
                padding-bottom: 10px ;
                gap: 10px;        
                p{
                    font-size: 14px;    
                }
            }

        } 

    }


    .exclusive-cards{
        width: 100%;
        max-width: 1228.81px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;

               
        @media(max-width: 1920px){
            display: flex;
            gap: 20px;
        }
      
        @media(max-width: 768px){
            justify-content: flex-start;
            gap: 20px;
        }

        .cards{
            margin-bottom: 10px;
            flex-grow: 1;

            @media(max-width: 1920px){
                width: 292px;
            }

            @media(max-width: 1440px){
                width: 280px;
               
            } 
            
            @media(max-width: 768px){
                width: 217px;  
            }

            @media(max-width: 375px){
                width: 158px;
                height: 197px;
            }
               
            .card-image{
                position: relative;
                display: flex;
                align-items: flex-end;
                justify-content: center;
                overflow: hidden;
                border-radius: 3px;

                &:hover {  
                    .image{
                        transform: scale(1.2); 
                    }  
                                             
                } 

                .image{
                    width: 100%;
                    height: 330px;
                    transition: all .5s ease-in-out;
        
                    @media(max-width: 375px){
                        height: 100%;
                    }
                   
                }
                
                .logo {
                    position: absolute;
                    width: 148px;
                    height: 98px;
                    margin-bottom: 25px; 
                }

            }

            .name{
                font-size: 18px;
                font-weight: 600;
                font-family: 'Poppins';
                margin: 20px 0 0 0;
                color: #E5E5E5;

                @media(max-width: 375px){
                    display: none;
                }

            }

            .name-category{
                font-size: 14px;
                font-weight: 400;
                font-family: 'Poppins';
                color:#E5E5E5;
                opacity: 0.8;

                @media(max-width: 375px){
                    display: none;
                }

            }
            

        }

        .card-view-all-games{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid #212428;
            border-radius: 3px;
            height: 330px;

        

            @media(min-width: 1440px){
                width: 273px;  
            }  

            @media(max-width: 768px){
                width: 217px;      
            }

            @media(max-width: 375px){
                 width: 158px;
                 height: 217px;
            }

            .img-card-view-all-games{
                margin-bottom: 20px;
                img{
                    width: 86px;
                }
            }

            .card-view-all-games-grid{
                display: flex;
                align-items: center;
                gap: 10px;
                
                img{
                    width: 10px;
                    height: 10px;
                    

                    filter: brightness(0) 
                    saturate(100%) 
                    invert(88%) 
                    sepia(77%) 
                    saturate(6552%) 
                    hue-rotate(182deg) 
                    brightness(118%) 
                    contrast(111%);

                }

                p{
                    color: #f7f7f7;
                    font-size: 16px;
                    font-weight: 600;
                    font-family: 'Poppins';
                    cursor: pointer;          
                }

                @media(max-width: 375px){
                    img{
                        display: none;
                    }
                    
                    p{
                        font-size: 14px;
                    } 
                        
                }

            }

        }

    }

`