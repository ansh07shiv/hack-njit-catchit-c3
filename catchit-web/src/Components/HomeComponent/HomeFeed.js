import Grid from "@mui/material/Grid";
import FeedItemValues from "./FeedItemValues";
import Paper from "@mui/material/Paper";
import FeedItem from "./FeedItem";
import * as React from "react";

export default function HomeFeed() {
    return(
        <Grid container spacing={3} sx={{pl: 4, pt: 4, pr:4, backgroundColor: '#DDF2FD'}}>
            <Grid item xs={12}>
                {FeedItemValues.map((item) => (
                    <>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', borderRadius: '16px'}}>
                            <FeedItem FeedItems={item}/>
                        </Paper>
                        <br/>
                    </>
                ))}

            </Grid>
        </Grid>
    );
}