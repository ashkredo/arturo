import React, { FC, useContext } from "react";
import { Post } from "../interfaces";
import { StoreContext } from "../contexts/StoreContext";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const PostData: FC<Post> = (props: Post) => {
  const { deleteSelectedUserPost } = useContext(StoreContext);

  const onDelete = (id: number) => {
    deleteSelectedUserPost(id);
  };

  return (
    <div>
      <CardActionArea component="a">
        <Card>
          <Box display="flex" p={1} alignItems="center">
            <Box p={1} flexShrink={1}>
              <IconButton
                aria-label="delete"
                color="secondary"
                onClick={() => onDelete(props.id)}
              >
                <DeleteIcon fontSize="large" />
              </IconButton>
            </Box>
            <Box p={1} width="100%">
              <Typography component="h2" variant="h5">
                {props.title.length > 50
                  ? `${props.title.substring(0, 50)}...`
                  : props.title}
              </Typography>
            </Box>
            <Box p={1} flexShrink={0}>
              <KeyboardArrowRightIcon fontSize="large" color="primary" />
            </Box>
          </Box>
        </Card>
      </CardActionArea>
    </div>
  );
};

export default PostData;
