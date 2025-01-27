import { BurgerIcon } from "assets/icons/BurgerIcon";
import classes from "./BurgerMenu.module.scss";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { OpenMenu } from "../OpenMenu/OpenMenu";

const Burger = () => {
  const [isClose, setIsClose] = useState(true);
  const nav = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    setIsClose(true);
  }, [nav.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsClose(true);
      }
    };

    if (!isClose) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isClose]);

  return (
    <>
      <div className={classes.icon} onClick={() => setIsClose(false)}>
        <BurgerIcon />
      </div>
      <OpenMenu isClose={isClose} setIsClose={setIsClose} menuRef={menuRef} />
    </>
  );
};

export default Burger;
