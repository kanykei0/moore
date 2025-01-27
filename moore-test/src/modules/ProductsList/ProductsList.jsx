import { Container, ProductCard, Typography } from "ui/index";
import classes from "./ProductsList.module.scss";
import product1 from "assets/images/product1.png";
import product2 from "assets/images/product2.png";
import product3 from "assets/images/product3.png";
import product4 from "assets/images/product4.png";

const ProductsListData = [
  { image: product1, title: "Шоколад и какао продукты" },
  { image: product2, title: "Молочная продукция" },
  { image: product3, title: "Ингредиенты" },
  { image: product4, title: "Покрытия и наполнители" },
];

export const ProductsList = () => {
  return (
    <div className={classes.block}>
      <Container>
        <div className={classes.title}>
          <Typography
            variant="span"
            color="brown"
            size="big"
            font="mons"
            weight="bold"
          >
            Просмотр товаров по{" "}
          </Typography>
          <Typography
            variant="span"
            color="brownLight"
            size="big"
            font="mons"
            weight="bold"
          >
            категориям
          </Typography>
        </div>
        <div className={classes.list}>
          {ProductsListData.map((item, key) => (
            <ProductCard key={key} image={item.image} title={item.title} />
          ))}
        </div>
      </Container>
    </div>
  );
};
