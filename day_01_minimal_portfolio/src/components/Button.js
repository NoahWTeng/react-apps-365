import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.color && props.color};
  padding: ${(props) => props.padding && props.padding};
  margin: ${(props) => props.margin && props.margin};
  border: ${(props) => props.border && props.border};
  border-radius: ${(props) => props.radius && props.radius};
  &:hover {
    background-color: #0a0a0a;
    color: white;
  }
`;
