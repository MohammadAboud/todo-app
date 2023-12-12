import styled from "styled-components";

export const StyledForm = styled.div`
  max-width: 36rem;
  z-index: 10;
  position: absolute;
  top: 18%;
  left: 0;
  right: 0;
  margin: 0 auto;

  input {
    width: 100%;
    border: none;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.VeryDarkDesaturatedBlue};
    color: ${({ theme }) => theme.colors.LightGrayishBlue};
    padding: 1.5rem 0;
    font-family: "Josefin Sans", sans-serif;
    font-size: 18px;
    font-weight: 400;
    margin-top: 16px;
    caret-color: hsl(220, 98%, 61%);
    box-sizing: border-box;
  }


  input::placeholder {
    font-weight: 500;
    font-size: 18px;
    padding-left: 4.5rem;
  }

  input:focus {
    border: none;
    outline: none;
    padding-left: 5rem;
  }

  input:focus::placeholder {
    padding-left: 0;
  }


 
  @media (max-width: 576px) {
    max-width: 22rem;
    input {
      padding: 1.2rem 1rem;
      font-size: 1rem;
    }

    input:focus {
    padding-left: 3.5rem;
  }

  input::placeholder {
    font-size: 1em;
    padding: 2.5rem;
  }
  }
  @media (max-width:400px){
    max-width: 20rem;
   }
`;
