import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { times } from "lodash";

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
  avatarGridStyle: {
    marginBottom: "auto",
    marginTop: "auto",
    marginLeft: "12px"
  },
  statusRootStyle: {
    marginBottom: "auto",
    marginTop: "auto",
  }
});

const CommonSkeletonComponent = (props) => {

  const {count} = props;
  const classes = useStyles();
  let rows = parseInt(count);

  return (
    <Fragment>
      {times(rows, count => {
        return (
        <Grid container key={count} className={classes.root}>
          <Grid item className={classes.avatarGridStyle}>
            <Skeleton variant="circle" width={30} height={30} />
          </Grid>
          <Grid
            item
            xs={5}
            className={classes.avatarGridStyle}
          >
            <Skeleton
                style={{ width: "95%" }}
                animation="wave"
                variant="text"
            />
          </Grid>
          <Grid item xs className={classes.statusRootStyle}>
            <Skeleton
                    style={{ width: "80%" }}
                    animation="wave"
                    variant="text"
                />
          </Grid>
        </Grid>);
      })}
    </Fragment>
  );
};

export default CommonSkeletonComponent;
