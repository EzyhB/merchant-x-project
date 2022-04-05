import styled from "styled-components";
import { lightTheme } from "../Theme";

interface Props {
  maxWidth?: keyof typeof lightTheme.breakPoints;
}

const Container = styled.div<Props>`
  max-width: ${({ maxWidth, theme }) =>
    maxWidth ? theme.breakPoints[maxWidth] : theme.breakPoints.lg};
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export { Container };
