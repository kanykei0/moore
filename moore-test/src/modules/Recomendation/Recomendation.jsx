import { ArrowIcon } from "assets/icons";
import classes from "./Recomendation.module.scss";
import rec1 from "assets/images/rec1.png";
import rec2 from "assets/images/rec2.png";
import rec3 from "assets/images/rec3.png";
import rec4 from "assets/images/rec4.png";
import { Container, RecomendationCard, Typography } from "ui/index";

const RecomedationData = [
  {
    title: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
    weight: "150",
    price: "550",
    image: rec1,
  },
  {
    title: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
    weight: "150",
    price: "550",
    image: rec2,
  },
  {
    title: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
    weight: "150",
    price: "550",
    image: rec3,
  },
  {
    title: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
    weight: "150",
    price: "550",
    image: rec4,
  },
];

export const Recomendation = () => {
  return (
    <div className={classes.bg}>
      <Container>
        <div className={classes.block}>
          <Typography font="mons" color="primary">
            Вам могут понравится
          </Typography>
          <div className={classes.wrapper}>
            <Typography font="mons" variant="h3" weight="bold">
              Рекомендуемые <br />
              товары
            </Typography>
            <button className={classes.btn}>
              <Typography>Все товары</Typography>
              <div className={classes.arrow}>
                <div className={classes.icon}>
                  <ArrowIcon />
                </div>
              </div>
            </button>
          </div>
          <div className={classes.list}>
            {RecomedationData.map((item, key) => (
              <RecomendationCard
                key={key}
                image={item.image}
                title={item.title}
                weight={item.weight}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
