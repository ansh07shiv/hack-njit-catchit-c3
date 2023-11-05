import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './ListItems';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeFeed from "./HomeFeed";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import ListItemText from "@mui/material/ListItemText";
import PhishingIcon from "@mui/icons-material/Phishing";
import RestoreIcon from "@mui/icons-material/Restore";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import GoFishingComponent from "../GoFishingComponent/GoFishingComponent";
import Profile from "../ProfileComponent/Profile";
import PastTrips from "../PastTrips/PastTrips";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import ParticipantStat from "../ParticipantStat/ParticipantStat";

import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import RedeemIcon from '@mui/icons-material/Redeem';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

export default function HomeComponent() {
    const handleItemSelect = (selectedId) => {
        console.log("selected new Item")
        setSelectedParticipantId(selectedId)
        goToParticipantStat()
    };

    const [showProfile, setShowProfile] = React.useState(false);
    const [showHome, setHome] = React.useState(true);
    const [showPastTrips, setPastTrips] = React.useState(false);
    const [showLeaderBoard, setLeaderBoard] = React.useState(false);
    const [showParticipantStat, setParticipantStat] = React.useState(false);
    const [showGoFishing, setShowGoFishing] = React.useState(false);

    const [selectedParticipantId, setSelectedParticipantId] = React.useState(false);
    const [state, setState] = React.useState({
        currentUser: true,
        currentUserId: '1',
    });


    const goShowGoFishing = () => {
        setHome(false);
        setPastTrips(false);
        setLeaderBoard(false);
        setParticipantStat(false);
        setShowProfile(false);
        setShowGoFishing(true);
    };

    const goToProfile = () => {
        setHome(false);
        setPastTrips(false);
        setLeaderBoard(false);
        setParticipantStat(false);
        setShowProfile(true);
        setShowGoFishing(false);
    };

    const goToParticipantStat = () => {

        setHome(false);
        setPastTrips(false);
        setLeaderBoard(false);
        setShowProfile(false);
        setParticipantStat(true);
        setShowGoFishing(false);
    };


    const goToHome = () => {

        setShowProfile(false);
        setPastTrips(false);
        setLeaderBoard(false);
        setParticipantStat(false);
        setHome(true);
        setShowGoFishing(false);
    };

    const goToPastTrips = () => {

        setHome(false);
        setShowProfile(false);
        setLeaderBoard(false);
        setParticipantStat(false);
        setPastTrips(true);
        setShowGoFishing(false);
    };

    const goToLeaderBoard = () => {

        setHome(false);
        setShowProfile(false);
        setPastTrips(false);
        setParticipantStat(false);
        setLeaderBoard(true);
        setShowGoFishing(false);
    };

    const [open, setOpen] = React.useState(true);
    // const [isHomeVisible, setIsHomeIsVisible] = React.useState(true);
    // const [isGoFishing, setIsGoFishing] = React.useState(false);
    //
    // const handleGoFishingClick = () => {
    //     setIsHomeIsVisible(false);
    //     setIsGoFishing(true);
    // }
    //
    // const handleHomeClick = () => {
    //     setIsHomeIsVisible(true);
    //     setIsGoFishing(false);
    // }
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
            <Box sx={{ display: 'flex', width: '100%' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open} sx={{backgroundColor: '#164863'}}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Box
                            component="img"
                            sx={{
                                m: 1,
                                height: 64,
                                width: 260,
                            }}
                            src="/Logo.png"
                        />

                        <Typography
                            component="div"
                            variant="div"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1, fontSize: '16px' }}
                        >
                            {/*CatchIt*/}
                            {/*<br/><div sx={{fontSize:'20px'}}>Connect, Catch, and Compete!</div>*/}
                        </Typography>

                        <IconButton color="inherit">
                                <AccountCircleIcon onClick={goToProfile} sx={{fontSize: 36}}/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open} >
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1]
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <React.Fragment>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home" onClick={goToHome}/>
                            </ListItemButton>

                            <ListItemButton>
                                <ListItemIcon>
                                    <PhishingIcon />
                                </ListItemIcon>
                                <ListItemText primary="Go Fishing" onClick={goShowGoFishing} />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <RestoreIcon />
                                </ListItemIcon>
                                <ListItemText primary="Past Trips" onClick={goToPastTrips} />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LeaderboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Leaderboard" onClick={goToLeaderBoard}/>
                            </ListItemButton>


                            <ListItemButton>
                                <ListItemIcon>
                                    <ModeOfTravelIcon />
                                </ListItemIcon>
                                <ListItemText primary="On Going Trips"/>
                            </ListItemButton>

                            <ListItemButton>
                                <ListItemIcon>
                                    <FactCheckIcon />
                                </ListItemIcon>
                                <ListItemText primary="Completed Trips"/>
                            </ListItemButton>

                            <ListItemButton>
                                <ListItemIcon>
                                    <StorefrontIcon />
                                </ListItemIcon>
                                <ListItemText primary="Buy Sell Fish"/>
                            </ListItemButton>

                            <ListItemButton>
                                <ListItemIcon>
                                    <ConnectWithoutContactIcon />
                                </ListItemIcon>
                                <ListItemText primary="Connect"/>
                            </ListItemButton>

                            <ListItemButton>
                                <ListItemIcon>
                                    <RedeemIcon />
                                </ListItemIcon>
                                <ListItemText primary="Redeem Points"/>
                            </ListItemButton>


                        </React.Fragment>
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                        {/* Application Pages Content */}
                    {showHome &&<HomeFeed />}
                    {showProfile && <Profile />}
                    {showPastTrips && <PastTrips currentUserId={state.currentUserId}/>}
                    {showLeaderBoard && <LeaderBoard onSelect={handleItemSelect}/>}
                    {showParticipantStat && <ParticipantStat selectedId={selectedParticipantId} /> }
                    {showGoFishing && <GoFishingComponent/> }
                </Box>
            </Box>
    );
}