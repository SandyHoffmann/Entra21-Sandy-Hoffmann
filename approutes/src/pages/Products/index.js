import {useParams, useRouteMatch} from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function Produto() {
    const {id} = useParams()
    const {valor} = useAuth();
    return(
      <>
        <h1>Produto</h1>
        <p>{id}</p>
        <p>{valor}</p>

      </>
    )
  }