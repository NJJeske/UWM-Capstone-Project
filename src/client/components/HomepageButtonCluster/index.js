import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../sass/_homepagebuttoncluster.scss';

/*
 * Class component that will represent the cluster of 6 main buttons that will appear on
 * the applications homepage. These 6 buttons will direct the user to the buttons corresponding
 * page. These buttons will be 'Documents', 'Education', 'Experience', 'Projects', 'Contacts',
 * and 'Timeline'.
 */
export class HomepageButtonCluster extends Component {
    constructor(props) {
        super(props);
        this.routeTo = this.routeTo.bind(this);
    }

    routeTo(p) {
        let path = p;
        this.props.history.push(path);
    }

    render() {
        return (
            <div className='ButtonCluster'>
                <Row className='FirstRow justify-content-md-center'>
                    <Col className='buttoncombo'>
                        <Button
                            color='Secondary'
                            onClick={() => this.routeTo('/documents')}
                        >
                            <FontAwesomeIcon icon='file-alt' size='3x' />
                            <br />
                            <span className='label'>Documents</span>
                        </Button>
                    </Col>
                    <Col className='buttoncombo'>
                        <Button
                            color='Secondary'
                            onClick={() => this.routeTo('/experience')}
                        >
                            <FontAwesomeIcon icon='briefcase' size='3x' />
                            <br />
                            <span className='label'>Experience</span>
                        </Button>
                    </Col>
                    <Col className='buttoncombo'>
                        <Button
                            color='Secondary'
                            onClick={() => this.routeTo('/education')}
                        >
                            <FontAwesomeIcon icon='graduation-cap' size='3x' />
                            <br />
                            <span className='label'>Education</span>
                        </Button>
                    </Col>
                </Row>
                <Row className='SecondRow justify-content-md-center'>
                    <Col className='buttoncombo'>
                        <Button color='Secondary' onClick={() => this.routeTo('/projects')}>
                            <FontAwesomeIcon icon='project-diagram' size='3x' />
                            <br />
                            <span className='label'>Projects</span>
                        </Button>
                    </Col>
                    <Col className='buttoncombo'>
                        <Button color='Secondary' onClick={() => this.routeTo('/contacts')}>
                            <FontAwesomeIcon icon='address-book' size='3x' />
                            <br />
                            <span className='label'>Contacts</span>
                        </Button>
                    </Col>
                    <Col className='buttoncombo'>
                        <Button color='Secondary' onClick={() => this.routeTo('/timeline')}>
                            <FontAwesomeIcon icon='calendar-alt' size='3x' />
                            <br />
                            <span className='label'>Timeline</span>
                        </Button>
                    </Col>
                    <Col className='buttoncombo'>
                        <Button color='Secondary' onClick={() => this.routeTo('/certifications')}>
                            <FontAwesomeIcon icon='certificate' size='3x' />
                            <br />
                            <span className='label'>Certifications</span>
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(HomepageButtonCluster);
