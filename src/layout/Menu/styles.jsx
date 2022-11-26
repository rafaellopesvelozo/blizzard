import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  
  hr {
    color: ${({ theme }) => theme.colors.white};
    opacity: 10%;
  }
`;

export const Header = styled.div`
  position: absolute;
  padding:0 7.8%;
  width: 100%;
  height: 86px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 7.8%;
    background-color: ${({ theme }) => theme.colors.blue};
    width: 40px;
    height: 1.5px;
  }
`;

export const ContainerNav = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 110px;
  align-items: center;
  
  div {
    display: flex;
    align-items: center;

    img{
      width: 80px;
      height: 35px;
    }
  }
`;

export const Links = styled.div`
  ul {
    display: flex;
    gap: 50px;
  }
  li {
    font-size: 14px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    font-family: Poppins;
    font-weight: 500;
    
    &:hover {
      color: ${({ theme }) => theme.colors.darkGreywhite};
     
    }
  }
 
`;

export const Login = styled.div`
  display: flex;
`;

export const crateAccount = styled.div`
  margin-right: 10px;

  button {
    padding: 10px 25px;
    background-color: transparent;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 3px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
    font-family: Poppins;
    font-weight: 500;
    cursor: pointer;
    

    &:hover{
      background-color: #FFFFFF;
      color: #000000;
      transition: all 2s ease-out;
    }
  }
`;

export const Enter = styled.div`
  img{
    margin-right: 6px;
  }
  button {
    display: flex;
    align-items: center;
    padding: 10px 25px;
    background-color: ${({ theme }) => theme.colors.blue};
    border: 1px solid transparent;
    outline: none;
    border-radius: 3px;
    color: ${({ theme }) => theme.colors.white};
    font-family: Poppins;
    font-weight: 500;
    cursor: pointer;
    font-size: 14px;
   

    &:hover{
      background-color: #009be2; 
      transition: all 2s ease-out; 
    }
  }
`;
