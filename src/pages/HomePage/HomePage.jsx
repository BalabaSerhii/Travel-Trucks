import { Link } from "react-router-dom";
import style from "./HomePage.module.scss"
export default function HomePage() {
  return (
    <div className={style.test}>
      <h1 >Welcome to App</h1>
      <Link to="/catalog">
        <button>Vie Now</button>
      </Link>
    </div>
  );
}
