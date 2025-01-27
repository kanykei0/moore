import { ArrowIcon } from "assets/icons";
import { Typography } from "..";
import classes from "./ProductCard.module.scss";

export const ProductCard = ({ image, title }) => {
  return (
    <div className={classes.block}>
      <img src={image} alt={title} />
      <div className={classes.title}>
        <Typography color="white" weight="bold" variant="h5" font="mons">
          {title}
        </Typography>
        <button className={classes.btn}>
          <Typography font="open">Подробнее</Typography>
          <div className={classes.arrow}>
            <div className={classes.icon}>
              <ArrowIcon />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
