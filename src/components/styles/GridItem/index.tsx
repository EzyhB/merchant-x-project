import styled from "styled-components";

enum gridSize {
  "one" = "8.33333333333%",
  "two" = "16.6666666667%",
  "three" = "25%",
  "four" = "33.3333333333%",
  "five" = "41.6666666667%",
  "six" = "50%",
  "seven" = "58.3333333333%",
  "eight" = "66.6666666667%",
  "nine" = "75%",
  "ten" = "83.3333333333%",
  "eleven" = "91.6666666667%",
  "twelve" = "100%",
}

interface Props {
  xs?: keyof typeof gridSize;
  sm?: keyof typeof gridSize;
  md?: keyof typeof gridSize;
  lg?: keyof typeof gridSize;
  xl?: keyof typeof gridSize;
}

const GridItem = styled.div<Props>`
  box-sizing: box-border;
  flex-grow: 0;
  flex-basis: 100%;
  max-width: 100%;

  @media (min-width: ${({ xs, theme }) =>
      xs ? theme.breakPoints.xs : theme.breakPoints.none}) {
    flex-basis: ${({ xs }) => (xs ? gridSize[xs] : gridSize.twelve)};
    max-width: ${({ xs }) => (xs ? gridSize[xs] : gridSize.twelve)};
  }

  @media (min-width: ${({ sm, theme }) =>
      sm ? theme.breakPoints.sm : theme.breakPoints.none}) {
    flex-basis: ${({ sm }) => (sm ? gridSize[sm] : gridSize.twelve)};
    max-width: ${({ sm }) => (sm ? gridSize[sm] : gridSize.twelve)};
  }

  @media (min-width: ${({ md, theme }) =>
      md ? theme.breakPoints.md : theme.breakPoints.none}) {
    flex-basis: ${({ md }) => (md ? gridSize[md] : gridSize.twelve)};
    max-width: ${({ md }) => (md ? gridSize[md] : gridSize.twelve)};
  }

  @media (min-width: ${({ lg, theme }) =>
      lg ? theme.breakPoints.lg : theme.breakPoints.none}) {
    flex-basis: ${({ lg }) => (lg ? gridSize[lg] : gridSize.twelve)};
    max-width: ${({ lg }) => (lg ? gridSize[lg] : gridSize.twelve)};
  }

  @media (min-width: ${({ xl, theme }) =>
      xl ? theme.breakPoints.xl : theme.breakPoints.none}) {
    flex-basis: ${({ xl }) => (xl ? gridSize[xl] : gridSize.twelve)};
    max-width: ${({ xl }) => (xl ? gridSize[xl] : gridSize.twelve)};
  } ;
`;

// const GridItem = styled.div<Props>`
//   flex-grow: 0;
//   box-sizing: box-border;
//   flex-direction: row;
//   @media (min-width: ${({ theme }) => theme.breakPoints.xs}) {
//     flex-basis: ${({ xs }) => (xs ? gridSize[xs] : gridSize.twelve)};
//     max-width: ${({ xs }) => (xs ? gridSize[xs] : gridSize.twelve)};
//   }

//   @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
//     flex-basis: ${({ sm }) => (sm ? gridSize[sm] : gridSize.twelve)};
//     max-width: ${({ sm }) => (sm ? gridSize[sm] : gridSize.twelve)};
//   }

//   @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
//     flex-basis: ${({ md }) => (md ? gridSize[md] : gridSize.twelve)};
//     max-width: ${({ md }) => (md ? gridSize[md] : gridSize.twelve)};
//   }

//   @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
//     flex-basis: ${({ lg }) => (lg ? gridSize[lg] : gridSize.twelve)};
//     max-width: ${({ lg }) => (lg ? gridSize[lg] : gridSize.twelve)};
//   }

//   @media (min-width: ${({ theme }) => theme.breakPoints.xl}) {
//     flex-basis: ${({ xl }) => (xl ? gridSize[xl] : gridSize.twelve)};
//     max-width: ${({ xl }) => (xl ? gridSize[xl] : gridSize.twelve)};
//   } ;
// `;

export { GridItem };
