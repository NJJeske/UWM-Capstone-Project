import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import { fetchEntities, createLocalEntity } from '../../redux/actions/entityActions';
import { Header, Project } from '../../components';

const ProjectsPage = props => {
    const { projects, error, fetchEntities, createLocalEntity } = props;
    const alreadyCreating = projects.some(project => project._local);

    const mainBody = error ? (
        <Container className='card entity projects'>
            <h3>Error fetching data</h3>
            <Button onClick={fetchEntities('projects')}>Retry</Button>
        </Container>
    ) : (
        projects.map(project => <Project key={project.id} {...project} />)
    );

    const createButton = alreadyCreating ? null : (
        <Container className='card entity'>
            <Row>
                <Col
                    xs={{ size: 8, offset: 2 }}
                    sm={{ size: 6, offset: 3 }}
                >
                    <Button className='projects createButton' onClick={createLocalEntity.bind(null, 'projects')}>Create</Button>
                </Col>
            </Row>
        </Container>
    );

    return (
        <Container fluid={true} id="PROJECTS_PAGE">
            <Header title='Projects' />
            <main>
                {mainBody}
                {createButton}
            </main>
        </Container>
    );
};

const mapStateToProps = state => ({
    user: state.user,
    projects: state.data.projects.list,
});

const mapDispatchToProps = {
    fetchEntities,
    createLocalEntity,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
