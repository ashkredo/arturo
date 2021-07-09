import React, { FC } from "react";
import { User } from "../interfaces";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import UserData from "./UserData";

const useStyles = makeStyles((theme) => ({
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
  users: User[];
};

const UsersList: FC<Props> = ({ users }: Props) => {
  const classes = useStyles();
  return (
    <div className="main-content">
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          Users
        </Typography>
      </Toolbar>
      <Grid container spacing={4} className={classes.mainGrid}>
        {users.map((data: User, index: number) => (
          <Grid item key={index} xs={12} md={3}>
            <UserData {...data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UsersList;
