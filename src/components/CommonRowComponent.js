import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        fontSize: "14px"
    },
    keyStyle: {
        color: "grey"
    },
    valueStyle: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: "black"
    }
});

const CommonRowComponent = (props) => {
  const classes = useStyles();
  const { object } = props;

  return (
    <Grid item xs={6} style={{marginTop: "10px",marginBottom: "10px"}}>
        { Object.entries(object).map(
                ([key, value]) => {
                return(
                    <Grid container direction="column" className={classes.root}>
                        <Grid item xs={12} className={classes.keyStyle}>{key}</Grid>
                        <Grid item xs={12} className={classes.valueStyle}>{value}</Grid>
                    </Grid>
                )
                })
        }
    </Grid>
  );
};

export default CommonRowComponent;
