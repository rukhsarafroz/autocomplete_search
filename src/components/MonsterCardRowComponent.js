import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import CommonAvatarComponent from "./CommonAvatarComponent";
import CommonStatusComponent from "./CommonStatusComponent";

const useStyles = makeStyles({
  root: {
    border: "1px solid white",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
    },
    width: "400px",
    marginLeft: "30px",
    height: "50px",
    marginBottom: "3px",
  },
  avatarStyle: {
    width: "30px",
    height: "30px"
  },
  avatarGridStyle: {
    marginBottom: "auto",
    marginTop: "auto",
    marginLeft: "12px"
  },
  nameStyle: {
    fontSize: "16px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  fiberIconStyle: {
    fontSize: "12px"
  },
  fiberIconGridStyle: {
    marginRight: "4px"
  },
  statusRootStyle: {
    marginBottom: "auto",
    marginTop: "auto",
    fontSize: "15px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
});

const MonsterCardRowComponent = (props) => {
  const classes = useStyles();
  const { monster } = props;

  return (
    <Grid container className={classes.root} key={`monster-${monster.id}`}>
      <CommonAvatarComponent
        name={monster.name}
        image={monster.image}
        avatarStyle={classes.avatarStyle}
        avatarGridStyle={classes.avatarGridStyle} />
      <Grid
        item
        xs={5}
        className={`${classes.nameStyle} ${classes.avatarGridStyle}`}
      >
        {monster.name}
      </Grid>
      <CommonStatusComponent
        status={monster.status}
        species={monster.species}
        fiberIconStyle={classes.fiberIconStyle}
        fiberIconGridStyle={classes.fiberIconGridStyle}
        statusRootStyle={classes.statusRootStyle}
      />
    </Grid>
  );
};

export default MonsterCardRowComponent;
