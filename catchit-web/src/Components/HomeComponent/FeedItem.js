import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Button from "@mui/material/Button";
import {Modal} from "@mui/material";
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import { Divider } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function FeedItem({FeedItems}) {

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);


    const openModalWindow = () => {
        setIsModalOpen(true);
    }

    const handleClose = () => {
        setIsModalOpen(false);
    }

    const openSnackbarHander = () => {
        setIsSnackbarOpen(true);
        setIsModalOpen(false);
    }

    const closeSnackbarHandler = () => {
        setIsSnackbarOpen(false);
    }
    return(
        <div>

            {/*Snackbar*/}

            <Snackbar
                open={isSnackbarOpen}
                autoHideDuration={6000}
                onClose={closeSnackbarHandler}
                message="Invitation Sent. Please see the response in notifications section !"
            />

            {/* Modal Window */}
            <Modal
                open={isModalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        You can customize this invitation
                    </Typography>
                    <hr />
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        You can add a note to personalize your invitation to {FeedItems.name}.
                    </Typography>
                    <br />
                    <Divider />
                    <br/>
                    <Grid container >
                        <Grid item xs={2}>
                        </Grid>
                        <Grid item xs={5}>
                            <Button variant="outlined">Add Note</Button>
                        </Grid>
                        <Grid item xs={5}>
                            <Button variant="contained" onClick={openSnackbarHander}>Send</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>


            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <Avatar sx={{height: '64px', width: '64px'}} alt="Remy Sharp" src={FeedItems.profileIcon} />
                </Grid>
                <Grid item xs={3}>
                    <Typography component="span" sx={{fontWeight: 'bold', marginLeft: '-168px', fontSize: '18px'}}>{FeedItems.name}</Typography> <br/>
                    <Typography component="span" sx={{marginLeft: '-168px', fontSize: '14px'}}>{FeedItems.location}</Typography>
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12} sx={{padding: '16px'}}>
                    <Typography>
                        {FeedItems.description}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={10}>
                </Grid>
                <Grid item xs={2}>
                    <Button onClick={openModalWindow} variant="contained" color="success" sx={{backgroundColor: '#164863'}}>
                        Fish Together
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default FeedItem;