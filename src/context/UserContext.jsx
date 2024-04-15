import { createContext, useContext } from "react";

export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  return (
    <UserContext.Provider value={{ name: "karl" }}>
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
