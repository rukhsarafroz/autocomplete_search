import React, { useCallback } from "react";
import {
    Grid,
    Dialog,
    DialogContent,
    Divider,
    IconButton
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Close } from "@material-ui/icons";
import CommonAvatarComponent from "./CommonAvatarComponent";
import CommonStatusComponent from "./CommonStatusComponent";
import CommonRowComponent from "./CommonRowComponent";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: "flex",
        color: "#000000",
    },
    dialog: {
        paddingLeft: "24px",
        paddingRight: "24px",
        maxWidth: "297px"
    },
    avatarStyle: {
        width: "70px",
        height: "70px"
    },
    avatarGridStyle: {
        marginBottom: "auto",
        marginTop: "auto",
        marginLeft: "12px"
    },
    rightPanel: {
        marginBottom: "auto",
        marginTop: "auto",
        alignItems: "center"
    },
    nameStyle: {
        fontSize: "20px",
        fontWeight: "600"
    },
    fiberIconStyle: {
        fontSize: "12px"
    },
    fiberIconGridStyle: {
        marginRight: "4px"
    },
    statusRootStyle: {
        fontSize: "15px",
        marginTop: "5px"
    },
    topPanel: {
        marginBottom: "10px"
    }
}));

const MonsterDialogueComponent = props => {
    const classes = useStyles();
    const {
        monster,
        dialogueState,
        setDialogueState
    } = props;

    const handleClose = useCallback((event) => {
        setDialogueState(false);
    });

    const row1 = [{"Gender": monster.gender},{"Location": monster?.location?.name}]
    const row2 = [{"Species": monster.species},{"Origin": monster?.origin?.name}]

    return (
        <Dialog
            PaperProps={{ classes: { root: classes.dialog } }}
            open={dialogueState}
            fullWidth={true}
        >
        <Grid container>
            <Grid item xs style={{display: "flex", justifyContent: "flex-end"}}>
                <IconButton
                color="inherit"
                onClick={handleClose}
                aria-label="close"
                >
                    <Close />
                </IconButton>
            </Grid>
        </Grid>
        <DialogContent style={{padding: "0px", overflow: "hidden"}}>
            <Grid container direction="column">
                <Grid item xs={12} container className={classes.topPanel}>
                    <Grid item>
                        <CommonAvatarComponent name={monster.name} image={monster.image} avatarStyle={classes.avatarStyle} avatarGridStyle={classes.avatarGridStyle}/>
                    </Grid>
                    <Grid item xs container direction="column" className={classes.rightPanel}>
                        <Grid item className={classes.nameStyle}>{monster.name}</Grid>
                        <CommonStatusComponent
                            status={monster.status}
                            species={monster.species}
                            fiberIconStyle={classes.fiberIconStyle}
                            fiberIconGridStyle={classes.fiberIconGridStyle}
                            statusRootStyle={classes.statusRootStyle}
                            />
                    </Grid>
                </Grid>
                <Divider variant="middle"/>
                <Grid item xs={12} container style={{ margin: "12px"}}>
                    {
                        row1.map(object => {
                            return  <CommonRowComponent object={object}/>
                        })
                    }
                    {
                        row2.map(object => {
                            return  <CommonRowComponent object={object}/>
                        })
                    }
                </Grid>
            </Grid>
        </DialogContent>
    </Dialog>
    );
};

export default MonsterDialogueComponent;
