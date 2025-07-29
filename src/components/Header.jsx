import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-6 z-50 w-full">
      <div className="container mx-auto bg-purple-100 dark:bg-purple-800 p-4 rounded-lg flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-purple-700">
          <img src="/assets/images/logo-light.svg" alt="Logo" className="h-10" />
        </Link>
        <nav className="space-x-6 text-purple-600 dark:text-purple-300">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/blogs" className="hover:underline">Blogs</Link>
          <Link to="/portfolio" className="hover:underline">Portfolio</Link>
          <Link to="/career" className="hover:underline">Career</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
}