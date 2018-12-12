import React, { Component } from 'react'
import { chunk, pick } from 'lodash';
import Timeline from 'react-timelines'
import sampleData from './sample.json';
import 'react-timelines/lib/css/style.css'
import { buildTrack, buildTimebar, getMaximumDate } from './builders'

const substore = pick(sampleData, ['positions', 'education', 'projects', 'certifications'])
const START_YEAR = getMaximumDate(substore).year() - 3;
const END_YEAR = getMaximumDate(substore, false).year() + 3;
const ZOOM_MIN = 0;
const ZOOM_MAX = 20;
const timebar = buildTimebar(START_YEAR, END_YEAR);

const getNonCollidingSubsets = entities => {
  // TODO Create the minimum number of arrays to contain all events of this type so that no events in the same array overlap
  return chunk(entities);
};


class App extends Component {
  constructor(props) {
    super(props)
    const tracksById = {};
    Object.entries(substore).forEach(([entityType, entitiesOfType]) => {
      getNonCollidingSubsets(entitiesOfType).forEach((entities, i) => {
        const newTrack = buildTrack(entityType, entities, i);
        tracksById[newTrack.id] = newTrack;
      });
    });
    this.state = {
      zoom: 2,
      tracksById,
      tracks: Object.values(tracksById),
    }
  }

  handleZoomIn = () => { this.setState({ zoom: Math.min(this.state.zoom + 0.1, ZOOM_MAX) }) }
  handleZoomOut = () => { this.setState({ zoom: Math.max(this.state.zoom - 0.1, ZOOM_MIN) }) }

  render() {
    const { zoom, tracks } = this.state
    const start = new Date(`${START_YEAR}`)
    const end = new Date(`${END_YEAR}`)
    return (
      <div className="app">
        <h1 className="title">React Timelines</h1>
        <Timeline
          scale={{ start, end, zoom, zoomMin: ZOOM_MIN, zoomMax: ZOOM_MAX }}
          isOpen={true}
          zoomIn={this.handleZoomIn}
          zoomOut={this.handleZoomOut}
          clickElement={element => alert(`Clicked ${element}`)}
          timebar={timebar}
          tracks={tracks}
          now={new Date()}
          enableSticky
          scrollToNow
        />
      </div>
    )
  }
}

export default App
