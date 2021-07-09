import { createContext, useState, ReactNode } from "react";

const StoreContext = createContext<any>(null);

type Props = {
  children: ReactNode;
};

const StoreProvider = ({ children }: Props) => {
  const [users, setUsers] = useState([]);

  const refreshUsers = async () => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users?_limit=8"
      );
      const latestUsers = await res.json();
      setUsers(latestUsers);
    } catch (err) {
      console.error(err);
    }
  };

  const value = { users, setUsers, refreshUsers };

  return (
    <>
      <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    </>
  );
};

export { StoreProvider, StoreContext };
