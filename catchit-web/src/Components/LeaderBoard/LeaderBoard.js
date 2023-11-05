import React, { Component } from 'react';
import './LeaderBoard.css';

class LeaderBoard extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: 'John',
          points: 15,
        },
        {
          id: 2,
          name: 'Alice',
          points: 10,
        },
        {
          id: 3,
          name: 'Bob',
          points: 20,
        },
        {
          id: 4,
          name: 'Eve',
          points: 18,
        },
      ],
    };
  }

  handleParticipantClick = (id) => {
    console.log(`Clicked on participant with ID: ${id}`);
    this.props.onSelect(id)
  };

  render() {

    const sortedData = this.state.data.slice().sort((a, b) => b.points - a.points);


    return (
      <div className="name-list">
        <h1>LeaderBoard</h1>
        <ul className="participants">
          {sortedData.map((participant) => (
            <li
              key={participant.id}
              onClick={() => this.handleParticipantClick(participant.id)}
            >
              <div className="participant-name">{participant.name}</div>
              <div className="participant-points">{participant.points} points</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LeaderBoard;
