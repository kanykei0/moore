import classes from "./Typography.module.scss";

export const Typography = ({
  font = "",
  size = "",
  variant = "body",
  weight = "",
  children,
  className,
  color = "",
  truncate = 0,
  id,
}) => {
  const Tags = {
    h1: "h1",
    h2: "h2",
    body: "p",
    smallBody: "p",
    extraSmallBody: "p",
    span: "span",
  };

  const classNameGenerated = [
    classes[variant],
    classes[weight],
    classes[color],
    classes[font],
    classes[size],
    className,
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  const TagName = Tags[variant] || "p";

  const truncateString = (str, length) => {
    if (str.length > length) {
      return str.slice(0, length) + "...";
    }
    return str;
  };

  return (
    <TagName id={id} className={classNameGenerated}>
      {!truncate ? children : truncateString(children, truncate)}
    </TagName>
  );
};
