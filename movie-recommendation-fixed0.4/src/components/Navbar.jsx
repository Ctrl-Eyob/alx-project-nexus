import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <h1 className="text-2xl font-bold tracking-widest">NEXUS</h1>

      <div className="flex gap-8 text-nexusGray">
        {["Now Playing", "Watch list", "Upcoming", "Top Rated"].map(item => (
          <NavLink
            key={item}
            to={item === "Upcoming" ? "/search" : "/"}
            className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-white"
            }
          >
            {item}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
