import React, { useCallback, useRef, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import MonsterCardRowComponent from "./MonsterCardRowComponent";
import MonsterDialogueComponent from "./MonsterDialogueComponent";
import CommonSkeletonComponent from "./CommonSkeletonComponent";

const useStyles = makeStyles({
  root: {
    maxHeight: "50vh",
    overflowY: "auto"
  },
});

const MonsterCardListComponent = (props) => {
  const { monstersList, setPage, getMonstersRequesting, hasMore, totalPages, page} = props;
  const [dialogueState, setDialogueState] = useState(false);
  const [currentMonster, setCurrentMonster] = useState();

  const classes = useStyles();

  const handleOpenDialogue = useCallback((event, id) => {
    const monsterToShow = monstersList.filter((monster) => monster.id === id);
    monsterToShow &&
      monsterToShow.length &&
      setCurrentMonster(monsterToShow[0]);
    setDialogueState(true);
  });

  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (getMonstersRequesting) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && page <= totalPages) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [getMonstersRequesting, hasMore, page, setPage, totalPages]
  );

  return (
    <Grid container className={classes.root}>
      <Grid container direction="column">
        {monstersList &&
          monstersList.map((monster,index) => {
            return monstersList.length === index + 1 ?
            (
              <Grid
                container
                key={`monster-list-${monster.id}`}
                onClick={(event) => {
                  handleOpenDialogue(event, monster.id);
                }}
                ref={lastElementRef}
              >
                <MonsterCardRowComponent monster={monster} />
              </Grid>
            ) : (
              <Grid
                container
                key={`monster-list-${monster.id}`}
                onClick={(event) => {
                  handleOpenDialogue(event, monster.id);
                }}
              >
                <MonsterCardRowComponent monster={monster} />
              </Grid>
            );
          })}
          {getMonstersRequesting &&
              <Grid item>
                <CommonSkeletonComponent count={hasMore ? 1 : 5}/>
              </Grid>
          }
      </Grid>
      {dialogueState && (
        <MonsterDialogueComponent
          dialogueState={dialogueState}
          setDialogueState={setDialogueState}
          monster={currentMonster}
        />
      )}
    </Grid>
  );
};

export default MonsterCardListComponent;
