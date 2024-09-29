import icon from "../../assets/img/icons.svg";
import css from "./IconComponent.module.css";

const IconComponent = ({
  id,
  width,
  height,
  className,
  fillColor, 
  strokeColor, 
}) => {
  return (
    <svg
      className={className}
      style={{ background: "transparent" }}
      width={width}
      height={height}
      aria-hidden="true"
      fill={fillColor} 
      stroke={strokeColor} 
    >
      <use href={`${icon}#${id}`} />
    </svg>
  );
};

export default IconComponent;
