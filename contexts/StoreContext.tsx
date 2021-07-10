import { createContext, useState, ReactNode } from "react";
import { User, Post } from "../interfaces";

const StoreContext = createContext<any>(null);

type Props = {
  children: ReactNode;
};

const StoreProvider = ({ children }: Props) => {
  const [state, setState] = useState({
    users: [],
    selectedUser: {
      user: {},
      posts: [],
    },
  });

  const refreshUsers = async () => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users?_limit=8"
      );
      const latestUsers = await res.json();
      setState({ ...state, users: latestUsers });
    } catch (err) {
      console.error(err);
    }
  };

  const setSelectedUser = (user: User, posts: any) => {
    setState({ ...state, selectedUser: { user: user, posts: posts } });
  };

  const deleteSelectedUserPost = async (id: number) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "Delete",
        }
      );

      if (res.status === 200) {
        setState({
          ...state,
          selectedUser: {
            user: state.selectedUser.user,
            posts: state.selectedUser.posts.filter(
              (post: { id: number }) => post.id !== id && { ...post }
            ),
          },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const value = {
    users: state.users,
    refreshUsers,
    user: state.selectedUser.user,
    posts: state.selectedUser.posts,
    setSelectedUser,
    deleteSelectedUserPost,
  };

  return (
    <>
      <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    </>
  );
};

export { StoreProvider, StoreContext };
