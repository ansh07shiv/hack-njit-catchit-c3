import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import PhishingIcon from '@mui/icons-material/Phishing';
import HomeIcon from '@mui/icons-material/Home';
import RestoreIcon from '@mui/icons-material/Restore';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <PhishingIcon />
            </ListItemIcon>
            <ListItemText primary="Go Fishing" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <RestoreIcon />
            </ListItemIcon>
            <ListItemText primary="Past Trips" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LeaderboardIcon />
            </ListItemIcon>
            <ListItemText primary="Leaderboard" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
    </React.Fragment>
);