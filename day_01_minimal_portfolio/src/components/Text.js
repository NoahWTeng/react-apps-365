import styled from "styled-components";

export const Text = styled.p`
  font-size: ${(props) =>
    props.h1
      ? `var(--h1)`
      : props.h2
      ? `var(--h2)`
      : props.h3
      ? `var(--h3)`
      : props.title
      ? `var(--title)`
      : props.subtitle
      ? `var(--subtitle)`
      : props.caption
      ? `var(--caption)`
      : props.small
      ? `var(--small)`
      : props.size};
  color: ${(props) =>
    props.primary
      ? "var(--primary)"
      : props.secondary
      ? "var(--secondary)"
      : props.color};
  padding: ${(props) => props.padding && props.padding};
  margin: ${(props) => props.margin && props.margin};

  text-transform: ${(props) => props.transform && props.transform};
  font-weight: ${(props) => props.weight && `var(--${props.weight})`};
  letter-spacing: ${(props) => props.spacing && props.spacing};
  line-height: ${(props) => props.height && props.height};
`;
