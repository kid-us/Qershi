import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [phone, setPhone] = useState();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setPhone(sessionStorage.getItem("token"));
    } else {
      setPhone(null);
    }
  }, [phone]);

  const login = (phone) => {
    sessionStorage.setItem("token", phone);
    setPhone(phone);
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    setPhone(null);
  };

  return (
    <AuthContext.Provider value={{ phone, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

