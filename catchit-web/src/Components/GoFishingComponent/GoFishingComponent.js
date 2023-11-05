
import React, { useEffect, useRef, useState } from 'react';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MapView from "./MapView.js";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Paper from "@mui/material/Paper";
import {DatePicker, LocalizationProvider, TimePicker} from "@mui/x-date-pickers";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

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

function GoFishingComponent() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [latLongValue, setLatLongValue] = React.useState([0, 0]);
    const [apiKey, setAPIKey] = React.useState('c4b2658f41377bb7ab309b2d957bc846');
    const [weatherCondition, setWeatherConditions] = React.useState({});
    const openModalWindow = () => {
        setIsModalOpen(true);
    }
    const handleClose = () => {
        setIsModalOpen(false);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLatLongValue([position.coords.latitude.toFixed(4), position.coords.longitude.toFixed(4)])
            // console.log("Latitude is :", position.coords.latitude);
            // console.log("Longitude is :", position.coords.longitude);
        });
    }, []);

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latLongValue[0]}&lon=${latLongValue[1]}&appid=${apiKey}`).then(

            (response) => {
                console.log(response);
                let weatherJSON = {
                    'Temperature': (response.data.main.temp - 273.15).toFixed(2),
                    'Feels Like': (response.data.main.feels_like - 273.15).toFixed(2),
                    'Pressure': response.data.main.pressure,
                    'Min Temperature': (response.data.main.temp_min - 273.15).toFixed(2),
                    'Max Temperature': (response.data.main.temp_max - 273.15).toFixed(2),
                    'Humidity': response.data.main.humidity,
                    'Wind Speed': response.data.wind.speed,
                }
                setWeatherConditions(weatherJSON);
                console.log("Weather Details: ", weatherCondition);
                console.log(weatherCondition['Temperature']);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, [latLongValue[0], latLongValue[1], apiKey]);

    const latLongHandler = (lat, long) => {
        console.log("Lat Long Value: ", lat, " ", long);
        setLatLongValue([lat.toFixed(4), long.toFixed(4)]);
    }

    return (
        <Grid container spacing={3} sx={{pl: 4, pt: 2, pr:4 , backgroundColor: '#DDF2FD', height: '740px'}}>
        <Paper sx={{ m: 8, p: 1, display: 'flex', flexDirection: 'column', borderRadius: '16px'}}>
            <Grid container spacing={3} sx={{pl: 4, pt: 2, pr:4}}>
                <Modal
                    open={isModalOpen}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                            <MapView getLatLong={latLongHandler} closeModal={handleClose}/>
                    </Box>
                </Modal>
                <Grid item xs={12}>
                    <Typography variant="h4">Log Fishing Trip</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" onClick={openModalWindow} sx={{backgroundColor: '#164863'}}>Choose Fishing Destination</Button>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="h6">Current Location Coordinates: {latLongValue[0]}, {latLongValue[1]}</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h5">Fishing Weather Conditions</Typography>
                </Grid>

                <Grid item xs={12}>

                    <Typography>Temperature: {weatherCondition['Temperature']}</Typography>
                    <Grid container sx={{pl: 4, pt: 2, pr:4}}>


                        <Grid item xs={4}>
                            <Typography>Feels Like: {weatherCondition['Feels Like']}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Pressure: {weatherCondition['Pressure']}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Min Temp: {weatherCondition['Min Temperature']}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Max Temp: {weatherCondition['Max Temperature']}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Humidity: {weatherCondition['Humidity']}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Wind Speed: {weatherCondition['Wind Speed']}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ml: 6, pl: 4, pt: 2, pr:4}}>

                    <Grid container item xs={2}>
                    </Grid>
                    <Grid container item xs={4}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label="Select date for the trip" />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                    <Grid container item xs={4}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['TimePicker']}>
                                <TimePicker label="Select the time for the trip" />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                    <Grid container item xs={2}>
                    </Grid>

                    <Grid container sx={{pl: 4, pt: 2, pr:4}}>
                        <Grid item xs={4}>
                        </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" onClick={openModalWindow}
                                        sx={{backgroundColor: '#164863'}}>Log Trip</Button>
                            </Grid>
                        <Grid item xs={5}>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
        </Grid>
    );
}

export default GoFishingComponent;