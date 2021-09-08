import { NavLink } from "react-router-dom";

export function Menu(){
    return(
        <ul>
            <li>
                <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/login">Login</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard">dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/products/123">Produtos</NavLink>
            </li>
        </ul> 
    );
}