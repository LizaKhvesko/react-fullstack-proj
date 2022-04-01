import styled from 'styled-components';

export const AddBtn = styled.button`
    display: block;
    margin: 0 auto;
    width: 200px;
    height: 45px;
    font-size: inherit;
    font-family: inherit;
    background-color: #299B01;
    border-color: transparent;
    color: white;
    cursor: pointer;
    transition-property: color, background-color, border-color;
    transition-duration: .3s;
    &:hover {
       background-color: #fff;
       color: #299B01;
       border-color: #299B01; 
    }
`;
