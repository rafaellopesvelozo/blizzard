import styled from "styled-components";

export const ContentExclusiveGames = styled.div`
    display: flex;
    flex-direction: column;
    background: #000000;
    color: white;
    padding:0 7.8% 70px 7.8%;

    .head-games{
        display: flex;
        justify-content: space-between;
        align-items:center;
        padding: 50px 0;
        .info-games{
            display: flex;
            align-items:center;
            gap: 165px;
         

            .games {
                

                p{
                    color: grey;
                    font-size: 15px;
                    font-family: 'Poppins';
                    font-weight: 600;
                    margin-bottom: 40px;
                
                }
            }

            .exclusive-title p{
                color: #FFFFFF;
                font-size: 32px;
                font-family: 'Poppins', sans-serif;
                font-weight: 700;
            }

            .icons{
                display: flex;
                gap: 20px;
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
            }
        }  
    }

    .exclusive-cards{
      
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

     

        .cards{
            width: 258px;
            height: 405px;
            margin-bottom: 20px;

            .card-image{
                position: relative;
                display: flex;
                align-items: flex-end;
                justify-content: center;
                overflow: hidden;
                border-radius: 3px;

                .image{
                    width: 100%;
                    height: 330px;
                 
                    transition: all .5s ease-in-out;  
                    &:hover {    
                        transform: scale(1.2);                       
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
            }
            .name-category{
                font-size: 14px;
                font-weight: 400;
                font-family: 'Poppins';
                color:#E5E5E5;
                opacity: 0.8;
            
            }
        }
    }

    .card-view-all-games{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid white;
        width: 258px;
        height: 330px;

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
        }
    }
`