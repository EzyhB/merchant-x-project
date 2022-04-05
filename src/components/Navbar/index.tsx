import { Container } from "../styles/Container";
import { GridContainer } from "../styles/GridContainer";
import { GridItem } from "../styles/GridItem";

import css from "./Navbar.module.css";
// import darkLogo from "./images/darkLogo.png";
// import lightLogo from "./images/lightLogo.png";

interface Props {
  isLight: boolean;
  setIsLight: Function;
}

export default function Navbar({ isLight, setIsLight }: Props) {
  let themeSwitchBackground = isLight ? "#28293E" : "#ffffff";
  return (
    <Container maxWidth="none">
      <GridContainer>
        <GridItem md="four" xs="three">
          <img
            className={css.mdLogo}
            src={isLight ? "./images/lightLogo.png" : "./images/darkLogo.png"}
            alt="merchant x logo"
          />
        </GridItem>
        <GridItem className={css.xsLogoGrid} md="four" xs="six">
          <img
            className={css.xsLogo}
            src={isLight ? "./images/lightLogo.png" : "./images/darkLogo.png"}
            alt="merchant x logo"
          />
        </GridItem>
        <GridItem className={css.themeSwitchGrid} md="four" xs="three">
          <div
            style={{ background: themeSwitchBackground }}
            className={css.themeSwitchBackground}
            onClick={() => {
              setIsLight(!isLight);
            }}
          >
            <img
              className={css.themeSwitch}
              src={
                isLight
                  ? "./images/darkModeIcon.png"
                  : "./images/lightModeIcon.png"
              }
              alt="theme switch button"
            />
          </div>
        </GridItem>
      </GridContainer>
    </Container>
  );
}
