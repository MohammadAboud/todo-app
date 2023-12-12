import styled from "styled-components";

export const StyledFiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0 1rem ;
  height: 3.8rem;
  font-size: 1rem;

  a{
    text-decoration: none;
    margin-left: 14px;
    color:${ ({ theme }) => theme.colors.filters};

    &:hover{
       color: ${ ({theme}) => theme.colors.filtersHover };
    }
    
  }

  @media (max-width: 576px) {

    a{
    font-size: .8rem;
    
    }
  }
`