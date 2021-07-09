import { useContext, useEffect } from "react";
import { StoreContext } from "../contexts/StoreContext";
import Layout from "../components/Layout";
import UsersList from "../components/UsersList";
import { Container } from "@material-ui/core";

const Users = () => {
  const { users, refreshUsers } = useContext(StoreContext);
  useEffect(() => {
    refreshUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title="Users | Arturo">
      <Container>
        <UsersList users={users} />
      </Container>
    </Layout>
  );
};

export default Users;
