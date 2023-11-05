import React, {Component} from 'react';
import './ParticipantStat.css';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

class ParticipantStat extends Component {
  constructor() {
    super();


    this.state = {
      participants: [{
        id: "1",
        name: "John",
        data: [
          {
            date: 'January 2023, 01',
            location: 'Lakeview, New York',
            photoUrl: 'https://s3.amazonaws.com/busites_www/tsfmag/meta/1017WEB_cochran_1505426791.jpg',
            fishData: [
              {type: 'Salmon', caught: 5},
              {type: 'Trout', caught: 3}
            ],
          },
          {
            date: 'March 2023, 04',
            location: 'Sea Side, Los Angeles',
            // photoUrl: 'https://plus.unsplash.com/premium_photo-1664279990975-ad8c66c4a064?auto=format&fit=crop&q=80&w=3088&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            photoUrl: 'data:image/jpeg;base64,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',
            fishData: [
              {type: 'Bass', caught: 7},
              {type: 'Catfish', caught: 2},
            ],
          },
          {
            date: 'December 2023, 15',
            location: 'Ocean View, Chicago',
            photoUrl: 'https://www.howtocatchanyfish.com/uploads/8/8/0/2/8802125/biggestpayara_orig.jpg',
            fishData: [
              {type: 'Pike', caught: 4},
              {type: 'Perch', caught: 6},
            ],
          },
        ]

      },
        {
          id: "2",
          name: "Alice",
          data: [
            {
              date: '2023-01-11',
              location: 'New York',
              photoUrl: 'https://example.com/photo1.jpg',
              fishData: [
                {type: 'Salmon', caught: 10},
                {type: 'Trout', caught: 3},
                {type: 'Fish 3', caught: 14},
                {type: 'fish 4', caught: 3},
              ],
            },
            {
              date: '2023-02-15',
              location: 'Los Angeles',
              photoUrl: 'https://example.com/photo2.jpg',
              fishData: [
                {type: 'Bass', caught: 7},
                {type: 'Catfish', caught: 12},
              ],
            },
            {
              date: '2023-03-20',
              location: 'Chicago',
              photoUrl: 'https://example.com/photo3.jpg',
              fishData: [
                {type: 'Pike', caught: 4},
                {type: 'Perch', caught: 7},
              ],
            },
          ]

        },
        {
          id: "3",
          name: "Bob",
          data: [
            {
              date: '2023-08-11',
              location: 'New York',
              photoUrl: 'https://example.com/photo1.jpg',
              fishData: [
                {type: 'Salmon', caught: 13},
                {type: 'Trout', caught: 3},
                {type: 'Fish 3', caught: 14},
                {type: 'fish 4', caught: 17},
              ],
            },
            {
              date: '2023-04-15',
              location: 'Los Angeles',
              photoUrl: 'https://example.com/photo2.jpg',
              fishData: [
                {type: 'Bass', caught: 7},
                {type: 'Catfish', caught: 2},
              ],
            },
            {
              date: '2023-02-20',
              location: 'Chicago',
              photoUrl: 'https://example.com/photo3.jpg',
              fishData: [
                {type: 'Pike', caught: 4},
                {type: 'Perch', caught: 17},
              ],
            },
          ]

        },
        {
          id: "4",
          name: "Eve",
          data: [
            {
              date: '2023-05-11',
              location: 'New York',
              photoUrl: 'https://example.com/photo1.jpg',
              fishData: [
                {type: 'Salmon', caught: 10},
                {type: 'Trout', caught: 3},
                {type: 'Fish 3', caught: 14},
                {type: 'fish 4', caught: 3},
              ],
            },
            {
              date: '2023-06-15',
              location: 'Los Angeles',
              photoUrl: 'https://example.com/photo2.jpg',
              fishData: [
                {type: 'Bass', caught: 18},
                {type: 'Catfish', caught: 12},
              ],
            },
            {
              date: '2023-06-20',
              location: 'Chicago',
              photoUrl: 'https://example.com/photo3.jpg',
              fishData: [
                {type: 'Pike', caught: 4},
                {type: 'Perch', caught: 19},
              ],
            },
          ]
        }
      ]
    }
  }

  getTotalFishCount() {

    return "10"
  }

  render() {
    const {currentUserId} = this.props;

    console.log("selectedId", currentUserId)
    // Find the participant with the selected ID
    const selectedParticipant = this.state.participants.find(participant => participant.id == currentUserId);
    console.log("selectedParticipant", selectedParticipant)
    const totalFishCaught = this.getTotalFishCount(selectedParticipant);

    return (
        <>
          <Grid container spacing={3} sx={{pl: 4, pt: 4, pr: 4, backgroundColor: '#DDF2FD'}}>

            {/*<div>*/}
            {/*    <h1>Total Fish Caught: {totalFishCaught} fish</h1>*/}
            {/*</div>*/}

            <Grid item xs={12}>
              {selectedParticipant.data.map((entry, index) => (
                  <Paper sx={{p: 2, m: 2, display: 'flex', flexDirection: 'column', borderRadius: '16px'}}>
                    <Grid container>
                      <Grid item xs={4}>
                        <div className="date">{entry.date} </div>
                        <br/>
                        <div className="location">{entry.location}</div>
                      </Grid>

                      <Grid item xs={4}>
                        <Box
                            component="img"
                            sx={{
                              height: 250,
                              width: 350,
                              maxHeight: {xs: 233, md: 167},
                              maxWidth: {xs: 350, md: 250},
                            }}
                            src={entry.photoUrl}
                        />
                      </Grid>

                      <Grid item xs={4}>
                        <div className="fish-data">
                          {entry.fishData.map((fish, fishIndex) => (
                              <div key={fishIndex} className="fish-info">
                                <div className="fish-type">{fish.type}</div>
                                <div className="fish-count">{fish.caught}</div>
                              </div>
                          ))}
                        </div>
                      </Grid>
                    </Grid>
                  </Paper>
              ))};
            </Grid>
          </Grid>
        </>
    );

  }


}

export default ParticipantStat;
