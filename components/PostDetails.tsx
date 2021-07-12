import React, { FC, useState } from "react";
import { User, Post, Comment } from "../interfaces";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CommentIcon from "@material-ui/icons/Comment";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

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
  const [isShowComments, setIsShowComments] = useState(false);
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
          style={{ color: "#f57c00" }}
          align="center"
          className={classes.toolbarTitle}
        >
          {props.post.title}
        </Typography>
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="center"
          className={classes.toolbarTitle}
        >
          {props.post.body}
        </Typography>
        <IconButton
          color="primary"
          aria-label="back"
          onClick={() => {
            setIsShowComments(!isShowComments);
          }}
        >
          <CommentIcon fontSize="large" />
          <Typography variant="subtitle2" color="primary">
            Show comments
          </Typography>
        </IconButton>
        {isShowComments &&
          props.comments &&
          props.comments.map((comment) => (
            <Card
              key={comment.id}
              style={{
                marginBottom: "1%",
                padding: "1%",
                border: "0.5px solid black",
              }}
            >
              <Grid container spacing={1}>
                <Grid item sm={8}>
                  <Typography align="left" component="h5" variant="h5">
                    {comment.name}
                  </Typography>
                </Grid>
                <Grid item sm={4}>
                  <Typography
                    align="right"
                    component="h5"
                    variant="h5"
                    color="primary"
                  >
                    {comment.email}
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                >
                  {comment.body}
                </Typography>
              </Grid>
            </Card>
          ))}
      </div>
    </Container>
  );
};

export default PostDetails;
