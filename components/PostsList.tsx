import React, { FC } from "react";
import { User, Post } from "../interfaces";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Container } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PostData from "./PostData";

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
  mainGrid: {
    marginTop: theme.spacing(2),
  },
}));

type Props = {
  user: User;
  posts: Post[];
  errors?: string;
};

const PostsList: FC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.mainContent}>
        <Toolbar className={classes.toolbar}>
          <IconButton color="primary" href="/" aria-label="back">
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
          <IconButton size="small" aria-label="add" color="primary">
            <AddCircleIcon fontSize="large" />
          </IconButton>
        </Toolbar>
        <Grid container spacing={1} className={classes.mainGrid}>
          {props.posts.map((data: Post, index: number) => (
            <Grid item key={index} xs={12} md={12}>
              <PostData {...data} key={index} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default PostsList;
