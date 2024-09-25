import PropTypes from "prop-types";
import styles from "./ButtonComponent.module.scss";

const ButtonComponent = ({
    text,
    color,
    backgroundColor,
    onClick,
    ariaLabel,
  }) => {
    const buttonStyle = {
      backgroundColor,
      color,
    };
  
    return (
      <button
        className={styles.button}
        style={buttonStyle}
        onClick={() => onClick()}
        aria-label={ariaLabel || text}
      >
        {text}
      </button>
    );
  };
  
  ButtonComponent.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func,
    ariaLabel: PropTypes.string,
  };
  
  export default ButtonComponent;