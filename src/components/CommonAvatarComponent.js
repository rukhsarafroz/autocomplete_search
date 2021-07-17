import React from "react";
import { Avatar, Grid } from "@material-ui/core";

const CommonAvatarComponent = (props) => {
  const { name, image, avatarStyle, avatarGridStyle } = props;

  return (
      <Grid
        item
        className={avatarGridStyle}
      >
        <Avatar
          alt={name}
          src={image}
          className={avatarStyle}
        />
      </Grid>
  );
};

export default CommonAvatarComponent;
