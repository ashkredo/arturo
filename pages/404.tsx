/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "../components/Link";
import Layout from "../components/Layout";
import Typography from "@material-ui/core/Typography";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <Layout title="404: Page Not Found">
      <div style={{ textAlign: "center" }}>
        <Typography component="h2" variant="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h2" color="error" gutterBottom>
          This page could not be found :(
        </Typography>
        <Link href="/" variant="h5">
          {"Going to the Home Page is 3 seconds..."}
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
