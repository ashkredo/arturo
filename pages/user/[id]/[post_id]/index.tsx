import { useContext, useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { User, Post, Comment } from "../../../../interfaces";
import { StoreContext } from "../../../../contexts/StoreContext";
import Layout from "../../../../components/Layout";
import Typography from "@material-ui/core/Typography";
import PostDetails from "../../../../components/PostDetails";

type Props = {
  user: User;
  post: Post;
  comments: Comment[];
  errors?: string;
};

const PostData = (props: Props) => {
  const { selectedPost, setSelectedPost } = useContext(StoreContext);

  useEffect(() => {
    setSelectedPost(props.user, props.post, props.comments);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <Layout title={`Post ${selectedPost.post.id} | Arturo`}>
      <PostDetails
        post={selectedPost.post}
        user={selectedPost.user}
        comments={selectedPost.comments}
      />
    </Layout>
  );
};

export default PostData;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((post: Post) => {
    return {
      params: { post_id: post.id.toString(), id: post.userId.toString() },
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
    const post_id = params?.post_id;
    const res1 = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = await res1.json();
    const res2 = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post_id}`
    );
    const post = await res2.json();
    const res3 = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post_id}/comments`
    );
    const comments = await res3.json();
    return { props: { user, post, comments } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
