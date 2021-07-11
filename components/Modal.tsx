import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

interface Props {
  open: boolean;
  onClose: () => void;
  children?: React.ReactElement;
}

const SimpleModal = ({ open, onClose, children }: Props) => {
  const classes = useStyles();
  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div className="main-content">{children}</div>
    </Modal>
  );
};

export default SimpleModal;
