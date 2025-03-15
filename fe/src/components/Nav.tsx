import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="px-4 py-2">
      <section className="container mx-auto flex justify-center gap-4">
        <Link to="/">
          <button className="bg-sky-500 text-white px-4 py-2 rounded-md">
            Products
          </button>
        </Link>
        <Link to="/create">
          <button className="bg-sky-500 text-white px-4 py-2 rounded-md">
            Create Product
          </button>
        </Link>
      </section>
    </nav>
  );
}
