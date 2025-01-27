import { CartIcon, LogoIcon, PersonIcon } from "assets/icons";
import classes from "./Header.module.scss";
import { navigation } from "utils/Constants/Constants";
import { NavLink } from "react-router-dom";
import { Container, Typography } from "ui/index";
import { useEffect, useState } from "react";
import Burger from "./components/BurgerMenu/BurgerMenu";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: 850px)`);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className={classes.header}>
      <Container>
        <div className={classes.block}>
          <div className={classes.block_logo}>
            <LogoIcon />
          </div>
          {!isMobile && (
            <div className={classes.block_nav}>
              <ul>
                {navigation.map((nav, key) => (
                  <li key={key}>
                    <NavLink
                      to={nav.path}
                      className={({ isActive }) =>
                        isActive ? classes.activeLink : ""
                      }
                    >
                      <Typography>{nav.nav}</Typography>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className={classes.block_account}>
            <div className={classes.icon}>
              <div className={classes.cart}>
                <CartIcon />
              </div>
            </div>
            <div className={classes.icon}>
              <div className={classes.person}>
                <PersonIcon />
              </div>
            </div>
            {isMobile && (
              <div>
                <Burger />
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
