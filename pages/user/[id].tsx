import { GetStaticProps } from "next";
import { User, Post } from "../../interfaces";
import Layout from "../../components/Layout";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PostsList from "../../components/PostsList";

type Props = {
  user: User;
  posts: Post[];
  errors?: string;
};

const UserPosts = (props: Props) => {
  if (props.errors) {
    return (
      <Layout title="404: Page Not Found">
        <Typography variant="h2" color="error" gutterBottom>
          Error: {props.errors}
        </Typography>
      </Layout>
    );
  }
  return (
    <Layout title={`Posts User ${props.user?.id} | Arturo`}>
      <PostsList {...props} />
    </Layout>
  );
};

export default UserPosts;

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user: User) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const user = await res.json();
    const res2 = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    const posts = await res2.json();
    return { props: { user, posts } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
