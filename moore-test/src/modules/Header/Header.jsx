import { CartIcon, LogoIcon, PersonIcon } from "assets/icons";
import classes from "./Header.module.scss";
import { navigation } from "utils/Constants/Constants";
import { NavLink } from "react-router-dom";
import { Container, Typography } from "ui/index";
import Burger from "./components/BurgerMenu/BurgerMenu";
import { useMediaQuery } from "utils/Hooks/useMedia";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 850px)");

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
