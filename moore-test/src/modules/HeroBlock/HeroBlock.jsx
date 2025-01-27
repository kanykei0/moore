import { Container, Typography } from "ui/index";
import classes from "./HeroBlock.module.scss";
import { ArrowIcon } from "assets/icons";

export const HeroBlock = () => {
  return (
    <div className={classes.block}>
      <Container>
        <div className={classes.inner}>
          <Typography
            color="white"
            variant="h1"
            font="mons"
            weight="bold"
            className={classes.title}
          >
            Ваш путеводитель в области сырья
          </Typography>
          <div className={classes.bottom}>
            <form className={classes.search}>
              <input type="text" placeholder="Найти..." />
            </form>
            <div className={classes.call}>
              <Typography font="mons">Заказать звонок</Typography>
              <div className={classes.arrow}>
                <div className={classes.icon}>
                  <ArrowIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
