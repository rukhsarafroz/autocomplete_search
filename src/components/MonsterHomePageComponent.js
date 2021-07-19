import React, { useCallback, useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import SearchBoxComponent from "./SearchBoxComponent";
import MonsterCardListComponent from "./MonsterCardListComponent";
import { useDispatch, useSelector } from "react-redux";
import { getMonsters } from "../actions/MonsterAction";
import { debounce } from "lodash";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignContent: "center",
    marginTop: "70px",
  },
  title: {
    fontWeight: 500,
    fontSize: "45px",
  },
  searchGrid: {
    marginTop: "50px",
  },
  monsterList: {
    marginTop: "20px",
  },
});

const MonsterHomePageComponent = (props) => {
  const classes = useStyles();
  const {
    getMonstersRequesting,
    currentPage,
    totalPages,
    monstersList,
    hasMore,
  } = useSelector((state) => state.monsterReducer);

  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(currentPage);
  const firstUpdate = useRef(true);

  const dispatch = useDispatch();

  const searchHandler = useCallback(
    (type) => {
      dispatch(getMonsters({ page, name: searchQuery, type: type }));
    },
  )

  useEffect(() => {
    if (page <= totalPages && hasMore && searchQuery) {
      searchHandler();
    }
  }, [page, hasMore, searchQuery, totalPages]);


  const delayedQuery = useCallback(
    debounce(() => {
      searchHandler("CANCEL_API_REQUEST");
    }, 500),
    [searchQuery]
  );

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    delayedQuery();
    return delayedQuery.cancel;
  }, [searchQuery, delayedQuery]);


  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item xs={12} className={classes.title}>
        Rick and Morty Search
      </Grid>
      <Grid item xs={12} className={classes.searchGrid}>
        <SearchBoxComponent
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </Grid>
      <Grid item xs={12} className={classes.monsterList} style={{display: searchQuery === "" ? "none" : "flex"}}>
        <MonsterCardListComponent
          monstersList={monstersList}
          setPage={setPage}
          getMonstersRequesting={getMonstersRequesting}
          hasMore={hasMore}
          totalPages={totalPages}
          page={page}/>
      </Grid>
    </Grid>
  );
};

export default MonsterHomePageComponent;
