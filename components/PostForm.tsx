import React from "react";
import { useForm } from "react-hook-form";
import { Post } from "../interfaces";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface Props {
  onSubmit: (post: Post) => void;
  onClose: () => void;
}

const PostForm = ({ onSubmit, onClose }: Props) => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={1}
      >
        <Grid item xs={12}>
          <Input
            {...register("title")}
            placeholder="Title"
            required
            autoComplete="title"
            fullWidth
            autoFocus
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            {...register("body")}
            autoComplete="body"
            fullWidth
            placeholder="Body"
            multiline
            rows={4}
            required
          />
        </Grid>
        <Grid container spacing={1}>
          <Grid item sm={6}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add
            </Button>
          </Grid>
          <Grid item sm={6}>
            <Button
              fullWidth
              variant="contained"
              color="inherit"
              className={classes.submit}
              onClick={onClose}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default PostForm;
