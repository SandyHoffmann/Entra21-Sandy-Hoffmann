import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";

export function useAuth(){
    const context = useContext(AuthContext)
    console.log(context)
    return context
}