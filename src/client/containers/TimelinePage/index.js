import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { Container } from 'reactstrap';
import Timeline from 'react-timelines';
import { getNonCollidingSubsets, buildTrack, buildTimebar, getMaximumDate } from './helpers';
import 'react-timelines/lib/css/style.css';
import './styles.scss';

const ZOOM_MIN = 0;
const ZOOM_MAX = 20;
class TimelinePage extends Component {
    constructor(props) {
        super(props);
        const { entities, startYear, endYear } = props;

        const tracksById = {};
        Object.entries(entities).forEach(([entityType, { list: entitiesOfType }]) => {
            getNonCollidingSubsets(entitiesOfType).forEach((entitiesOfTypeSubset, i) => {
                const newTrack = buildTrack(entityType, entitiesOfTypeSubset, i);
                tracksById[newTrack.id] = newTrack;
            });
        });

        this.state = {
            zoom: 0.3,
            timebar: buildTimebar(startYear, endYear),
            tracksById,
            tracks: Object.values(tracksById),
        };
    }

    handleZoomIn() {
        const newZoom = Math.min(this.state.zoom + 0.1, ZOOM_MAX);
        this.setState({ zoom: newZoom });
    }

    handleZoomOut() {
        const newZoom = Math.max(this.state.zoom - 0.1, ZOOM_MIN);
        this.setState({ zoom: newZoom });
    }

    render() {
        const { startYear, endYear } = this.props;
        const { zoom, timebar, tracks } = this.state;
        return (
            <Container fluid={true} id='TIMELINE_PAGE'>
                <h1 className="title">React Timelines</h1>
                <Timeline
                    scale={{
                        start: new Date(`${startYear}`),
                        end: new Date(`${endYear}`),
                        zoom,
                        zoomMin: ZOOM_MIN,
                        zoomMax: ZOOM_MAX
                    }}
                    isOpen={true}
                    zoomIn={this.handleZoomIn.bind(this)}
                    zoomOut={this.handleZoomOut.bind(this)}
                    clickElement={element => alert(`Clicked ${element}`)}
                    timebar={timebar}
                    tracks={tracks}
                    now={new Date()}
                    enableSticky
                    scrollToNow
                />
            </Container>
        );
    }
}

const mapStateToProps = state => {
    const entities = pick(state.data, ['positions', 'education', 'projects', 'certifications']);
    return {
        entities,
        startYear: getMaximumDate(entities).year() - 3,
        endYear: getMaximumDate(entities, false).year() + 3,
    };
};

export default connect(mapStateToProps)(TimelinePage);
