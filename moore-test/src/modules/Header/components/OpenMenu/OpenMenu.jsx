import { navigation } from "utils/Constants/Constants";
import classes from "./OpenMenu.module.scss";
import { Typography } from "ui/index";
import { Link } from "react-router-dom";

export const OpenMenu = ({ isClose, setIsClose, menuRef }) => {
  return (
    <div className={`${classes.backdrop} ${isClose && classes.menuClose}`}>
      <div className={classes.nav} ref={menuRef}>
        <div className={classes.navTop}>
          <div
            className={classes.navTop_close}
            onClick={() => setIsClose(true)}
          >
            X
          </div>
        </div>
        <div className={classes.navBottom}>
          <ul className={classes.navList}>
            {navigation.map((nav, key) => (
              <li key={key}>
                <Link to={nav.path}>
                  <Typography className={classes.navList_text} variant="body">
                    {nav.text}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
