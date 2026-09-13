import "./Header.css"
import { NavLink } from 'react-router-dom';
import { router } from "../../app/router";
import RocketIcon from "../icons/RocketIcon";

export default function Header() {
  const childRoutes = router.routes[0]?.children || [];
  const routes = childRoutes.filter(route => route.handle?.showInMenu);

  return (
    <header className="headerContainer">
      <div className="links">
        <NavLink to="/" className="logo">

          <span className="micro-meteor"></span>
          <span className="micro-meteor"></span>
          <span className="micro-meteor"></span>
          
          <RocketIcon />
        </NavLink>
        {routes.map(route => {
          const path = route.index ? "/" : `/${route.path}`

          return (
            <NavLink 
              to={path} 
              key={path}
              className={({ isActive }) => isActive ? "nav-text-link active" : "nav-text-link"}
            >
              {route.handle.label}
            </NavLink>
          )
        })}
      </div>
    </header>
  )
}
