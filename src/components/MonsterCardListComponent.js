import React, { useCallback, useEffect, useRef, useState } from "react";
import { Grid } from "@material-ui/core";
import MonsterCardRowComponent from "./MonsterCardRowComponent";
import MonsterDialogueComponent from "./MonsterDialogueComponent";

const MonsterCardListComponent = (props) => {
  const { monstersList, page, setPage } = props;
  const [dialogueState, setDialogueState] = useState(false);
  const [currentMonster, setCurrentMonster] = useState();
  const containerRef = useRef();

  const handleOpenDialogue = useCallback((event, id) => {
    const monsterToShow = monstersList.filter((monster) => monster.id === id);
    monsterToShow &&
      monsterToShow.length &&
      setCurrentMonster(monsterToShow[0]);
    setDialogueState(true);
  });

  const callbackFunction = (entries) => {
    const [ entry ] = entries
    entry.isIntersecting && setPage(page+1);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, {
      root: null,
      rootMargin: "0px",
      threshold:1.0
    })
    if (containerRef.current) observer.observe(containerRef.current)
    return () => {
      if(containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef])

  return (
    <Grid container ref={containerRef} style={{minHeight: "20vh",overflowY: "auto"}}>
      <Grid container  direction="column">
        {monstersList &&
          monstersList.map((monster) => {
            return (
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
