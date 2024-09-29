import IconComponent from "../IconComponent/IconComponent";
import styles from "../Features/Features.module.scss"
// eslint-disable-next-line react/prop-types
const Features = ({ camper }) => {
  const features = [
    {
      key: "transmission",
      label: "Automatic",
      svg: "diagram",
      value: "automatic",
    },
    { key: "kitchen", label: "Kitchen", svg: "cup-hot" },
    { key: "AC", label: "AC", svg: "ac" },
    { key: "bathroom", label: "Bathroom", svg: "water" },
    { key: "TV", label: "TV", svg: "tv" },
    { key: "radio", label: "Radio", svg: "radio" },
    { key: "gas", label: "Gas", svg: "fuel-pump" },
    { key: "microwave", label: "Microwave", svg: "wave" },
    { key: "refrigerator", label: "Frige", svg: "frige" },
    { key: "engine", label: "Hybrid", svg: "engine", value: "hybrid" },
    { key: "engine", label: "Diesel", svg: "engine", value: "diesel" },
    { key: "engine", label: "Petrol", svg: "engine", value: "petrol" },
    
  ];

  return (
    <div className={styles.features}>
      {features.map((feature) => {
        const isFeatureAvailable =
          camper[feature.key] === true || camper[feature.key] === feature.value;
        return isFeatureAvailable ? (
          <div key={feature.key} className={styles.feature}>
            <IconComponent
              id={feature.svg}
              width="20"
              height="20"
              fillColor="currentColor"
            />
            <span>{feature.label}</span>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Features;
