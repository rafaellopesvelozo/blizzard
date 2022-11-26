import styled from "styled-components";

export const ContentExclusiveGames = styled.div`
    display: flex;
    flex-direction: column;
    background: #000000;
    color: white;
    padding:50px 7.8%;

  .head-games{
    display: flex;
    justify-content: space-between;
    align-items:center;

        .info-games{
            display: flex;
            align-items:center;
            gap: 150px;

            .games {
                text-align: start;
                p{
                color: grey;
                font-size: 15px;
                font-family: 'Poppins', sans-serif;
                font-weight: 600;
                
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
                width: 13px;
                height: 10px;
                gap: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
        
                .ico-nall-games{
                    display: flex;
                
                    background-color: #00AEFF;
                    width: 4px;
                    height: 4px;
                
                }
            } 

            p{
                color:  #00AEFF;
                font-size: 16px;
                font-weight: 600;
            }
        }
    
  }
`