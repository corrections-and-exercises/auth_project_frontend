import { createContext, useState, useContext } from "react";

export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loadingAuthRequest, setLoadingAuthRequest] = useState(false);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        isAuthenticated,
        setIsAuthenticated,
        loadingAuthRequest,
        setLoadingAuthRequest,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "userUserContext must be used within a UserContextProvider",
    );
  }
  return {
    context,
  };
}
