import { Link } from "react-router-dom";
import style from "./HomePage.module.scss"
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
export default function HomePage() {
  return (
    <div className={style.container}>
      
      <h1 >Campers of your dreams</h1>
      <h2>You can find everything you want in our catalog</h2>
      <Link to="/catalog">
        <ButtonComponent text="View Now" />
      </Link>
    </div>
  );
}
