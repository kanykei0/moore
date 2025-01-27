import { ArrowIcon, MinusIcon, PlusIcon } from "assets/icons";
import { Typography } from "..";
import classes from "./RecomendationCard.module.scss";
import { useState } from "react";

export const RecomendationCard = ({ image, title, weight, price }) => {
  const [quantity, setQuantity] = useState(1);

  const Minus = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  const Plus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={classes.block}>
      <div className={classes.image}>
        <img src={image} alt={title} />
      </div>
      <div className={classes.info}>
        <Typography
          weight="semiBold"
          font="nunito"
          variant="rec"
          className={classes.title}
        >
          {title}
        </Typography>
        <Typography
          color="gray"
          variant="extraSmallBody"
          font="nunito"
          className={classes.weight}
        >
          Вес: {weight} кг
        </Typography>
        <div className={classes.priceBlock}>
          <Typography weight="bold" font="nunito" variant="h5">
            {price} <span className={classes.span}>c</span>
          </Typography>
          <div className={classes.quantity}>
            <div className={classes.icon} onClick={Minus}>
              <MinusIcon />
            </div>
            <Typography>{quantity}</Typography>
            <div className={classes.icon} onClick={Plus}>
              <PlusIcon />
            </div>
          </div>
        </div>
        <button className={classes.btn}>
          <Typography font="mons" variant="smallBody">
            В корзину
          </Typography>
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
