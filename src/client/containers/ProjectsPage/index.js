import React from 'react';
import { connect } from 'react-redux';
import { Container, Card, Button } from 'reactstrap';
import { fetchEntities, createLocalEntity } from '../../redux/actions/entityActions';
import { Header, Project } from '../../components';

const ProjectsPage = props => {
    const { projects, error, fetchEntities, createLocalEntity } = props;
    const alreadyCreating = projects.some(project => project._local);

    const mainBody = error ? (
        <Card>
            <h3>Error fetching data</h3>
            <Button onClick={fetchEntities('projects')}>Retry</Button>
        </Card>
    ) : (
        projects.map(project => <Project key={project.id} {...project} />)
    );

    const createButton = alreadyCreating ? null : (
        <Card className='project'>
            <Button onClick={createLocalEntity.bind(null, 'projects')}>New</Button>
        </Card>
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
