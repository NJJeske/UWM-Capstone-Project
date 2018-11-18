import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import { fetchEntities, createLocalEntity } from '../../redux/actions/entityActions';
import { Header, Project, Sidebar, Footer } from '../../components';
import './styles.scss';

const ProjectsPage = props => {
    const { projects, fetchEntities, createLocalEntity } = props;
    const alreadyCreating = projects.list.some(project => project._local);

    const mainBody = projects.error ? (
        <Container className='fetchError'>
            <h3>Error fetching data</h3>
            <Button onClick={fetchEntities.bind(null, 'projects')}>Retry</Button>
        </Container>
    ) : (
        projects.list.map(project => <Project key={project.id} {...project} />)
    );

    const createButton = alreadyCreating || projects.error ? null : (
        <Container className='entity'>
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
        <div>
            <Sidebar />
            <Container fluid={true} id="PROJECTS_PAGE">
                <Header title='Projects' />
                <main>
                    {mainBody}
                    {createButton}
                </main>
            </Container>
            <Footer />
        </div >
    );
};

const mapStateToProps = state => ({
    user: state.user,
    projects: state.data.projects,
});

const mapDispatchToProps = {
    fetchEntities,
    createLocalEntity,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
