import './App.css';
import {BrowserRouter as Router,
        Route,
        Switch,
        Link,
        NavLink,
        useParams,
        Redirect,
        useHistory,
        } from "react-router-dom";
import { AuthProvider } from './contexts/authContext';
import { Routes } from './routes';


function App() {
  return (
    <AuthProvider>
          <Routes />
    </AuthProvider>
  );
}


export default App;
