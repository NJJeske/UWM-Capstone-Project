import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { Container } from 'reactstrap';
import Timeline from 'react-timelines';
import { Sidebar, Header } from '../../components';
import { getNonCollidingSubsets, buildTrack, buildTimebar, getMaximumDate } from './helpers';
import 'react-timelines/lib/css/style.css';
import './styles.scss';

const ZOOM_MIN = 0.2;
const ZOOM_MAX = 10;
class TimelinePage extends Component {
    constructor(props) {
        super(props);
        const { entities, startYear, endYear } = props;

        const tracksById = {};
        Object.entries(entities).forEach(([entityType, { list: entitiesOfType }]) => {
            getNonCollidingSubsets(entitiesOfType).forEach((entitiesOfTypeSubset, i) => {
                const newTrack = buildTrack(entityType, entitiesOfTypeSubset, i, startYear, endYear);
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
        const { auth, startYear, endYear } = this.props;
        const { zoom, timebar, tracks } = this.state;
        return (
            <Container fluid={true} id='TIMELINE_PAGE'>
                <Sidebar />
                <Header title='Timeline' auth={auth} />
                <main className='clearfix'>
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
                </main>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    const entities = pick(state.data, ['positions', 'education', 'projects', 'certifications']);
    return {
        entities,
        startYear: getMaximumDate(entities).year() - 2,
        endYear: getMaximumDate(entities, false).year() + 2,
    };
};

export default connect(mapStateToProps)(TimelinePage);
