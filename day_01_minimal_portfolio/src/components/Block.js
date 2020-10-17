import styled from "styled-components";

export const Block = styled.div`
  position: ${(props) =>
    props.relative
      ? "relative"
      : props.absolute
      ? "absolute"
      : props.fixed
      ? "fixed"
      : props.position};

  left: ${(props) => (props.left ? "0" : props.left)};
  right: ${(props) => (props.right ? "0" : props.right)};
  top: ${(props) => (props.top ? "0" : props.top)};
  bottom: ${(props) => (props.bottom ? "0" : props.bottom)};

  height: ${(props) => props.height && props.height};
  min-height: ${(props) => props.minHeight && props.minHeight};
  max-height: ${(props) => props.maxHeight && props.maxHeight};
  width: ${(props) => props.width && props.width};
  min-width: ${(props) => props.minWidth && props.minWidth};
  max-width: ${(props) => props.maxWidth && props.maxWidth};

  background-color: ${(props) =>
    props.primary
      ? "var(--primary)"
      : props.secondary
      ? "var(--secondary)"
      : props.color
      ? props.color
      : "white"};

  display: ${(props) => (props.flex ? "flex" : props.display)};
  justify-content: ${(props) =>
    props.between
      ? "space-between"
      : props.around
      ? "space-around"
      : props.evenly
      ? "space-evenly"
      : props.middle
      ? "center"
      : props.justify};
  align-items: ${(props) => (props.center ? "center" : props.align)};
  flex-direction: ${(props) =>
    props.row ? "row" : props.column ? "column" : props.direction};

  padding: ${(props) => props.padding && props.padding};
  margin: ${(props) => props.margin && props.margin};
  overflow: ${(props) => props.overflow && props.overflow};

  /* display: ${(props) => props.flex && "flex"};
  flex-direction: ${(props) =>
    props.row ? "row" : props.column ? "column" : props.direction};
  align-items: ${(props) =>
    props.center
      ? "center"
      : props.end
      ? "flex-end"
      : props.flexTop
      ? "flex-top"
      : props.align};
  justify-content: ${(props) => (props.middle ? "center" : props.justify)};
  background-color: ${(props) =>
    props.primary
      ? "var(--primary)"
      : props.secondary
      ? "var(--secondary)"
      : props.color};
  padding: ${(props) => {
    if (props.padding) {
      const paddings = props.padding.split(" ").map((number) => `${number}em`);
      return paddings.join(" ");
    }
  }};
  margin: ${(props) => {
    if (props.margin) {
      const margins = props.margin.split(" ").map((number) => `${number}em`);
      return margins.join(" ");
    }
  }};
  height: ${(props) =>
    props.height ? `${props.height}%` : `${props.heightVH}vh`};
  width: ${(props) => props.width && `${props.width}%`};
  position: ${(props) =>
    props.absolute
      ? "absolute"
      : props.relative
      ? "relative"
      : props.fixed
      ? "fixed"
      : null};
  left: ${(props) => props.left && props.left};
  right: ${(props) => props.right && props.right};
  top: ${(props) => props.top && props.top};
  bottom: ${(props) => props.bottom && props.bottom}; */
`;
