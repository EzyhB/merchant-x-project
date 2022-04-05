import styled from "styled-components";
import { lightTheme } from "../Theme";

interface Props {
  variant?: keyof typeof lightTheme.Typography;
}

const Typography = styled.p<Props>`
  font-family: "Epilogue", sans-serif;
  color: ${(props) => props.theme.pallette.text};
  font-weight: ${({ variant, theme }) =>
    variant ? theme.Typography[variant].weight : theme.Typography.body1.weight};
  font-size: ${({ variant, theme }) =>
    variant ? theme.Typography[variant].size : theme.Typography.body1.size};
  line-height: ${({ variant, theme }) =>
    variant
      ? theme.Typography[variant].lineHeight
      : theme.Typography.body1.lineHeight};
  letter-spacing: ${({ variant, theme }) =>
    variant
      ? theme.Typography[variant].letterSpacing
      : theme.Typography.body1.letterSpacing};
`;

export { Typography };
