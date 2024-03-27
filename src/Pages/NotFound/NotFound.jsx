import { Link } from "react-router-dom";
import "./NotFound.css"

export default function NotFound() {
  return <section className="not-found">
    <div className="container not-found-container">
      <h1>404</h1>
      <h3>Opps, This Page Not Found</h3>
      <Link to={"/"} className="btn btn-border">Go To Home</Link>
    </div>
  </section>;
}
