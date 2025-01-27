import { navigation } from "utils/Constants/Constants";
import classes from "./OpenMenu.module.scss";
import { Typography } from "ui/index";
import { NavLink } from "react-router-dom";
import { CloseIcon } from "assets/icons";

export const OpenMenu = ({ isClose, setIsClose, menuRef }) => {
  return (
    <div className={`${classes.backdrop} ${isClose && classes.menuClose}`}>
      <div className={classes.nav} ref={menuRef}>
        <div className={classes.navTop}>
          <div
            className={classes.navTop_close}
            onClick={() => setIsClose(true)}
          >
            <CloseIcon />
          </div>
        </div>
        <div className={classes.navBottom}>
          <ul className={classes.navList}>
            {navigation.map((nav, key) => (
              <li key={key}>
                <NavLink
                  to={nav.path}
                  className={({ isActive }) =>
                    isActive ? classes.activeLink : ""
                  }
                >
                  <Typography className={classes.navList_text} variant="body">
                    {nav.nav}
                  </Typography>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
