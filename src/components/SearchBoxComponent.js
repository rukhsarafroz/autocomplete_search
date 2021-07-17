import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  searchDiv: {
    position: "relative",
    border: "1px solid white",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
    },
    width: "400px",
    marginLeft: "30px",
    height: "50px",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    marginBottom: "auto",
    marginTop: "auto",
    height: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  searchImg: {
    marginBottom: "3px",
    height: "15px",
    paddingTop: "3px",
    color: "gainsboro",
  },
}));

const SearchBoxComponent = (props) => {

  const { searchQuery, setSearchQuery } = props;
  const classes = useStyles();

  return (
    <div className={classes.searchDiv}>
      <div className={classes.searchIcon}>
        <SearchIcon className={classes.searchImg} />
      </div>
      <InputBase
        placeholder="Search for a contact"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        style={{ paddingLeft: 45, fontSize: "13px" }}
        defaultValue={searchQuery}
        onChange={(event) => {
          setSearchQuery(event.target.value);
        }}
      />
    </div>
  );
};

export default SearchBoxComponent;
