import {useState} from "react";
import {Box, Button, IconButton, List, ListItem, Modal, Typography} from "@mui/material";
import {Close} from "@mui/icons-material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    overflow:'scroll',
    height: '100%',
    p: 5,
};

export const JobResume = ({details, id , buttonTitle, buttonColor}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button size="small" variant="outlined" color={buttonColor} sx={{marginY: 2}} onClick={handleOpen}>{buttonTitle}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} classes="modal-style">
                    <Box sx={{marginY: 5}}>
                    <Box>
                        <Box sx={{position: "relative"}}>
                            <IconButton sx={{position: "absolute", top: "0px", right: "0px"}} onClick={handleClose}><Close color="#4C5270"/></IconButton>
                        </Box>
                        <Typography variant="h5" sx={{display: "flex", color: "#613659"}}>{details.skillTitle}</Typography>
                    </Box>
                    <Box m={2}>
                        {details.listOfSkills.map((skill, num) => {
                            return (<Typography key={`skill-${num}`} style={{marginTop: 0, marginRight: 6, display: "inline", fontSize: "1.1rem"}}>
                                {num < details.listOfSkills.length - 1 ? `${skill}, ` : skill}
                            </Typography>);
                        })}
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={{display: "flex", color: "#613659"}}>{details.UsedSkills}</Typography>
                    </Box>
                    <Box m={2}>
                        {details.listUsedSkills.map((skill, num) => {
                            return (<Typography key={`skill-${num}`} style={{marginTop: 0, marginRight: 6, display: "inline", fontSize: "1.1rem"}}>
                                {num < details.listUsedSkills.length - 1 ? `${skill}, ` : skill}
                            </Typography>);
                        })}
                    </Box>
                    <Typography variant="h5" sx={{color: "#613659"}}>{details.tasksTitle}</Typography>
                    <List>
                        {details.tasks.map((task, num) => {
                            return (
                                <ListItem key={`task-${num}-${id}`} >
                                    <Typography style={{marginTop: 0, fontSize: "1.1rem"}}>{task}</Typography>
                                </ListItem>
                            );
                        })}
                    </List>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
