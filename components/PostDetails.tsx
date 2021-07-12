import React, { FC } from "react";
import { User, Post, Comment } from "../interfaces";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    boxShadow:
      "0 2px 5px 0 rgba(0, 0, 0, 0.15), 0 2px 9px 0 rgba(0, 0, 0, 0.11)",
    padding: "8px",
    background: "color: #fff",
    margin: "0.4% 0.4%",
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    fontFamily: "'Ewert', cursive;",
  },
}));

type Props = {
  user: User;
  post: Post;
  comments: Comment[];
};

const PostDetails: FC<Props> = (props: Props) => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.mainContent}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="primary"
            href={`/user/${props.user.id}`}
            aria-label="back"
          >
            <ArrowBackIcon fontSize="large" />
            <Typography variant="subtitle2" color="primary">
              Back
            </Typography>
          </IconButton>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            {props.user.name}
          </Typography>
        </Toolbar>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          className={classes.toolbarTitle}
        >
          {props.post.title}
        </Typography>
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="left"
          className={classes.toolbarTitle}
        >
          {props.post.body}
        </Typography>
      </div>
    </Container>
  );
};

export default PostDetails;
