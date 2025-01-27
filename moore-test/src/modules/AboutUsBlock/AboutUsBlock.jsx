import { Container, Typography } from "ui/index";
import classes from "./AboutUsBlock.module.scss";
import { ArrowIcon } from "assets/icons";

export const AboutUsBlock = () => {
  return (
    <div className={classes.block}>
      <Container>
        <Typography font="mons" variant="h2" color="dark">
          Мы помогаем местным кондитерам и шеф-поварам претворять в жизнь свои
          самые смелые кулинарные задумки
        </Typography>
        <div className={classes.inner}>
          <div className={classes.right}>
            <Typography className={classes.text}>
              Мы предлагаем вам не просто сырье, а экспертность и индивидуальный
              подход: всегда готовы помочь найти альтернативу, закрыть срочную
              потребность или предложить уникальное решение.
            </Typography>
          </div>
          <div className={classes.left}>
            <button className={classes.btn}>
              <Typography>Читать далее</Typography>
              <div className={classes.arrow}>
                <div className={classes.icon}>
                  <ArrowIcon />
                </div>
              </div>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
