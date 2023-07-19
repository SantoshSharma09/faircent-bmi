import React, { useState } from "react";

export const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const token = localStorage.getItem("token_bmi");
  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    if (token || !null) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  };

  const logout = () => {
    setIsAuth(false);
  };
  const value = { isAuth, login, logout };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
