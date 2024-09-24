import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to App</h1>
      <Link to="/catalog">
        <button>Vie Now</button>
      </Link>
    </div>
  );
}
