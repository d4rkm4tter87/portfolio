import { NavLink } from "react-router-dom";

export default function Menu2() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header className="container">
      <div className="c">
        <div className="c1">
          <div className="boxProjects2">
            <NavLink to="/" className={getClass}>
              <p className="mirror2 font3">Home</p>
            </NavLink>
          </div>
          <div className="boxProjects2">
            <NavLink to="/projects" className={getClass}>
              <p className="mirror2 font3">Projects</p>
            </NavLink>
          </div>
          <div className="boxProjects2">
            <NavLink to="/certificates" className={getClass}>
              <p className="mirror2 font3">Certificates</p>
            </NavLink>
          </div>
          <div className="boxProjects2">
            <NavLink to="/tsumegohero" className={getClass}>
              <p className="mirror2 font3">Tsumego Hero</p>
            </NavLink>
          </div>

          <div className="boxProjects2">
            <NavLink to="/gobremen" className={getClass}>
              <p className="mirror2 font3">Go in Bremen</p>
            </NavLink>
          </div>

          <div className="boxProjects2">
            <NavLink to="/gobremenx" className={getClass}>
              <p className="mirror2 font3">Go in Bremen</p>
            </NavLink>
          </div>
        </div>
      </div>

      <NavLink to="/" className={getClass}>
        Home
      </NavLink>
      <NavLink to="/tsumegohero" className={getClass}>
        tsumegohero
      </NavLink>
      <NavLink to="/gobremen" className={getClass}>
        gobremen
      </NavLink>
      <NavLink to="/register" className={getClass}>
        Register
      </NavLink>
    </header>
  );
}
