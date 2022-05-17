import React from 'react';
import axios from 'axios';

export default class Covidinfo extends React.Component {
  state = {
    dates: []
  }

  componentDidMount() {
    axios.get(`https://data.incovid19.org/v4/min/timeseries.min.json`)
      .then(res => {
        const PondyData = res.data.PY;
        console.log(PondyData)
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.dates
            .map(dates =>
              <li key={dates.id}>{dates}</li>
            )
        }
      </ul>
    )
  }
}