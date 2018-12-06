import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header } from '../../components';
import './styles.scss';

export const DashboardPage = props => (
    <Container fluid={true} id='DASHBOARD_PAGE'>
        <Header title='My Portfolio' />
        <main >
            <Row>
                <Col className='buttoncombo'>
                    <Link to='/documents'>
                        <FontAwesomeIcon icon='file-alt' size='3x' />
                        <span className='label'>Documents</span>
                    </Link>
                </Col>
                <Col className='buttoncombo'>
                    <Link to='/experience'>
                        <FontAwesomeIcon icon='briefcase' size='3x' />
                        <span className='label'>Experience</span>
                    </Link>
                </Col>
                <Col className='buttoncombo'>
                    <Link to='/education'>
                        <FontAwesomeIcon icon='graduation-cap' size='3x' />
                        <span className='label'>Education</span>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col className='buttoncombo'>
                    <Link to='/projects'>
                        <FontAwesomeIcon icon='file-alt' size='3x' />
                        <span className='label'>Projects</span>
                    </Link>
                </Col>
                <Col className='buttoncombo'>
                    <Link to='/contacts'>
                        <FontAwesomeIcon icon='address-book' size='3x' />
                        <span className='label'>Contacts</span>
                    </Link>
                </Col>
                <Col className='buttoncombo'>
                    <Link to='/certifications'>
                        <FontAwesomeIcon icon='certificate' size='3x' />
                        <span className='label'>Certifications</span>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col xs='12' className='buttoncombo'>
                    <Link to='/timeline'>
                        <FontAwesomeIcon icon='calendar-alt' size='3x' />
                        <span className='label'>Timeline</span>
                    </Link>
                </Col>
            </Row>
        </main>
    </Container>
);

export default DashboardPage;
