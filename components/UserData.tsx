import React, { FC } from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import { User } from "../interfaces";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    minHeight: "230px",
    maxHeight: "230px",
    minWidht: "700px",
    maxWidth: "700px",
    border: "1px solid black",
  },
}));

const Home: FC<User> = (user: User) => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <CardActionArea
      component="div"
      onClick={() => router.push(`/user/${user.id}`)}
    >
      <Card className={classes.card}>
        <CardContent>
          <Typography component="h2" variant="h6">
            {user.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {user.username}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            <a href={`tel:${user.phone}`}>{user.phone}</a>
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            <a href={`http://${user.website}`}>{user.website}</a>
          </Typography>
          <Typography variant="body1" gutterBottom>
            {user.company.name}
            <Typography variant="caption" display="block" gutterBottom>
              {user.company.catchPhrase}
            </Typography>
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {user.company.bs}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default Home;
