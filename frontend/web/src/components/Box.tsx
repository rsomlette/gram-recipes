import styled from "styled-components";
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps,
  flexbox,
  FlexboxProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
} from "styled-system";

type BoxProps = ColorProps &
  SpaceProps &
  LayoutProps &
  TypographyProps &
  FlexboxProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps;

export const Box = styled.div<BoxProps>`
  ${color}
  ${space}
  ${layout}
  ${typography}
  ${flexbox}
  ${background}
  ${border}
  ${position}
  ${shadow}
`;
