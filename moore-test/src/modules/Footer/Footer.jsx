import { Typography } from "ui/index";
import classes from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={classes.footer}>
      <Typography variant="smallBody" className={classes.text}>
        @FoodLand - {currentYear}
      </Typography>
    </div>
  );
};
