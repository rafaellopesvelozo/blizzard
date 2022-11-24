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
  background: grey;
  padding: 20px 5%;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 5%;
    background-color: ${({ theme }) => theme.colors.blue};
    width: 43px;
    height: 3px;
  }
`;

export const ContainerNav = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 70px;
  align-items: center;
  img {
    background-color: red;
  }
  div {
    display: flex;
    align-items: center;
  }
`;

export const Links = styled.div`
  ul {
    display: flex;
    gap: 20px;
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
    border: none;
    outline: none;
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.white};
    font-family: Poppins;
    font-weight: 500;
    cursor: pointer;
  }
`;

export const Enter = styled.div`
  button {
    padding: 10px 25px;
    background-color: ${({ theme }) => theme.colors.blue};
    border: none;
    outline: none;
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.white};
    font-family: Poppins;
    font-weight: 500;
    cursor: pointer;
  }
`;
