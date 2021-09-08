import {useHistory} from "react-router-dom";

export function Login(){
    const history = useHistory();
  
    function handleClick(){
      history.replace("/dashboard");
    }
    return(
      <>
      <h1>Login</h1>
      <button onClick={handleClick}>Redirect dash</button>
      </>
    )
  }