import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function Auth({ children }) {
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();
  const { search } = useLocation();
  const name = new URLSearchParams(search).get("name");

  const checkAuth = async () => {
    if (login  && name === "login") {
      navigate("/tasklist");
    } else if (!login && name !== "singup") {
      navigate("/auth?name=login");
    }
  };

  useEffect(() => {
    checkAuth();
  }, [login]);
  
  return (
    <AuthContext.Provider value={{ login, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
