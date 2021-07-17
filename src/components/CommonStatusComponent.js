import React from "react";
import { Grid } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const CommonStatusComponent = (props) => {
  const { status, species, fiberIconStyle, fiberIconGridStyle, statusRootStyle } = props;
  const statusColor =
    status === "Alive"
      ? "green"
      : status === "Dead"
      ? "red"
      : "grey";

  return (
      <Grid
        item
        xs
        className={statusRootStyle}
      >
        <span className={fiberIconGridStyle}>
          <FiberManualRecordIcon
            fontSize="small"
            className={fiberIconStyle}
            style={{ color: statusColor}}
          />
        </span>
        <span>
          {status} - {species}
        </span>
      </Grid>
  );
};

export default CommonStatusComponent;
