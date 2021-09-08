import React, { useContext,createContext } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  return(
    <AuthContext.Provider value={{valor:10}}>
      {children}
    </AuthContext.Provider>
  )
}