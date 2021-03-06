import React, { FC, useContext, useState } from "react";
import { Post } from "../interfaces";
import { StoreContext } from "../contexts/StoreContext";
import { useToasts } from "react-toast-notifications";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ConfirmDialog from "../components/ConfirmDialog";

const PostData: FC<Post> = (props: Post) => {
  const { addToast } = useToasts();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const { deleteSelectedUserPost } = useContext(StoreContext);

  const onDelete = (id: number) => {
    deleteSelectedUserPost(id);
    addToast(`Post ${id} deleted`, {
      appearance: "success",
    });
  };

  return (
    <Card>
      <Box display="flex" p={1} alignItems="center">
        <Box p={1} flexShrink={1}>
          <IconButton
            aria-label="delete"
            color="secondary"
            onClick={() => setConfirmOpen(true)}
          >
            <DeleteIcon fontSize="large" />
          </IconButton>
        </Box>
        <CardActionArea
          component="a"
          href={`/user/${props.userId}/${props.id}`}
        >
          <Box p={1} width="100%">
            <Typography component="h2" variant="h5">
              {props.title.length > 50
                ? `${props.title.substring(0, 50)}...`
                : props.title}
            </Typography>
          </Box>
        </CardActionArea>
      </Box>
      <ConfirmDialog
        title={`Are you sure you want to remove post ${props.id}?`}
        open={confirmOpen}
        setOpen={setConfirmOpen}
        onConfirm={() => onDelete(props.id)}
      >
        <Typography component="h2" variant="subtitle1" color="primary" noWrap>
          {props.title}
        </Typography>
      </ConfirmDialog>
    </Card>
  );
};

export default PostData;
