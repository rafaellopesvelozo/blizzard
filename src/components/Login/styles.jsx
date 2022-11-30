import styled from "styled-components";
import BgLogin from '../../assets/login/bgLogin.png'

export const ContainerLogin = styled.div`
    background-color: #00000095;
    position: fixed;
    z-index:999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    width: 100%;
    height: 100%;

    .content-form{
        box-shadow: -100px -100px 210px 100px #000 inset;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 20px 0;
        background-image: url('${BgLogin}') ;
        background-repeat: no-repeat;
        background-size: 100% 101%;
        background-size: 100%;

        @media (min-width: 1440px) {
            width:65%;
            height: 80%;
        }
        
        @media (min-width: 1920px) {
            width: 65%;
            height: 75%;
        }
        @media (max-width: 768px) {
            width: 75%;
            height: 85%;
        }
        
    }

    .logo-battle{
        margin-bottom: 30px;
        img{
            width: 166px;
        }
    }

    .btn-close-modal{
       width: 100%;
       display: flex;
       justify-content: flex-end;

        button{
            color:  #00AEFF;
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            padding-right: 5%;
            font-size: 25px;
            font-weight: 600;

          
        } 

        @media (min-width: 1920px) {
            button{

                font-size: 35px;
            }
        }
    }

    .form{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
        form{
            display: flex;
            flex-direction: column;

            input{
                padding-left: 15px;
                color:  #363842;
                font-weight: 500;
                font-family: 'Poppins';
                border-radius: 4px;
            }

            input, .btn-connect-login button{
                width: 426px;
                height: 48px;
                border: none;
                outline: none;  
            }
            input[type="text"] {
                margin-bottom: 15px;
            }

            .btn-connect-login{
                margin-top: 25px;
          

                button{
                    cursor: pointer;
                    color: #FFFFFF;
                    font-weight: 600;
                    background-color:  #00AEFF;
                    border-radius: 4px;

                    &:hover{
                        background-color: #0089c9; 
                        transition: all 2s ease-out; 
                    }
                }  
            }

            @media (min-width: 1920px) {

                input, .btn-connect-login button{
                    width: 550px;
                    height: 70px;
                }

            }
        }

        .connect-with{
            p{
                color: #FFFFFF;
                font-weight: 500;
                font-size: 14px;
                margin-top: 30px;
                font-family: 'Poppins';
            }

            @media (min-width: 1920px) {
                p{
                    font-size: 20px; 
                }
            }
            
        }

        .connect-icons-login{
            display: flex;
            gap: 10px;
            margin-top: 15px;
      
            .login-icons{
                a{
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 48px;
                    height: 48px;
                    border-radius: 4px;
                    background-color: #FFFFFF;
                }
        
                img{
                    width: 18px;
                    height: 22px;
                }

                @media (min-width: 1920px) {
                    a{
                        width: 70px;
                        height: 70px;
                    }

                }

            }
        }
        .create-account{
            margin-top: 40px;
            p{
                color: #FFFFFF;
                font-weight: 500;
                font-size: 16px;
                font-family: 'Poppins';

                span{
                    color: #00AEFF;
                    text-decoration: underline;
                    font-weight: 500;
                    cursor: pointer;
                }

                :nth-child(2){
                    color: #00AEFF;
                    text-decoration: underline;
                    margin-top: 15px;
                }
            }

            @media (min-width: 1920px) {
                p{
                    font-size: 20px; 
                }
            }
        }

    }
`